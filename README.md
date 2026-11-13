# Artı Mimarlık & Anahtar Teslim Tadilat Web Sitesi

İstanbul genelinde komple daire, lüks villa, kurumsal ofis, mutfak & banyo ve bina dış cephe tadilatı yapan mimarlık & taahhüt firmaları için özel olarak tasarlanmış, **tam teşekküllü çok sayfalı (Multi-Page)** web sitesi.

Modern **Astro 5 + Tailwind CSS** mimarisiyle inşa edilmiş olup ultra hızlı, %100 SEO uyumlu ve kolayca özelleştirilebilir yapıdadır.

---

## 🌟 Öne Çıkan Özellikler

- **Multi-Page (Çok Sayfalı) Mimari:**
  - `Ana Sayfa` (`/`): Hero alanı, canlı Öncesi/Sonrası dönüşüm, güven rozetleri, hizmetler özeti, 5 adımlı süreç, canlı fiyat hesaplayıcı, portfolyo ve müşteri yorumları.
  - `Kurumsal / Hakkımızda` (`/hakkimizda`): 18 yıllık deneyim, kurucu mimar ve mühendis kadrosu, kalite ve garanti prensipleri.
  - `Hizmetlerimiz` (`/hizmetler`): Tüm hizmetler genel bakış ve karşılaştırma tablosu.
  - `Komple Ev Tadilatı` (`/hizmetler/ev-tadilat`): A'dan Z'ye daire yenileme, tesisat, 3D render ve teslim süreci.
  - `Lüks Villa Tadilatı` (`/hizmetler/villa-tadilat`): Statik, Rehau yerden ısıtma, spa/sauna, havuz ve akıllı ev.
  - `Ofis & Ticari Tadilat` (`/hizmetler/ofis-tadilat`): Akustik konfor, cam bölmeler, zayıf akım ve gece mesaisi seçeneği.
  - `Mutfak & Banyo Yenileme` (`/hizmetler/mutfak-banyo-tadilat`): Porselen ada mutfak, 10 yıl su izolasyonu garantisi.
  - `Bina Dış Cephe & Mantolama` (`/hizmetler/bina-tadilat`): Taşyünü mantolama, çatı ve ortak alan renovasyonu.
  - `Nasıl Çalışırız? (Süreç)` (`/surec`): 5 adımlı şeffaf süreç, noter onaylı sözleşme ve cezai şart maddeleri.
  - `Projelerimiz & Portfolyo` (`/projeler`): Kategoriye göre filtrelenebilir, tamamlanan projeler ve canlı Before/After slider'ları.
  - `İnteraktif Fiyat Hesaplayıcı` (`/fiyat-hesapla`): Metrekare, mekan türü, paket seçimi ve ilave opsiyonlarla anında şeffaf maliyet hesabı.
  - `Tadilat Rehberi & Blog` (`/blog`): Kapsamlı SEO makaleleri ve bireysel makale detay sayfaları (`/blog/[slug]`).
  - `İletişim & Keşif Formu` (`/iletisim`): Doğrudan telefon, WhatsApp, Google Maps haritası ve teklif formu.

- **İnteraktif Araçlar:**
  - 🔄 **Canlı Öncesi / Sonrası (Before / After) Karşılaştırma:** Ziyaretçilerin fare veya dokunmatik ekranla çekerek dönüşümü görebileceği interaktif slider.
  - 📊 **Akıllı Bütçe Hesaplama:** Mekan türü, m² ve paket bazında canlı fiyat ve teslimat süresi hesaplayıcı.
  - 💬 **Hızlı WhatsApp & Arama Entegrasyonu:** Müşterinin hesapladığı bütçeyi ve form bilgilerini tek tıkla WhatsApp mesajına dönüştüren altyapı.
  - 📋 **Hızlı Keşif Modalı:** Her sayfadan 1 tıkla açılan ücretsiz yerinde keşif randevusu formu.

- **Tasarım & Renk Paleti:**
  - **Kurumsal Renkler:** Koyu Antrasit (`#141820`), Sıcak Altın/Bronz Vurgular (`#C5A059`), Beyaz ve Mermer dokuları.
  - **Tipografi:** Google Fonts *Playfair Display* (prestijli serif başlıklar) + *Plus Jakarta Sans* (okunabilir modern gövde metinleri).

---

## 📁 Proje Dizin Yapısı

```
src/
├── components/          # Tekrar kullanılabilir arayüz bileşenleri
│   ├── Header.astro              # Üst menü, açılır hizmetler listesi & mobil çekmece
│   ├── Footer.astro              # Alt bilgi, kurumsal detaylar & hızlı linkler
│   ├── BeforeAfterSlider.astro   # İnteraktif Öncesi/Sonrası kaydırıcı
│   ├── CostCalculator.astro      # Canlı maliyet hesaplama motoru
│   ├── ServiceCard.astro         # Hizmet kartı
│   ├── ProjectCard.astro         # Portfolyo kartı
│   ├── ProcessSteps.astro        # 5 adımlı süreç yol haritası
│   ├── TrustBadges.astro         # 4 temel garanti rozeti
│   ├── Testimonials.astro        # Müşteri yorumları ve puanlama
│   ├── CTASection.astro          # Yüksek dönüşümlü eylem çağrısı panosu
│   ├── QuickContactModal.astro   # Ücretsiz keşif açılır penceresi
│   ├── FloatingCTA.astro         # Sabit WhatsApp ve telefon butonları
│   └── Breadcrumb.astro          # SEO uyumlu sayfa haritası
├── data/                # İçerik ve veri dosyaları (Kolayca düzenlenebilir)
│   ├── siteConfig.ts             # Firma adı, telefon, adres, WhatsApp, çalışma saatleri
│   ├── services.ts               # Hizmet detayları, kapsam, süreç ve SSS
│   ├── projects.ts               # Tamamlanan projeler, görseller ve özellikler
│   ├── blog.ts                   # Blog yazıları ve rehber içerikleri
│   └── testimonials.ts           # Müşteri yorumları ve garanti maddeleri
├── layouts/
│   └── Layout.astro              # Temel şablon, SEO meta etiketleri ve Schema.org
├── pages/               # Çok sayfalı site rotaları
│   ├── index.astro               # Ana Sayfa
│   ├── hakkimizda.astro          # Kurumsal / Hakkımızda
│   ├── surec.astro               # Çalışma Süreci
│   ├── fiyat-hesapla.astro       # Fiyat Hesaplama Sayfası
│   ├── iletisim.astro            # İletişim & Harita
│   ├── hizmetler/
│   │   ├── index.astro           # Hizmetler Listesi
│   │   └── [slug].astro          # Her hizmetin özel alt sayfası
│   ├── projeler/
│   │   └── index.astro           # Portfolyo & Öncesi/Sonrası
│   └── blog/
│       ├── index.astro           # Blog Listesi
│       └── [slug].astro          # Blog Yazı Detayı
└── styles/
    └── global.css                # Tailwind ve özel efekt stilleri
```

---

## 🛠️ Nasıl Çalıştırılır?

### 1. Geliştirme Sunucusu (Dev Server)
```bash
npm run dev
```
Tarayıcınızda `http://localhost:4321` adresini açarak siteyi canlı olarak görüntüleyebilirsiniz.

### 2. Canlı Önizleme (Preview)
```bash
npm run build
npm run preview
```

### 3. Prodüksiyon Derlemesi (Deploy)
```bash
npm run build
```
Oluşturulan `dist/` klasörünü herhangi bir hosting servisine (cPanel, Vercel, Netlify, Cloudflare Pages, VPS) doğrudan yükleyebilirsiniz. Sunucu tarafı bağımlılığı olmadan %100 statik HTML/CSS/JS olarak anında çalışır.

---

## ✏️ Firma Bilgilerini ve İçerikleri Güncelleme

- **Firma Adı, Telefon, Adres, WhatsApp Numarası:**  
  `src/data/siteConfig.ts` dosyasını açıp telefon, e-posta veya firma adını değiştirmeniz yeterlidir. Sitenin tüm sayfalarında otomatik olarak güncellenir.
- **Hizmetler ve Fiyatlar:** `src/data/services.ts`
- **Projeler ve Görseller:** `src/data/projects.ts`
- **Blog Yazıları:** `src/data/blog.ts`
