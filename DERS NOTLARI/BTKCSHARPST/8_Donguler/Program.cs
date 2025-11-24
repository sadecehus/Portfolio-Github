/*
Döngüler -->
    - for
    - foreach
    - while
    - do-while

    --You can also use "break" and "continue" statements in loops.
*/
//Ornek 1 1-100 sayıları toplamı
int sonuc = 0;
for (int i = 0; i < 101; i++)
{
    sonuc += i;

}

Console.WriteLine(sonuc);


//ornek 2 klavyeden girilenn 2 sayı arasındaki tüm sayıların toplamı
System.Console.Write("Lütfen üst sınırı giriniz : ");
int sayi2 = Convert.ToInt32(Console.ReadLine());
System.Console.Write("Lütfen Alt sınırı giriniz : ");
int sayi1 = Convert.ToInt32(Console.ReadLine());
int sum = 0;
for (; sayi1 <= sayi2; sayi1++)
{
    sum += sayi1;
}
System.Console.WriteLine(sum);


// Örnek 3 Arrayde Dolaşmak
string[] names = {
"Ali",
"Ahmet",
"Veli",
"Musa",
"İsa"
};

for (int i = 0; i < names.Length; i++)
{
    System.Console.WriteLine(names[i]);
}


// Contuinue 1 sonraki iterasyona atar direkt altta kalan kısımlar çalışmaz;
// Break loopu bitirir;

//while uygulama sayı tahmin
Random rnd = new Random();
int tahminEdilecek = rnd.Next(101);
int tahmin;
int live = 10;
while (true)
{
    if (live == 0)
    {
        System.Console.WriteLine("Hakkın bitti bir daha dene");
        break;
    }
    System.Console.Write("Sayıyı tahmin et : ");
    tahmin = Convert.ToInt32(Console.ReadLine());
    if (tahminEdilecek == tahmin)
    {
        System.Console.WriteLine("Evet sayı doğru : " + tahmin + " " + (11 - live) + ". Denemede buldun.");
        break;
    }
    else if (tahmin > tahminEdilecek)
    {
        System.Console.WriteLine("Daha düşük bir tahmin yap!");
        live--;
        continue;
    }
    else
    {
        System.Console.WriteLine("Daha Yüksek bir tahmin yap");
        live--;
        continue;
    }
}

//For each tüm isimleri yazdır arraylerin loopu daha başka loop gelmez
foreach (string name in names)
{
    System.Console.WriteLine(name);
}