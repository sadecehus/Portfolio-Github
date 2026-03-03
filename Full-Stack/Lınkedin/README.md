# 🎯 LinkedIn Job Skill Analyzer

<div align="center">
  <p>LinkedIn iş ilanlarını analiz edip yetkinlik (skill) trendlerini çıkaran, AI destekli full-stack web uygulaması.</p>
</div>

---

## 🚀 Özellikler

- **Akıllı Metin İşleme:** OpenAI ChatGPT (gpt-4o-mini) entegrasyonu ile ilanlardan `Technical`, `Soft`, `Tool`, `Language` kategorilerinde otomatik skill çıkarımı.
- **Esnek Veri Girişi:** LinkedIn iş ilanı URL'si ile (`axios + cheerio` scraping) otomatik çekim veya erişim kısıtlamalarında metni doğrudan yapıştırarak analiz etme.
- **Gelişmiş Dashboard:** Çıkarılan yetkinliklerin frekans analizlerini Recharts grafik kütüphanesi ile interaktif yatay bar ve donut chart'larda görüntüleme imkanı.
- **İlan ve Başvuru Yönetimi:**
  - İlanları kaydetme ve listeleme
  - İlanlara özel notlar ekleme
  - Başvuru durumunu (Başvuruldu / Başvurulmadı) detaylı şekilde takip etme
  - Skill bazlı ilan filtreleme (Belirli bir yeteneği isteyen ilanları anında listeleme)
- **Modern ve Akıcı UI:** React 18, Vite, Tailwind CSS, HeroUI ve Framer Motion ile tasarlanmış zeytin yeşili ve krem tonlarında profesyonel, animasyonlu kullanıcı arayüzü.

## 🛠️ Tech Stack (Teknoloji Yığını)

### 💻 Backend
- **Node.js & Express.js**
- **SQLite** (`better-sqlite3` ile yüksek performanslı yerel veritabanı)
- **OpenAI API**
- **Axios & Cheerio** (Web Scraping için)

### 🎨 Frontend
- **React 18** (Vite altyapısı ile)
- **Tailwind CSS**
- **HeroUI & Framer Motion** (Modern bileşenler ve animasyonlar)
- **Recharts** (Veri görselleştirme)

## 📁 Proje Yapısı

```text
Lınkedin/
├── server/                 # Express backend API
│   ├── index.js            # Ana sunucu ve route'lar
│   ├── db.js               # SQLite veritabanı bağlantısı ve şema ayarları
│   ├── scraper.js          # LinkedIn URL scraping işlemleri
│   ├── openai.js           # OpenAI entegrasyonu ve yapılandırılmış prompt'lar
│   └── jobs.db             # Veritabanı dosyası (Otomatik oluşturulur)
├── client/                 # React frontend uygulaması
│   ├── src/
│   │   ├── App.jsx         # Ana bileşen ve Router
│   │   ├── main.jsx        # Uygulama giriş noktası
│   │   ├── pages/          # Sayfalar (Dashboard.jsx, AddJob.jsx)
│   │   ├── components/     # UI Bileşenleri (JobList, SkillChart, CategoryDonutChart vb.)
│   │   └── lib/            # Yardımcı fonksiyonlar (utils.js vb.)
│   └── package.json
├── .env.example            # Örnek çevre değişkenleri şablonu
├── .gitignore              # Git tarafından takip edilmeyecek dosya kuralları
└── README.md
```

## 💾 Veritabanı Şeması

Proje verileri, SQLite üzerinde **3 ana tablo** kullanılarak saklanır:

- `job_postings`: Kaydedilen iş ilanlarının temel bilgileri (URL, başlık, şirket, başvuru durumu, notlar).
- `skills`: Sistemdeki eşsiz yetkinlikler (isim, arayüzde gösterilecek ad, kategori: *technical, soft, tool, language*).
- `job_skills`: İş ilanları ile yetkinlikleri birbirine bağlayan çoka-çok (Many-to-Many) ilişki tablosu.

## ⚙️ Kurulum ve Çalıştırma

### 1. Depoyu Klonlayın

Projeyi bilgisayarınıza indirin ve dizine gidin:

```bash
git clone https://github.com/KULLANICI_ADINIZ/LinkedIn-Job-Skill-Analyzer.git
cd LinkedIn-Job-Skill-Analyzer
```

*(Not: Dizin adınız projeyi klonladığınız isme göre değişiklik gösterebilir.)*

### 2. Bağımlılıkları Yükleyin

Proje *client* (frontend) ve *server* (backend) olmak üzere iki ana kısımdan oluşur. İkisinin de paketlerini kurun:

```bash
# Backend bağımlılıklarını kurun
cd server
npm install

# Frontend bağımlılıklarını kurun
cd ../client
npm install
```

### 3. Ortam Değişkenlerini Ayarlayın

Projenin kök dizininde bulunan `.env.example` dosyasını kopyalayarak kendi `.env` dosyanızı oluşturun:

```bash
cd ..
cp .env.example .env
```

Oluşturduğunuz `.env` dosyasını açıp gerekli bilgileri doldurun (Özellikle OpenAI API anahtarı zorunludur):

```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o-mini
PORT=3001
```

### 4. Uygulamayı Başlatın (Geliştirme Modu)

Uygulamanın tam olarak çalışabilmesi için iki farklı terminal penceresinde backend ve frontend'i ayağa kaldırmanız gerekir.

**Terminal 1 (Backend API):**
```bash
cd server
node index.js
# Backend default olarak http://localhost:3001'de çalışmaya başlar.
```

**Terminal 2 (Frontend React):**
```bash
cd client
npm run dev
# Frontend http://localhost:5173'te çalışmaya başlar.
```

## 📌 Kullanım Akışı

1. **İlan Ekleme:** Uygulama açıldığında menüden `İlan Ekle` sayfasına gidin.
2. **Veri Girişi:** Analiz etmek istediğiniz LinkedIn iş ilanının adresini yapıştırın. LinkedIn'in güvenlik engeline takılırsanız, doğrudan ilanın açıklama metnini yapıştırarak manuel giriş yapabilirsiniz.
3. **Analiz Süreci:** `Analiz Et ve Kaydet` botununa tıkladıktan sonra ilan arkaplanda OpenAI ile analiz edilir, yetkinlikler ayrıştırılır ve veritabanına kaydedilir.
4. **Dashboard Görünümü:**
   - Eklendiğiniz tüm ilanların birleşimiyle oluşan "En Çok Aranan Seçkin Yetkinlikler" (Frekans listesi) ve Kategori Dağılım grafiğini inceleyebilirsiniz.
   - İlanları filtreleyebilir, detaylarına tıklayarak başvuru günlüğünüzü ("Başvuruldu", ek notlar) güncelleyebilirsiniz.

## ⚠️ Önemli Notlar

- **Scraping Kısıtlamaları:** LinkedIn, bot trafiğine karşı katı captcha ve engelleme mekanizmaları kullanır. Scraping başarısız olursa her zaman uyarı verilir ve "Metin Yapıştırma" fallback mekanizmasını kullanmanız istenir.
- **Skill Hesaplama Mantığı:** Bir yetkinliğin ne kadar popüler olduğu (skoru), o yeteneğin kaç **farklı** iş ilanında geçtiği ile hesaplanır. Aynı ilanın birden çok kez eklenmesine izin verildiği için istatistiklerin doğru çıkması adına tekrar eklemeden kaçınabilirsiniz.
- **Veri Normalizasyonu:** Gelen yapay zeka cevapları, veritabanına büyük/küçük harf bağımsız şekilde temizlenerek (normalize edilerek) eklenir, böylece `React.js` ve `react` gibi girdiler tek bir `react` maddesi altında birleşir.
