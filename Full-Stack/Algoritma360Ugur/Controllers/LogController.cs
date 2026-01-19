using Algoritma360Ugur.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace Algoritma360Ugur.Controllers;
[Authorize(Roles = "Admin")]
public class LogController : Controller
{
    private readonly AppDbContext _context;

    public LogController(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IActionResult> Index()
    {
        var log = await _context.Logs
            .Include(l => l.Product)
            .Include(l => l.User)
            .OrderByDescending(l => l.CreatedAt)
            .AsNoTracking()
            .ToListAsync();
        
        return View(log);
    }
}