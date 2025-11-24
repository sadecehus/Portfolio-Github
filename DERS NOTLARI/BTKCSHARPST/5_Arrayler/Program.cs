using System.Globalization;
/*
var notlar = new int[3];
var ogrenciler = new string[3];

Console.Write("1. Öğrenciyi Giriniz : ");
ogrenciler[0] = Console.ReadLine();
Console.Write("1. Öğrencinin Notunu Giriniz : ");
notlar[0] = Convert.ToInt32(Console.ReadLine());

Console.Write("2. Öğrenciyi Giriniz : ");
ogrenciler[1] = Console.ReadLine();
Console.Write("2. Öğrencinin Notunu Giriniz : ");
notlar[1] = Convert.ToInt32(Console.ReadLine());


Console.Write("3. Öğrenciyi Giriniz : ");
ogrenciler[2] = Console.ReadLine();
Console.Write("3. Öğrencinin Notunu Giriniz : ");
notlar[2] = Convert.ToInt32(Console.ReadLine());

double toplam= 0;
foreach (double not in notlar)
{
    toplam += not;
}
for(int i = 0; i<ogrenciler.Length;i++)
{
    System.Console.WriteLine($"{i+1}. Öğrencinin Adı {ogrenciler[i]} ve notu : {notlar[i]}");
}

System.Console.WriteLine($"Öğrenci sayısı {ogrenciler.Length}");


double ort = toplam / notlar.Length;
Console.WriteLine($"Not ortalaması : {ort}");
*/

//Çok boyutlu diziler
string[] ogrenciler2 = new string[3]{"Ali","Veli","Ayşe"};
int[,] notlar2 = new int[3, 3]
{
    {100, 90, 80 },
    {70, 60, 50 },
    {40, 30, 20 }
};

