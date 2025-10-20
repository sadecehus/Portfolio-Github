using Microsoft.EntityFrameworkCore;
using todoapi.Entities;

namespace todoapi.Data;

public class TodoContext : DbContext
{
    public TodoContext(DbContextOptions<TodoContext> options) 
        : base(options){}

    public DbSet<Todo> Todos => Set<Todo>();
}