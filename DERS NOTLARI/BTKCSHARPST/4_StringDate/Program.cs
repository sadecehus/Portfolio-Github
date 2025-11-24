// Karakter Dizisidir. referance typedir nullable

Console.Write("Adınız: ");
string? ad = Console.ReadLine();

Console.Write("Soyadınız: ");
string? soyad = Console.ReadLine();

Console.Write("Yaşınız: ");
int yas = Convert.ToInt32(Console.ReadLine());


//string concat
string mesaj = ad + " " + soyad + " adlı kişi  " + yas + " yaşındadır.";

//string interpolation
string mesaj2 = $"{ad} {soyad} adlı kişi {yas} yaşındadır.";

Console.WriteLine(mesaj2);


//String Functions

//uzunluk
int mesajUzunlugu = mesaj2.Length;
Console.WriteLine(mesajUzunlugu);

//ToLower küçük harf , ToUpper büyük harf
var mesaj3 = mesaj2.ToLower();
var mesaj4 = mesaj2.ToUpper();

//Trim stringin başında veya sonundaki boşlukları siler "   ahmet abi. " başı

//split kelimelere ayırma
string sentence = "Ah Istanbul Istanbul olalı görmedi böyle keder!";
var words = sentence.Split(" ");
var i = 0;
foreach (var word in words)
{

    Console.WriteLine($"{i}. kelime = {word} ");
    i++;
}


//startwith, endwith
//contains("value")

//IndexOf("char")
Console.WriteLine(sentence.IndexOf("h"));

//Pratik için 
string practice = ".NET 9 ile C# Programlama dili.";
Console.WriteLine(practice.Length); //Uzunluğu
Console.WriteLine(practice.ToLower()); //Hepsi Küçük Harf
Console.WriteLine(practice.ToUpper()); //Hepsi büyük harf
Console.WriteLine(practice.StartsWith("."));
Console.WriteLine(practice.Contains("C#"));
Console.WriteLine(practice.IndexOf("C#"));
Console.WriteLine(practice.Replace("dili", "Dersleri"));
