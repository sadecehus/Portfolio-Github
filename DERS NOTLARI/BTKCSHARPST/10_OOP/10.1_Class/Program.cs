namespace _10._1_Class
{
    class Program
    {
        static void Main(string[] args)
        {
            // Console.WriteLine("Hello World!");
            // Ogrenci ogr = new Ogrenci();
            //
            // // Örnek kullanım:
            // ogr.Id = 1;
            // ogr.Ad = "Ahmet";
            // ogr.Soyad = "Yılmaz";
            // ogr.Sinif = 10;
            // ogr.Sube = 'A';
            //
            // Ogrenci ogr1 = new Ogrenci();
            // ogr1.Id = 2;
            // ogr1.Ad = "Ayşe";
            // ogr1.Soyad = "Kaya";
            // ogr1.Sinif = 9;
            // ogr1.Sube = 'B';
            //
            // Ogrenci ogr2 = new Ogrenci();
            // ogr2.Id = 3;
            // ogr2.Ad = "Mehmet";
            // ogr2.Soyad = "Demir";
            // ogr2.Sinif = 11;
            // ogr2.Sube = 'C';
            //
            // // Öğrencileri diziye atama
            // Ogrenci[] ogrenciler = new Ogrenci[] { ogr, ogr1, ogr2 };
            //
            // // Dizideki öğrencileri yazdırma
            // foreach (var ogrenci in ogrenciler)
            // {
            //     ogrenci.BilgileriYazdir();
            // }

            Sorular soru1 = new Sorular()
            {
                SoruMetni = "Tavuğun kaç bacağı vardır",
                SoruSiklari = new string[4] { "1", "2", "3", "4" },
                Cevap = "2"
            };
            Sorular soru2 = new Sorular()
            {
                SoruMetni = "İneğin kaç bacağı vardır",
                SoruSiklari = new string[4] { "1", "2", "3", "4" },
                Cevap = "4"
            };
            Sorular soru3 = new Sorular(10)
            {
                SoruMetni = "7 + 3 kaç eder",
                SoruSiklari = new string[4] { "1", "2", "3", "10" },
                Cevap = "10"
            };
            Sorular soru4 = new Sorular(423);
            
            Sorular soru5 = new Sorular(45,"Bu Bir ctor kullanımıdır",new string[2]{"Evet","Hayır"},"Evet");
            /*
            var tumsorular = new Sorular[] { soru1, soru2, soru3 };

            int correctCounter = 0;
            int falseCounter = 0;
            foreach (var sorular in tumsorular)
            {
                Console.WriteLine(sorular.SoruMetni);
                foreach (var options in sorular.SoruSiklari)
                {
                    Console.WriteLine(options);
                }

                Console.Write("Lütfen Cevabınızı giriniz: ");
                string cevap = Console.ReadLine() ?? "";
                if (sorular.SoruKontrol(cevap))
                {
                    Console.WriteLine("Soru Doğru !");
                    correctCounter++;
                }
                else
                {
                    Console.WriteLine("Soru Yanlış");
                    falseCounter++;
                }
            }
            Console.WriteLine($"Toplam Soru : {correctCounter+falseCounter}\nDoğru : {correctCounter} \nYanlış: {falseCounter}");
*/
            Console.WriteLine(soru1.Id);
            Console.WriteLine(soru2.Id);
            Console.WriteLine(soru3.Id);
            Console.WriteLine(soru4.Id);
            Console.WriteLine(soru5.Id);
        }
    }
}