using System.ComponentModel.DataAnnotations;

namespace Algoritma360Ugur.Models;

public class Log
{
    public int Id { get; set; }
    public int ProductId { get; set; }
    public int UserId { get; set; }
    public int Quantity { get; set; }
    public DateTime CreatedAt { get; set; }
    [Required]
    public Product Product { get; set; } = null!;
    [Required]
    public User User { get; set; } = null!;
}