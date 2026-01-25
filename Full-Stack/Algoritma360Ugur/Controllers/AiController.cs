using Algoritma360Ugur.Data;
using Algoritma360Ugur.Services;
using Algoritma360Ugur.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Algoritma360Ugur.Controllers;

[Authorize(Roles = "Admin")]
public class AiController : Controller
{
    private readonly AppDbContext _context;
    private readonly AiStockRiskService _aiService;

    public AiController(AppDbContext context, AiStockRiskService aiService)
    {
        _context = context;
        _aiService = aiService;
    }

    public IActionResult Index()
    {
        return View();
    }

    public async Task<IActionResult> StockRisk()
    {
        var last7Days = DateTime.Now.AddDays(-7);

        var products = await _context.Products
            .Include(p => p.Stock)
            .Select(p => new
            {
                p.Name,
                Stock = p.Stock.Quantity,
                WeeklySales = _context.Logs
                    .Where(l => l.ProductId == p.Id &&
                                l.CreatedAt >= last7Days &&
                                l.Quantity < 0)
                    .Sum(l => Math.Abs(l.Quantity))
            })
            .ToListAsync();

        var result = new List<StockRiskViewModel>();

        foreach (var p in products)
        {
            var dailyAvg = p.WeeklySales / 7.0;

            var aiComment = await _aiService.AnalyzeAsync(
                p.Name,
                p.Stock,
                p.WeeklySales,
                dailyAvg);

            var riskLevel =
                dailyAvg == 0 ? "Low" :
                p.Stock < dailyAvg * 3 ? "High" :
                p.Stock < dailyAvg * 7 ? "Medium" :
                "Low";

            result.Add(new StockRiskViewModel
            {
                ProductName = p.Name,
                CurrentStock = p.Stock,
                WeeklySales = p.WeeklySales,
                DailyAverageSales = dailyAvg,
                RiskLevel = riskLevel,
                AiComment = aiComment
            });
        }

        return View(result);
    }
}
