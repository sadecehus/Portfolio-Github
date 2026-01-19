using Algoritma360Ugur.Data;
using Algoritma360Ugur.ViewModels.Reports;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Algoritma360Ugur.Controllers;

[Authorize(Roles = "Admin")]
public class ReportController : Controller
{
    private readonly AppDbContext _context;

    public ReportController(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IActionResult> TransactionReport()
    {
        var report = await _context.Logs
            .Include(l => l.Product)
            .Include(l => l.User)
            .AsNoTracking()
            .OrderByDescending(l => l.CreatedAt)
            .Select(l => new TransactionReportViewModel
            {
                Date = l.CreatedAt,
                Username = l.User.Username,
                ProductName = l.Product.Name,
                Quantity = l.Quantity
            })
            .ToListAsync();

        return View(report);
    }

    public async Task<IActionResult> StockReport()
    {
        var report = await _context.Logs
            .Include(l => l.Product)
            .AsNoTracking()
            .GroupBy(l => new { l.ProductId, l.Product.Name })
            .Select(g => new StockReportViewModel
            {
                ProductId = g.Key.ProductId,
                ProductName = g.Key.Name,
                TotalIn = g.Where(x => x.Quantity > 0).Sum(x => x.Quantity),
                TotalOut = g.Where(x => x.Quantity < 0).Sum(x => Math.Abs(x.Quantity))
            })
            .ToListAsync();

        return View(report);
    }
}