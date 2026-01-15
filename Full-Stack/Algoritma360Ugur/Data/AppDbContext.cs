using Algoritma360Ugur.Models;
using Microsoft.EntityFrameworkCore;

namespace Algoritma360Ugur.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options){}
    
    public DbSet<User> Users => Set<User>();
    public DbSet<Product> Products => Set<Product>();
    public DbSet<Stock> Stocks => Set<Stock>();
    public DbSet<ProductRule> ProductRules => Set<ProductRule>();
    public DbSet<Log> Logs => Set<Log>();
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>()
            .HasOne(p => p.Stock)
            .WithOne(s => s.Product)
            .HasForeignKey<Stock>(s => s.ProductId);
        

        modelBuilder.Entity<Product>()
            .HasOne(p => p.ProductRule)
            .WithOne(r => r.Product)
            .HasForeignKey<ProductRule>(r => r.ProductId);
    }

}