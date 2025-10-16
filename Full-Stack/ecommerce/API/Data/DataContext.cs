using API.Entity;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Products { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>().HasData(
        new List<Product>
        {
            new Product
            {   Id = 1,Name = "Iphone 17",
                Description = "En son Iphone Modeli",
                ImageUrl = "1.jpg",
                IsActive = true,
                Price = 78000,
                Stock = 100
            },
    new Product
            {   Id = 2,Name = "Iphone 17 Pro",
                Description = "En son Iphone Modeli",
                ImageUrl = "2.jpg",
                IsActive = true,
                Price = 98000,
                Stock = 100
            },
    new Product
            {   Id = 3,Name = "Iphone 17 Pro Max",
                Description = "En son Iphone Modeli",
                ImageUrl = "3.jpg",
                IsActive = true,
                Price = 120000,
                Stock = 100
    } 
            }
        );
    }
}