namespace Algoritma360Ugur.ViewModels.Reports;

public class StockReportViewModel
{
    public int ProductId { get; set; }
    public string ProductName { get; set; } = null!;
    public int TotalIn { get; set; }
    public int TotalOut { get; set; }
    public int CurrentStock => TotalIn - TotalOut;
}
