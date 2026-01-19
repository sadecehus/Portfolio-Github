using System.Security.Claims;
using Algoritma360Ugur.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Algoritma360Ugur.Models;
using Microsoft.AspNetCore.Authorization;

namespace Algoritma360Ugur.Controllers;

[Authorize]
public class ProductController : Controller
{
    private readonly AppDbContext _context;

    public ProductController(AppDbContext context)
    {
     _context = context;   
    }
    [Authorize(Roles = "Admin")]
    public IActionResult Create()
    {
        return View();
    }

    [Authorize(Roles = "Admin,Operator")]
    [HttpGet]
    public async Task<IActionResult> AddStock()
    {
        var products =await _context.Products
            .Include(p => p.Stock)
            .AsNoTracking()
            .ToListAsync();
        return View(products);
    }

    [Authorize(Roles = "Admin,Operator")]
    [HttpPost]
    public async Task<IActionResult> AddStock(int productId, int quantity)
    {
        if (quantity <= 0)
        {
            ViewBag.Error = "Quantity must be greater than 0";
            return await AddStock();
        }
        var product = await _context.Products
            .Include(p => p.Stock)
            .FirstOrDefaultAsync(p => p.Id == productId);
        if (product == null)
        {
            ViewBag.Error = "Product not found";
            return await AddStock();
        }
        product.Stock.Quantity += quantity;
        var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier));
        var log = new Log()
        {
            ProductId = product.Id,
            UserId = userId,
            Quantity = quantity,
            CreatedAt = DateTime.Now,
        };
        _context.Logs.Add(log);
        await _context.SaveChangesAsync();
        return RedirectToAction("Index" , "Home");
    }

    [Authorize(Roles = "Admin")]
    [HttpPost]
    public async Task<IActionResult> Create(
        string name,
        string? description,
        int initialStock,
        bool isAllowed)
    {
        if (string.IsNullOrWhiteSpace(name) || initialStock < 0)
        {
            ViewBag.Error = "Invalid product data.";
            return View();
        }

        var product = new Product
        {
            Name = name,
            Description = description
        };

        _context.Products.Add(product);
        await _context.SaveChangesAsync();

        var stock = new Stock
        {
            ProductId = product.Id,
            Quantity = initialStock
        };

        var rule = new ProductRule
        {
            ProductId = product.Id,
            IsAllowed = isAllowed
        };

        _context.Stocks.Add(stock);
        _context.ProductRules.Add(rule);
        
        var userId = int.Parse(User.FindFirstValue(System.Security.Claims.ClaimTypes.NameIdentifier)!);

        var log = new Log
        {
            ProductId = product.Id,
            UserId = userId,
            Quantity = initialStock, 
            CreatedAt = DateTime.Now
        };
        _context.Logs.Add(log);

        await _context.SaveChangesAsync();

        return RedirectToAction("Index", "Home");
    }
}
