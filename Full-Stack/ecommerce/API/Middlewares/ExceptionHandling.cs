using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace API.Middlewares;

public class ExceptionHandling
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionHandling> _logger;
    private readonly IHostEnvironment _environment;

    public ExceptionHandling(RequestDelegate next, ILogger<ExceptionHandling> logger, IHostEnvironment environment)
    {   
        _logger = logger;
        _next = next;
        _environment = environment;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, ex.Message);
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            var response = _environment.IsDevelopment()
                ? new ProblemDetails
                {
                    Status = context.Response.StatusCode,
                    Title = ex.Message,
                    Detail = ex.StackTrace?.ToString()
                }
                : new ProblemDetails
                {
                    Status = context.Response.StatusCode,
                    Title = "An error occurred while processing your request."
                };

            var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };
            var json = JsonSerializer.Serialize(response, options);

            await context.Response.WriteAsync(json);
        }
    }
}