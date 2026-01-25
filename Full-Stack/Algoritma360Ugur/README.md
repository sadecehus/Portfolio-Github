# 📦 Algoritma360 - Akıllı Depo Yönetim Sistemi

Modern ve kullanıcı dostu bir depo yönetim sistemi. ASP.NET Core 9.0 ile geliştirilmiş, yapay zeka destekli stok analizi sunan tam özellikli bir web uygulaması.

![.NET](https://img.shields.io/badge/.NET-9.0-512BD4?style=flat-square&logo=dotnet)
![ASP.NET Core](https://img.shields.io/badge/ASP.NET%20Core-MVC-512BD4?style=flat-square)
![Entity Framework](https://img.shields.io/badge/Entity%20Framework-Core%209.0-512BD4?style=flat-square)
![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?style=flat-square&logo=sqlite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-412991?style=flat-square&logo=openai)

## ✨ Özellikler

### 🔐 Kimlik Doğrulama ve Yetkilendirme
- Cookie tabanlı authentication sistemi
- Rol bazlı yetkilendirme (Admin, Operator, Viewer)
- Güvenli giriş/çıkış mekanizması
- Erişim kontrol paneli

### 📊 Ürün Yönetimi
- Ürün ekleme, düzenleme ve listeleme
- Detaylı ürün açıklamaları
- Ürün başına kural tanımlama (sevkiyat izinleri)
- Dinamik ürün filtreleme

### 📦 Stok Yönetimi
- Gerçek zamanlı stok takibi
- Stok ekleme/çıkarma işlemleri
- Minimum stok uyarıları
- Stok hareketleri geçmişi

### 🚚 Sevkiyat Modülü
- Hızlı sevkiyat işlemleri
- Stok yetersizliği kontrolü
- Sevkiyat kuralları yönetimi
- Otomatik log kaydı

### 📈 Raporlama Sistemi
- **Stok Raporu**: Ürün bazlı toplam giriş/çıkış analizi
- **İşlem Raporu**: Tüm stok hareketlerinin detaylı geçmişi
- Kullanıcı bazlı işlem takibi
- Tarih bazlı filtreleme

### 🤖 Yapay Zeka Desteği
- **AI Stok Risk Analizi**: OpenAI GPT-4 entegrasyonu
- Son 7 günlük satış trendlerine göre risk analizi
- Otomatik risk seviyesi belirleme (Düşük/Orta/Yüksek)
- Her ürün için özel AI yorumları
- Günlük ortalama satış hesaplama

### 📝 Log Sistemi
- Tüm stok hareketlerinin otomatik kaydı
- Kullanıcı bazlı işlem takibi
- Zaman damgalı kayıtlar
- Detaylı işlem geçmişi

### 🎨 Modern Kullanıcı Arayüzü
- TailwindCSS ile responsive tasarım
- Gradient ve modern renk paletleri
- FontAwesome ikonları
- Mobil uyumlu sidebar menü
- Kullanıcı dostu form yapıları

## 🏗️ Teknoloji Stack

### Backend
- **Framework**: ASP.NET Core 9.0 MVC
- **ORM**: Entity Framework Core 9.0
- **Database**: SQLite
- **Authentication**: Cookie-based Authentication
- **AI Service**: OpenAI GPT-4o-mini API

### Frontend
- **CSS Framework**: TailwindCSS 3.4
- **Icons**: FontAwesome 6.5
- **Template Engine**: Razor Pages
- **JavaScript**: Vanilla JS

### Development Tools
- **IDE**: Visual Studio Code / Rider
- **Version Control**: Git
- **Package Manager**: NuGet, npm

## 📋 Gereksinimler

- .NET 9.0 SDK
- Node.js (Tailwind CSS için)
- SQLite
- OpenAI API Key (AI özellikleri için)

## 🚀 Kurulum

### 1. Projeyi Klonlayın
```bash
git clone <repository-url>
cd Algoritma360Ugur
```

### 2. Bağımlılıkları Yükleyin

**Backend bağımlılıkları:**
```bash
dotnet restore
```

**Frontend bağımlılıkları:**
```bash
npm install
```

### 3. Veritabanı Yapılandırması

Veritabanını oluşturmak için migration'ları çalıştırın:
```bash
dotnet ef database update
```

### 4. OpenAI API Key Yapılandırması

`appsettings.json` dosyasında OpenAI API anahtarınızı ekleyin:
```json
{
  "OpenAI": {
    "ApiKey": "your-openai-api-key-here"
  }
}
```

⚠️ **Güvenlik Notu**: Production ortamında API anahtarlarını `appsettings.json` yerine Azure Key Vault, Environment Variables veya User Secrets kullanarak saklayın.

### 5. Tailwind CSS Build

CSS dosyalarını derlemek için:
```bash
npm run build:css
```

Geliştirme sırasında otomatik derleme için:
```bash
npm run watch:css
```

### 6. Uygulamayı Çalıştırın

```bash
dotnet run
```

Uygulama varsayılan olarak `http://localhost:5266` adresinde çalışacaktır.

## 👥 Varsayılan Kullanıcılar

Sistem otomatik olarak aşağıdaki kullanıcıları oluşturur:

| Kullanıcı Adı | Şifre | Rol      | Yetkiler                                    |
|---------------|-------|----------|---------------------------------------------|
| admin         | 123   | Admin    | Tüm işlemler + AI analizi + Raporlar      |
| operator      | 123   | Operator | Stok ekleme + Sevkiyat işlemleri           |
| viewer        | 123   | Viewer   | Sadece görüntüleme                          |

⚠️ **Production Notu**: Varsayılan şifreleri mutlaka değiştirin ve güçlü şifre politikaları uygulayın.

## 📁 Proje Yapısı

```
Algoritma360Ugur/
├── Controllers/           # MVC Controller'ları
│   ├── AccountController.cs    # Kimlik doğrulama
│   ├── AiController.cs         # AI analiz işlemleri
│   ├── HomeController.cs       # Ana sayfa
│   ├── LogController.cs        # Log görüntüleme
│   ├── ProductController.cs    # Ürün yönetimi
│   ├── ReportController.cs     # Raporlama
│   └── ShipmentController.cs   # Sevkiyat işlemleri
│
├── Data/                  # Veritabanı Context
│   └── AppDbContext.cs         # EF Core DbContext
│
├── Migrations/            # EF Core Migration dosyaları
│
├── Models/                # Veri Modelleri
│   ├── ErrorViewModel.cs
│   ├── Log.cs                  # İşlem kayıtları
│   ├── Product.cs              # Ürün modeli
│   ├── ProductRule.cs          # Ürün kuralları
│   ├── Stock.cs                # Stok modeli
│   └── User.cs                 # Kullanıcı modeli
│
├── Services/              # İş mantığı servisleri
│   └── AiStockRiskService.cs   # OpenAI entegrasyonu
│
├── ViewModels/            # View için veri modelleri
│   ├── StockRiskViewModel.cs
│   └── Reports/
│       ├── StockReportViewModel.cs
│       └── TransactionReportViewModel.cs
│
├── Views/                 # Razor View dosyaları
│   ├── Account/
│   │   ├── Login.cshtml
│   │   └── AccessDenied.cshtml
│   ├── Ai/
│   │   ├── Index.cshtml        # AI kontrol paneli
│   │   └── StockRisk.cshtml    # AI risk analizi
│   ├── Home/
│   │   └── Index.cshtml        # Ana sayfa
│   ├── Log/
│   │   └── Index.cshtml        # Log listesi
│   ├── Product/
│   │   ├── AddStock.cshtml     # Stok ekleme
│   │   └── Create.cshtml       # Ürün oluşturma
│   ├── Report/
│   │   ├── StockReport.cshtml
│   │   └── TransactionReport.cshtml
│   ├── Shipment/
│   │   └── Index.cshtml        # Sevkiyat sayfası
│   └── Shared/
│       ├── _Layout.cshtml      # Ana layout
│       └── Error.cshtml
│
├── wwwroot/               # Statik dosyalar
│   ├── css/
│   │   ├── input.css           # Tailwind input
│   │   ├── output.css          # Derlenmiş CSS
│   │   └── site.css
│   ├── js/
│   │   └── site.js
│   └── lib/                    # Frontend kütüphaneleri
│
├── Program.cs             # Uygulama başlangıç noktası
├── appsettings.json       # Yapılandırma dosyası
├── package.json           # npm bağımlılıkları
├── tailwind.config.js     # Tailwind yapılandırması
└── Algoritma360Ugur.csproj
```

## 🔧 Veritabanı Şeması

### Users (Kullanıcılar)
- `Id` (int, PK)
- `Username` (string, required)
- `PasswordHash` (string, required)
- `Role` (string, default: "Viewer")

### Products (Ürünler)
- `Id` (int, PK)
- `Name` (string, required)
- `Description` (string, nullable)

### Stock (Stok)
- `Id` (int, PK)
- `ProductId` (int, FK → Products)
- `Quantity` (int)

### ProductRule (Ürün Kuralları)
- `Id` (int, PK)
- `ProductId` (int, FK → Products)
- `IsAllowed` (bool) - Sevkiyat izni

### Logs (İşlem Kayıtları)
- `Id` (int, PK)
- `ProductId` (int, FK → Products)
- `UserId` (int, FK → Users)
- `Quantity` (int) - Pozitif: Giriş, Negatif: Çıkış
- `CreatedAt` (DateTime)

## 🎯 Kullanım Senaryoları

### 1. Yeni Ürün Ekleme (Admin)
1. Sidebar'dan "Ürün Ekle" menüsüne tıklayın
2. Ürün bilgilerini girin
3. İlk stok miktarını belirleyin
4. Sevkiyat iznini ayarlayın
5. "Kaydet" butonuna tıklayın

### 2. Stok Ekleme (Admin/Operator)
1. "Stok Ekle" menüsüne gidin
2. Ürün seçin
3. Eklenecek miktarı girin
4. İşlem otomatik olarak log'lanır

### 3. Sevkiyat İşlemi (Admin/Operator)
1. "Sevkiyat" sayfasını açın
2. Ürün ve miktar seçin
3. Sistem otomatik olarak:
   - Stok yeterliliğini kontrol eder
   - Sevkiyat iznini kontrol eder
   - Stoktan düşer
   - İşlemi log'lar

### 4. AI Stok Risk Analizi (Admin)
1. "Yapay Zeka" menüsünden "Stok Risk Analizi"ne gidin
2. Sistem otomatik olarak:
   - Son 7 günlük satışları analiz eder
   - Günlük ortalama hesaplar
   - Risk seviyesi belirler
   - GPT-4 ile yorum oluşturur

## 🤖 AI Risk Analizi Detayları

### Risk Seviyeleri

- **🟢 Düşük Risk**: Mevcut stok 7 günden fazla yeterli
- **🟡 Orta Risk**: Mevcut stok 3-7 gün arası yeterli
- **🔴 Yüksek Risk**: Mevcut stok 3 günden az yeterli

### Hesaplama Formülü

```csharp
Haftalık Satış = Son 7 gündeki toplam çıkış
Günlük Ortalama = Haftalık Satış / 7
Risk Seviyesi = Mevcut Stok / Günlük Ortalama oranına göre
```

### AI Yorumu

GPT-4'e gönderilen prompt:
```
Product: [Ürün Adı]
Current stock: [Mevcut Stok]
Weekly sales: [Haftalık Satış]
Daily average sales: [Günlük Ortalama]

Analyze stock risk level and give a short recommendation.
```

## 📊 Raporlar

### Stok Raporu
- Ürün bazında toplam giriş miktarı
- Ürün bazında toplam çıkış miktarı
- Net stok durumu
- Görsel grafik gösterimi

### İşlem Raporu
- Tüm stok hareketleri kronolojik sırada
- Kullanıcı bazlı filtreleme
- Tarih, kullanıcı, ürün ve miktar bilgileri
- Giriş/çıkış türü gösterimi

## 🔒 Güvenlik Özellikleri

- ✅ Cookie tabanlı authentication
- ✅ Rol bazlı authorization
- ✅ CSRF koruması (ASP.NET Core built-in)
- ✅ SQL Injection koruması (EF Core parameterized queries)
- ✅ XSS koruması (Razor engine encoding)
- ⚠️ **Eksikler** (Production için):
  - Password hashing (şu anda plain text)
  - HTTPS zorunluluğu
  - Rate limiting
  - API key güvenliği (User Secrets kullanılmalı)

## 🚧 Gelecek Geliştirmeler

- [ ] Password hashing (BCrypt/Argon2)
- [ ] Excel/PDF export özellikleri
- [ ] Email bildirimleri (düşük stok uyarıları)
- [ ] Dashboard istatistikleri
- [ ] Gelişmiş filtreleme ve arama
- [ ] Barkod okuyucu entegrasyonu
- [ ] Multi-language desteği
- [ ] Dark mode
- [ ] Real-time notifications (SignalR)
- [ ] Daha fazla AI özelliği:
  - Talep tahmini
  - Otomatik sipariş önerileri
  - Satış trend analizi

## 🐛 Bilinen Sorunlar

- Şifreler plain text olarak saklanıyor (Production için düzeltilmeli)
- API key appsettings.json'da (User Secrets kullanılmalı)
- Null kontrolü eksiklikleri (bazı controller'larda)

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.

## 👨‍💻 Geliştirici

**Hüseyin Kocatürk**

---

## 🙏 Teşekkürler

- ASP.NET Core Team
- Entity Framework Core Team
- TailwindCSS Team
- OpenAI Team
- FontAwesome Team

---

**Not**: Bu proje aktif geliştirme aşamasındadır. Önerileriniz ve katkılarınız değerlidir! 🚀
