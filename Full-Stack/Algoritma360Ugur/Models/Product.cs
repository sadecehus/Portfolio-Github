using System.ComponentModel.DataAnnotations;

namespace Algoritma360Ugur.Models;

public class Product
{
    public int Id { get; set; }
    [Required]
    public string Name { get; set; } = null!;
    public string? Description { get; set; }
    public Stock Stock { get; set; } = null!;
    
    [Required]
    public ProductRule ProductRule { get; set; } = null!;
}