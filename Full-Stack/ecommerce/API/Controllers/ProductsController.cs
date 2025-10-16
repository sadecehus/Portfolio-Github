using API.Data;
using API.Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")] // api/products
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly DataContext  _context;
        public ProductsController(DataContext context)
        {
           _context = context; 
        }
        //  api/product
        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
          var products = await _context.Products.ToListAsync();
          return Ok(products);
          
        }
        
        
        //  api/product/id
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct(int? id)
        {
            if (id == null)
            {
                return BadRequest();
            }
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product);
        } 
        
        
    }
}
