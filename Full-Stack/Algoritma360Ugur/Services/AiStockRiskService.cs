using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;

namespace Algoritma360Ugur.Services;

public class AiStockRiskService
{
    private readonly HttpClient _httpClient;
    private readonly string _apiKey;

    public AiStockRiskService(IConfiguration configuration)
    {
        _apiKey = configuration["OpenAI:ApiKey"]!;
        _httpClient = new HttpClient();
        _httpClient.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Bearer", _apiKey);
    }

    public async Task<string> AnalyzeAsync(
        string productName,
        int stock,
        int weeklySales,
        double dailyAverage)
    {
        var prompt = $"""
                      Product: {productName}
                      Current stock: {stock}
                      Weekly sales: {weeklySales}
                      Daily average sales: {dailyAverage:F1}

                      Analyze stock risk level (Low, Medium, High) and give a short recommendation.In Turkish.
                      """;

        var body = new
        {
            model = "gpt-4o-mini",
            messages = new[]
            {
                new { role = "user", content = prompt }
            }
        };

        var content = new StringContent(
            JsonSerializer.Serialize(body),
            Encoding.UTF8,
            "application/json");

        var response = await _httpClient.PostAsync(
            "https://api.openai.com/v1/chat/completions",
            content);

        var json = await response.Content.ReadAsStringAsync();
        using var doc = JsonDocument.Parse(json);

        return doc.RootElement
            .GetProperty("choices")[0]
            .GetProperty("message")
            .GetProperty("content")
            .GetString()!;
    }
}