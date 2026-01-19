using System.ComponentModel.DataAnnotations;

namespace Algoritma360Ugur.Models;

public class User
{
    public int Id { get; set; }
    
    [Required]
    public string Username { get; set; } = null!;
    
    [Required]
    public string PasswordHash { get; set; } = null!;


    public string Role { get; set; } = "Viewer";
    
    public ICollection<Log> Logs { get; set; } = new List<Log>();
}