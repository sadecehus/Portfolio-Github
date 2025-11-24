using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _10._2_Functions
{
       public class HesapMakinesi
    {
        public int Topla(int a, int b)
        {
            return a + b;
        }
        public int Cikar(int a, int b)
        {
            return a - b;
        }
        public int Carp(int a, int b)
        {
            return a * b;
        }
        public double Bol(int a, int b)
        {
            if (b == 0)
            {
                throw new DivideByZeroException("Bölen sıfır olamaz.");
            }
            return (double)a / b;
        }
    }
}