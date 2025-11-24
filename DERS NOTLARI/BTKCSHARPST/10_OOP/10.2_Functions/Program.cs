#region Konu Anlatimi


/*
Fonksiyonlar, belirli bir görevi yerine getiren kod bloklarıdır ve programlamada kodun yeniden
kullanılabilirliğini artırmak için kullanılırlar. C# dilinde fonksiyonlar, "method" olarak adlandırılır
ve genellikle bir sınıfın içinde tanımlanırlar.

C# Fonksiyon Türleri:
1. Void Fonksiyonlar: Geri dönüş değeri olmayan fonksiyonlardır. Belirli bir işlemi gerçekleştirirler ancak
   herhangi bir değer döndürmezler.
   Örnek:
   public void Yazdir(string mesaj)
   {
       Console.WriteLine(mesaj);
   }
2. Geri Dönüş Değerli Fonksiyonlar: Belirli bir türde değer döndüren fonksiyonlardır.
   Örnek:
   public int Topla(int a, int b)
   {
       return a + b;
   }
3. Parametreli Fonksiyonlar: Fonksiyonlara dışarıdan veri alabilen fonksiyonlardır.
   Örnek:
   public void Yazdir(string mesaj)
   {
       Console.WriteLine(mesaj);
   }
4. Parametresiz Fonksiyonlar: Dışarıdan veri almayan fonksiyonlardır.
   Örnek:
   public void MerhabaDunya()
   {
       Console.WriteLine("Merhaba Dünya!");
   }
Fonksiyon Tanımlama ve Çağırma:
C# dilinde bir fonksiyon tanımlamak için erişim belirleyicisi, geri dönüş türü, fonksiyon adı ve parametre listesi
kullanılır. Fonksiyon çağrılırken ise fonksiyon adı ve gerekli parametreler belirtilir.
Örnek:
public class Matematik
{
    public int Topla(int a, int b)
    {
        return a + b;
    }
}
// Fonksiyon çağrısı
Matematik matematik = new Matematik();
int sonuc = matematik.Topla(5, 10);
Console.WriteLine(sonuc); // Çıktı: 15


Access Modifiers (Erişim Belirleyiciler):
C# dilinde fonksiyonların erişim düzeyini belirlemek için erişim belirleyiciler kullanılır. 
En yaygın erişim belirleyiciler şunlardır:
1. public: Fonksiyon her yerden erişilebilir.
2. private: Fonksiyon sadece tanımlandığı sınıf içinde erişilebilir.
3. protected: Fonksiyon sadece tanımlandığı sınıf ve türetilmiş sınıflar içinde erişilebilir.
4. internal: Fonksiyon sadece aynı assembly içinde erişilebilir.
5. protected internal: Fonksiyon aynı assembly içinde veya türetilmiş sınıflar tarafından erişilebilir.
Fonksiyon Overloading (Aşırı Yükleme):
C# dilinde aynı isimde birden fazla fonksiyon tanımlanabilir, ancak bu fonksiyonların parametre listeleri farklı olmalıdır.
Bu özelliğe fonksiyon overloading denir.
Örnek:
public class Matematik
{
    public int Topla(int a, int b)
    {
        return a + b;
    }
    public double Topla(double a, double b)
    {
        return a + b;
    }
}
Yukarıdaki örnekte, "Topla" fonksiyonu iki farklı parametre türü ile aşırı yüklenmiştir.


*/
#endregion
    
namespace _10._2_Functions
{

       internal class Program
    {
        static void Main(string[] args)
        { //Örnek 1;
            HesapMakinesi hesapMakinesi = new HesapMakinesi();

            int toplam = hesapMakinesi.Topla(10, 5);
            Console.WriteLine("Toplama: " + toplam);

            int fark = hesapMakinesi.Cikar(10, 5);
            Console.WriteLine("Çıkarma: " + fark);

            int carpim = hesapMakinesi.Carp(10, 5);
            Console.WriteLine("Çarpma: " + carpim);

            double bolum = hesapMakinesi.Bol(11, 5);
            Console.WriteLine("Bölme: " + bolum);



            //Örnek 2

            OgrenciNot ogr = new OgrenciNot();
            double ortalama = ogr.NotHesapla(70, 24, 64);
            string HarfNotu = ogr.HarfNotu(ortalama);
            string mesaj = ogr.NotBilgisi("Ali", ortalama, HarfNotu);

            Console.WriteLine("Ortalama Not: " + ortalama);
            Console.WriteLine("Harf Notu: " + HarfNotu);
            System.Console.WriteLine(mesaj);

        }

    }
    
}