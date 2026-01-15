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
    public IActionResult Create()
    {
        return View();
    }

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

        await _context.SaveChangesAsync();

        return RedirectToAction("Index", "Home");
    }
}
