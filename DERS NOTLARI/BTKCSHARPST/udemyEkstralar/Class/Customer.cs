using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Class
{
    public class Customer
    {
        public Customer()
        {
            Console.WriteLine("Bir Obje Oluşturuldu");
        }
        public int Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public string? Address { get; set; }

        public void PrintName()
        {
            Console.WriteLine($"{this.Id} numaralı kullanıcının adı soyadı {this.FirstName} {this.LastName} ");
        }
    }
}