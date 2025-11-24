
namespace _10._1_Class
{
    public class Ogrenci
    {
        public int Id { get; set; }
        public string? Ad { get; set; }
        public string? Soyad { get; set; }

        public int Sinif { get; set; }

        public char Sube { get; set; }

        public void BilgileriYazdir()
        {
            System.Console.WriteLine($"Öğrenci IDsi : {this.Id} , Öğrenci Adı ve Soyadı {this.Ad} {this.Soyad}, Öğrenci Sınıfı : {this.Sinif}/{this.Sube}");
        }
    }
}