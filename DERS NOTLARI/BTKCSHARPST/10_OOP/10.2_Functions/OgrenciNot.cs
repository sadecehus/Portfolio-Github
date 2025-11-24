using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _10._2_Functions
{
    public class OgrenciNot
    {

        public double NotHesapla(params int[] notlar)
        {
            int toplam = 0;
            foreach (int not in notlar)
            {
                toplam += not;
            }
            double ort = (double)toplam / notlar.Length;
            return Math.Round(ort, 2);
        }
        public string HarfNotu(double ort)
        {
            if (ort > 90) return "AA";
            else if (ort > 80) return "BA";
            else if (ort > 70) return "BB";
            else if (ort > 60) return "CB";
            else if (ort > 50) return "CC";
            else if (ort > 40) return "DC";
            else if (ort > 30) return "DD";
            else return "FF";
        }

        public string NotBilgisi(string ad , double ort , string harf)
        {
            return $"{ad} adlı öğrencinin not ortalaması {ort}dır ve bu sebeple harf notu {harf} olarak belirlenmiştir";
        }
    }

}