Console.WriteLine("Veri Tipleri");
/*
sbyte	-128 to 127	Signed 8-bit integer	System.SByte
byte	0 to 255	Unsigned 8-bit integer	System.Byte
short	-32,768 to 32,767	Signed 16-bit integer	System.Int16
ushort	0 to 65,535	Unsigned 16-bit integer	System.UInt16
int	-2,147,483,648 to 2,147,483,647	Signed 32-bit integer	System.Int32
uint	0 to 4,294,967,295	Unsigned 32-bit integer	System.UInt32
long	-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807	Signed 64-bit integer	System.Int64
ulong	0 to 18,446,744,073,709,551,615	Unsigned 64-bit integer	System.UInt64
nint	Depends on platform (computed at runtime)	Signed 32-bit or 64-bit integer	System.IntPtr
nuint	Depends on platform (computed at runtime)	Unsigned 32-bit or 64-bit integer	System.UIntPtr

*/
Console.WriteLine($"intin max valuesi = {int.MaxValue}");




/*
boolean true false
decimal
double
float
char
object
string
delegate
dynamic
*/

// VERİ DÖNÜŞÜMLERİ

var sayi1 = Convert.ToInt32(Console.ReadLine());

//Tip Kontrolü
Console.WriteLine(sayi1.GetType());

//tip dönüşümü büyükten küçüğe
long a = 20;
int b = (int)a;

double c = 10.25;
float d = (float)c;



//nullable types
int? x = null;

Console.WriteLine(x.HasValue); //Returns False ÖNEMLİ BİR FONKSİYON ÖRNEĞİN İF (X.HASVALUE){} tarzı kullanılabilir
Console.WriteLine(x.GetValueOrDefault());