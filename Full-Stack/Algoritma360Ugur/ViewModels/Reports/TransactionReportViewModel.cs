namespace Algoritma360Ugur.ViewModels.Reports;

public class TransactionReportViewModel
{
    public DateTime Date { get; set; }
    public string Username { get; set; } = null!;
    public string ProductName { get; set; } = null!;
    public int Quantity { get; set; }
    public string OperationType => Quantity > 0 ? "Stok Girişi" : "Sevkiyat";
}
