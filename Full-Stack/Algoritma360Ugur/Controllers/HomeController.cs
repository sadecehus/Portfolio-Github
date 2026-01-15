using System.Diagnostics;
using Algoritma360Ugur.Data;
using Microsoft.AspNetCore.Mvc;
using Algoritma360Ugur.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;

namespace Algoritma360Ugur.Controllers;

public class HomeController : Controller
{
    private readonly AppDbContext _context;

    public HomeController(AppDbContext context)
    {
        _context = context;
    }
    [Authorize]
    public async Task<IActionResult> Index()
    {
        var products = await _context.Products
            .Include(p => p.Stock)
            .Include(p => p.ProductRule)
            .AsNoTracking()
            .ToListAsync();

        return View(products);
    }
    
}
