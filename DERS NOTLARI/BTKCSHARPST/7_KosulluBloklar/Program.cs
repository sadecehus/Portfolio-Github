// Koşullu Bloklar
/*
if (koşul)
{
    // koşul doğruysa çalışacak kod
}
else
{
    // koşul yanlışsa çalışacak kod
}
*/

// Örnek 1: Sayının pozitif, negatif veya sıfır olduğunu kontrol etme
Console.Write("Bir sayı giriniz: ");
int number = Convert.ToInt32(Console.ReadLine());
if (number > 0)
{
    Console.WriteLine("Girilen sayı pozitif.");
}
else if (number < 0)
{
    Console.WriteLine("Girilen sayı negatif.");
}
else
{
    Console.WriteLine("Girilen sayı sıfır.");
}

// switch-case yapısı
/*
switch (ifade)
{
    case değer1:
        // değer1 için çalışacak kod
        break;
    case değer2:
        // değer2 için çalışacak kod
        break;
    default:
        // hiçbir değer eşleşmezse çalışacak kod
        break;
}
*/

// Örnek 2: Gün adını alıp haftanın kaçıncı günü olduğunu bulma
Console.Write("Gün adını giriniz (örn: Pazartesi): ");
string gun = Console.ReadLine() ?? "";
switch (gun)
{
    case "Pazartesi":
        Console.WriteLine("Haftanın 1. günü");
        break;
    case "Salı":
        Console.WriteLine("Haftanın 2. günü");
        break;
    case "Çarşamba":
        Console.WriteLine("Haftanın 3. günü");
        break;
    case "Perşembe":
        Console.WriteLine("Haftanın 4. günü");
        break;
    case "Cuma":
        Console.WriteLine("Haftanın 5. günü");
        break;
    case "Cumartesi":
        Console.WriteLine("Haftanın 6. günü");
        break;
    case "Pazar":
        Console.WriteLine("Haftanın 7. günü");
        break;
    default:
        Console.WriteLine("Geçersiz gün adı.");
        break;
}

// ternary operator
/*
koşul ? doğruysa çalışacak kod : yanlışsa çalışacak kod;
*/

Console.Write("Bir sayı giriniz: ");
int sayi2 = Convert.ToInt32(Console.ReadLine());
string sonuc2 = sayi2 % 2 == 0 ? "Girilen sayı çifttir." : "Girilen sayı tektir.";
Console.WriteLine(sonuc2);