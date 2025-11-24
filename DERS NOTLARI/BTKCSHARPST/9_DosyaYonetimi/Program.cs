/*
Dosya yönetimi
-Stream
-File
-Directory
-Path
*/

StreamReader sr = File.OpenText("doc.txt");
var s = "";
while ((s = sr.ReadLine()) != null)
{
    Console.WriteLine(s);
}

string sonuc = File.ReadAllText("doc.txt");
System.Console.WriteLine(sonuc);

string[] satırlar = File.ReadAllLines("doc.txt");
System.Console.WriteLine(satırlar[2]);


StreamWriter sw = File.AppendText("doc.txt");
sw.WriteLine("Yeni satır eklendi");
sw.Close();

File.Copy("doc.txt", "doc_yedek.txt", true);

File.Delete("doc_yedek.txt");

Directory.CreateDirectory("yeniklasor");
Directory.Delete("yeniklasor");

