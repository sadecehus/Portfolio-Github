using Microsoft.AspNetCore.Http;
using API.Data;
using API.Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ErrorController : ControllerBase
    {
        private readonly DataContext  _context;
    
        public ErrorController(DataContext context)
        {
           _context = context;
        }

        [HttpGet("not-found")]
        public IActionResult ErrorNotFound()
        {
            return NotFound(new ProblemDetails { Title = "Resource not found" });
        }

        [HttpGet("bad-request")]
        public IActionResult ErrorBadRequest()
        {
            return BadRequest(new ProblemDetails { Title = "Bad request" });
        }

        [HttpGet ("unauthorized")]
        public  IActionResult ErrorUnauthorized()
        {
       return Unauthorized();
        }

        [HttpGet ("server-error")]
        public  IActionResult ServerError()
        {
            throw new Exception("This is a test server error");
        }

        [HttpGet ("validation-error")]
        public  IActionResult ValidationError()
        {
            ModelState.AddModelError("Field1", "This field is required");
            ModelState.AddModelError("Field2", "Invalid format");
            return  ValidationProblem();
        }
    }
    
    
}
