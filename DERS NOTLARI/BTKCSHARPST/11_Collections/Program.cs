using System.Collections;
namespace _11_Collections
{
    public class Urun
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            // Collections
            // ArrayList
            // List<T>
            // Dictionary<TKey, TValue>
            // HashSet<T>
            // Queue<T>
            // Stack<T>

            // Arraylerde bi sınır veriliyor collections buna çözüm oluyor
            // generic ve nongenericler var genericlerde tür belirtiyorsun nongenericlerde o da yok 
            #region Non-Generic
            // Non-Generic => Object olarak tutuyor ArrayList collections sınıfından
            ArrayList liste = new ArrayList();
            liste.Add(10);
            liste.Add("Ali");
            liste.Add(30);
            liste.Add(false);
            liste.Add('X');
            liste.Add(new int[3] { 1, 2, 3 });
            Console.WriteLine(liste[liste.Count - 1]);

            foreach (var item in liste)
            {
                if (item is int[] arr)
                {
                    foreach (var i in arr)
                    {
                        Console.WriteLine(i);
                    }
                }
                else
                {
                    Console.WriteLine(item);
                }

            }
            #endregion
            #region Generic
            // Generic => Tür belirtiyorsun List<T> collections sınıfından
            List<int> sayiListesi = new List<int>();
            sayiListesi.Add(10);
            sayiListesi.Add(20);

            List<string> isimListesi = new List<string>();
            isimListesi.Add("Ahmet");
            isimListesi.Add("Mehmet");

            foreach (var item in sayiListesi)
            {
                Console.WriteLine(item);
            }

            foreach (var item in isimListesi)
            {
                Console.WriteLine(item);
            }
            // Önemli Not: Generic collections tür güvenliği sağlar ve performans açısından daha iyidir.
            List<Urun> urunListesi = new List<Urun>();
            urunListesi.Add(new Urun { Id = 1, Name = "Laptop", Price = 5000 });
            urunListesi.Add(new Urun { Id = 2, Name = "Telefon", Price = 3000 });
            foreach (var urun in urunListesi)
            {
                Console.WriteLine($"Id: {urun.Id}, Name: {urun.Name}, Price: {urun.Price}");
            }
            urunListesi.AddRange(new Urun[]
            {
                new Urun { Id = 3, Name = "Tablet", Price = 2000 },
                new Urun { Id = 4, Name = "Monitor", Price = 1500 }
            });
            urunListesi.Insert(urunListesi.Count, new Urun { Id = 5, Name = "Klavye", Price = 300 });
            Console.WriteLine("---- After AddRange and Insert ----");
            foreach (var urun in urunListesi)
            {
                Console.WriteLine($"Id: {urun.Id}, Name: {urun.Name}, Price: {urun.Price}");
            }

            #endregion
            #region Dictionary
            // Dictionary<Tkey, TValue>
            //key-value (anahtar-değer) çiftleri olarak veri saklar 
            // plaka - şehir adı gibi
            Dictionary<int, string> plakalar = new Dictionary<int, string>();
            plakalar.Add(34, "İstanbul");
            plakalar.Add(06, "Ankara");
            plakalar.Add(35, "İzmir");
            plakalar.Add(41, "Kocaeli");
            plakalar.ContainsKey(06); // true
            plakalar.ContainsValue("Ankara"); // true
            System.Console.WriteLine(plakalar[41]); // Kocaeli
            #endregion

        }
    }
}

