// Operatörler
/*
-- Aritmetik Operatörler
---- + (Toplama)
---- - (Çıkarma)
---- * (Çarpma)
---- / (Bölme)
---- % (Mod Alma)
---- ++ (Arttırma)
---- -- (Azaltma)


-- Atama Operatörleri
---- = (Atama)
---- += (Toplama ve Atama)
---- -= (Çıkarma ve Atama)
---- *= (Çarpma ve Atama)
---- /= (Bölme ve Atama)
---- %= (Mod Alma ve Atama)

-- Karşılaştırma Operatörleri
---- == (Eşit)
---- != (Eşit Değil)
---- > (Büyük)
---- < (Küçük)
---- >= (Büyük Eşit)
---- <= (Küçük Eşit)
---- ?: (Ternary Operator) örnegin a>b ? "a b den büyüktür" : "a b den küçüktür" true ise ilk ifade false ise ikinci ifade döner.

-- Mantıksal Operatörler
---- && (Ve)
---- || (Veya)
---- ! (Değil)

*/

// Örnek 1 klavyeden girilen sayı tek mi çift mi ?

System.Console.Write("Bir sayı giriniz : ");
int sayi = Convert.ToInt32(Console.ReadLine());
if (sayi % 2 == 0)
{
    System.Console.WriteLine("Girilen sayı çifttir.");
}
else
{
    System.Console.WriteLine("Girilen sayı tektir.");
}

//Örnek 2 Girilen yaş oy kullanabilir mi ? 
Console.Write("Yaşınızı giriniz : ");
int yas = Convert.ToInt32(Console.ReadLine());
string sonuc = yas >= 18 ? "Oy kullanabilirsiniz." : "Oy kullanamazsınız.";
Console.WriteLine(sonuc);


//örnek 3 girilen sayı pozitif mi negatif mi
System.Console.Write("Test için sayı giriniz: ");
int tekmiciftmi = int.Parse(Console.ReadLine() ?? "");
string sonuctekmiciftmi = tekmiciftmi < 0 ? "Sayı Negatif" : tekmiciftmi == 0 ? "Girilen Sayı 0 " : " Sayı Pozitif";
Console.WriteLine(sonuctekmiciftmi);

// Random Class
Random rnd = new Random();
int rastgelesayi = rnd.Next(1, 101); // 1 ile 100 arasında rastgele sayı üretir
System.Console.WriteLine($"Rastgele Sayı: {rastgelesayi}");