
namespace _10._1_Class
{
    public class Sorular
    {
       // Bu bir constructor methoddur her bir Nesne oluşturulduğunda bu classtan çağırılır 
        public Sorular()
        {
            Console.WriteLine("CTOR 1 KULLANILDI");
            this.Id = ((new Random()).Next(1000,999999)) + 1;
        }

       //Parametreli CTOR
        public Sorular(int soruId)
        {
            Console.WriteLine("CTOR 2 KULLANILDI");
            this.Id = soruId;
        }
        
        // CTOR BEST PRACTİCE  program csde tanımlanışına bak Garanti bir şekilde nesne oluşurken inputları alır
        public Sorular(int soruId, string soruMetni , string[]soruSiklari, string cevap)
        {
            Console.WriteLine("CTOR 3 KULLANILDI");
            this.Id = soruId;
            this.SoruMetni = soruMetni;
            this.SoruSiklari = soruSiklari;
            this.Cevap = cevap;
        }
        public int Id { get; set; }
        public string? SoruMetni { get; set; }
        public string[]? SoruSiklari { get; set; }
        public string Cevap { get; set; }

        public bool SoruKontrol(string cevap)
        {
            return this.Cevap.ToLower() == cevap.ToLower();
        }
    }
}