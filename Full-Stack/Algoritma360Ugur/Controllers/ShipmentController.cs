using System.Security.Claims;
using Algoritma360Ugur.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Algoritma360Ugur.Models;

namespace Algoritma360Ugur.Controllers;
[Authorize(Roles = "Admin,Operator")]
public class ShipmentController : Controller
{
    private readonly AppDbContext _context;
    public ShipmentController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> Index()
    {
        var products = await _context.Products
            .Include(p => p.Stock)
            .Include(p => p.ProductRule)
            .AsNoTracking()
            .ToListAsync();

        return View(products);
    }

    [HttpPost]
    public async Task<IActionResult> Index(int productId, int quantity)
    {
        if (quantity <= 0)
        {
            ViewBag.Error = "Quantity must be greater than 0";
            return await Index();
        }
        var product = await _context.Products
            .Include(p => p.Stock)
            .Include(p => p.ProductRule)
            .FirstOrDefaultAsync(p => p.Id == productId);
        if (product == null)
        {
            ViewBag.Error = "Product not found";
            return await Index();
        }
        if (!product.ProductRule.IsAllowed)
        {
            ViewBag.Error = "This product is not allowed for shipment";
            return await Index();
        }
        if (product.Stock == null || product.Stock.Quantity < quantity)
        {
            ViewBag.Error = "Insufficient stock";
            return await Index();
        }
        product.Stock.Quantity -= quantity;

        var userId = int.Parse(
            User.FindFirstValue(System.Security.Claims.ClaimTypes.NameIdentifier)!
        );
        
        var log = new Log
        {
            ProductId = product.Id,
            UserId = userId,
            Quantity = -quantity, 
            CreatedAt = DateTime.Now
        };

        _context.Logs.Add(log);

        await _context.SaveChangesAsync();

        ViewBag.Success = "Shipment completed successfully.";
        return await Index();
    }
    
}