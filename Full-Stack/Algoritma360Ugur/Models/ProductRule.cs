using System.ComponentModel.DataAnnotations;

namespace Algoritma360Ugur.Models;

public class ProductRule
{
    public int Id { get; set; }

    public int ProductId { get; set; }

    public bool IsAllowed { get; set; }

    [Required]
    public Product Product { get; set; } = null!;
}