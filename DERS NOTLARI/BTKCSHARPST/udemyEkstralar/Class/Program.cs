namespace Class
{
    internal class Program
    {
        static void Main(string[] args)
        {
          Customer customer = new Customer();
          customer.Id = 1;
          customer.FirstName = "Doğanay";
          customer.LastName = "Şalgam";
          customer.PrintName();
        }
    }
    
}