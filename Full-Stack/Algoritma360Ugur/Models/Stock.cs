using System.ComponentModel.DataAnnotations;

namespace Algoritma360Ugur.Models;

public class Stock
{
    public int Id { get; set; }

    public int ProductId { get; set; }

    public int Quantity { get; set; }

    [Required]
    public Product Product { get; set; } = null!;

}