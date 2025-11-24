using System.Linq;
namespace _12_HataYonetimi
{
    internal class Program
    {
        static void ParolaKontrol(string password)
        {
            if (password.Length <= 3 || password.Length >= 10)
            {
                throw new Exception("Parola 3-10 karakter olmalı");
            }

            if (!password.Any(char.IsDigit))
            {
                throw new Exception("En az 1 Rakam İçermelidir");
            }
               if (!password.Any(char.IsLetter))
            {
                throw new Exception("En az 1 Harf İçermelidir");
            }
        }
        static void Main(string[] args)
        {
            try
            {
                System.Console.Write("Lütfen bir sayı giriniz: ");
                int sayı = Convert.ToInt32(Console.ReadLine());
            }
            catch (Exception ex)
            {
                System.Console.WriteLine("Bir hata oluştu: " + ex.Message);
            }


            System.Console.Write("Parola giriniz ");
            string parola = Console.ReadLine();
           try
           {
                ParolaKontrol(parola);
           }
           catch (Exception ex)
           {
          System.Console.WriteLine("Hata: " + ex.Message);
           }

        }
    }

}