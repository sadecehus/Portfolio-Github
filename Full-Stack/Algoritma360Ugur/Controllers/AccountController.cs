using System.Security.Claims;
using Algoritma360Ugur.Data;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Algoritma360Ugur.Controllers;

public class AccountController : Controller
{
    private readonly AppDbContext _context;

    public AccountController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    [AllowAnonymous]
    public IActionResult Login()
    {
        if (User.Identity.IsAuthenticated && User.Identity != null)
        {
            return RedirectToAction("Index", "Home");
        }
        return View();
    }
        
    [HttpPost]
    public async Task<IActionResult> Login(string username, string password)
    {
        var user = await _context.Users
                .FirstOrDefaultAsync(u =>
                u.Username == username &&
                u.PasswordHash == password);

        if (user == null)
        {
            ViewBag.Error = "Kullanıcı adı veya şifre hatalı";
            return View();
        }

        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.Username),
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Role, user.Role)
        };

        var identity = new ClaimsIdentity(
            claims,
            CookieAuthenticationDefaults.AuthenticationScheme);

        var principal = new ClaimsPrincipal(identity);

        await HttpContext.SignInAsync(
            CookieAuthenticationDefaults.AuthenticationScheme,
            principal);

        return RedirectToAction("Index", "Home");
    }

    [HttpPost]
    public async Task<IActionResult> Logout()
    {
        await HttpContext.SignOutAsync(
            CookieAuthenticationDefaults.AuthenticationScheme);

        return RedirectToAction("Login");
    }
    public IActionResult AccessDenied()
    {
        return View();
    }
    
}