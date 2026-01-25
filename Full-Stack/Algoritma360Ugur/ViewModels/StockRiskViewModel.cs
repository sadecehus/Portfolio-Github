namespace Algoritma360Ugur.ViewModels;

public class StockRiskViewModel
{
    public string ProductName { get; set; } = null!;
    public int CurrentStock { get; set; }
    public int WeeklySales { get; set; }
    public double DailyAverageSales { get; set; }

    public string RiskLevel { get; set; } = null!;
    public string AiComment { get; set; } = null!;
}