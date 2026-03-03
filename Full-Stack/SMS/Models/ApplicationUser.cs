using Microsoft.AspNetCore.Identity;

namespace SMS.Models;

public class ApplicationUser : IdentityUser
{
    public string FullName { get; set; }

    // Navigation
    public Student Student { get; set; }
    public Teacher Teacher { get; set; }
}