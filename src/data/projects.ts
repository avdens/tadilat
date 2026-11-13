export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "ev" | "villa" | "ofis" | "mutfak-banyo" | "bina";
  categoryLabel: string;
  location: string;
  area: string;
  duration: string;
  year: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  gallery: string[];
  highlights: string[];
  testimonial?: {
    author: string;
    role: string;
    text: string;
  };
}

export const projects: ProjectItem[] = [
  {
    id: "selcuklu-yazir-daire",
    slug: "selcuklu-yazir-daire",
    title: "Selçuklu Yazır Mahallesi Komple Daire Tadilatı",
    category: "ev",
    categoryLabel: "Komple Ev Tadilatı",
    location: "Selçuklu, Konya",
    area: "145 m²",
    duration: "35 İş Günü",
    year: "2024",
    description: "Eski 3+1 daire kırımından boyasına kadar sıfırlandı. Su ve elektrik tesisatı komple yenilendi, asma tavan led ışıklandırma, 1. sınıf laminat parke ve modern mutfak dolapları monte edildi.",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Geniş Açık Mutfak Tezgahı", "Gizli LED Asma Tavan", "Lake İç Kapılar", "Ebeveyn Banyo Yenileme"],
    testimonial: {
      author: "Murat & Selin K.",
      role: "Ev Sahibi (Yazır Mah.)",
      text: "Eski evimizden geriye sadece duvarlar kaldı. HS Dekorasyon ve usta ekibi işini öyle temiz yaptı ki içeri girdiğimizde sıfır daireye girmiş gibi hissettik. En önemlisi söz verilen günde teslim ettiler."
    }
  },
  {
    id: "meram-havzan-villa",
    slug: "meram-havzan-villa",
    title: "Meram Havzan Müstakil Villa Tadilatı & Çevre Düzenleme",
    category: "villa",
    categoryLabel: "Villa & Müstakil Ev",
    location: "Meram, Konya",
    area: "380 m²",
    duration: "60 İş Günü",
    year: "2024",
    description: "Meram'da müstakil villanın çatı onarımı, dış cephe ısı yalıtımı, yerden ısıtma altyapısı, şömine imalatı ve bahçe taş döşemesi anahtar teslim tamamlandı.",
    beforeImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Yerden Isıtma Tesisatı", "Doğal Taş Şömine İmalatı", "Çatı İzolasyonu ve Aktarma", "Kış Bahçesi & Çevre Düzenleme"],
    testimonial: {
      author: "Bülent T.",
      role: "Mülk Sahibi (Meram)",
      text: "HS Dekorasyon ekibi villamızın kaba inşaatından ince boyasına kadar her detayını büyük bir ustalıkla yaptı. Aracısız usta ile çalışmanın rahatlığını yaşadık."
    }
  },
  {
    id: "karatay-busan-ofis",
    slug: "karatay-busan-ofis",
    title: "Karatay BÜSAN Sanayi İdare Ofisi & Showroom",
    category: "ofis",
    categoryLabel: "Ofis & Dükkan",
    location: "Karatay, Konya",
    area: "320 m²",
    duration: "22 İş Günü",
    year: "2024",
    description: "Sanayi bünyesindeki yönetim ofisinin alçıpan bölme duvarları, karolam asma tavanları, zemin kaplamaları ve elektrik-data altyapısı hızlıca tamamlandı.",
    beforeImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Modüler Alçıpan Bölmeler", "Taşyünü Ses Yalıtımlı Tavan", "Dayanıklı Zemin Kaplama", "Kuvvetli Akım & Priz Hatları"],
    testimonial: {
      author: "Cemil A.",
      role: "Firma Sahibi (BÜSAN)",
      text: "Fabrikamızın idari katını mesaimizi engellemeden 3 haftada anahtar teslim bitirdiler. Konya'da sözünün eri usta bulmak zor, HS Dekorasyon'a teşekkür ederim."
    }
  },
  {
    id: "meram-askan-mutfak-banyo",
    slug: "meram-askan-mutfak-banyo",
    title: "Meram Aşkan Mutfak & Banyo Yenileme",
    category: "mutfak-banyo",
    categoryLabel: "Mutfak & Banyo",
    location: "Meram, Konya",
    area: "42 m²",
    duration: "12 İş Günü",
    year: "2024",
    description: "Eski fayanslar kırılarak su tesisatı baştan çekildi, çift kat sürme izolasyon yapıldı. Çizilmez porselen tezgah, frenli lake mutfak dolapları ve modern duşakabin monte edildi.",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Çizilmez Tezgah & Lake Dolaplar", "Gömme Rezervuar & Lineer Süzgeç", "Çift Kat Garantili Su Yalıtımı", "Lazer Terazi Seramik Döşeme"],
    testimonial: {
      author: "Zeynep D.",
      role: "Ev Hanımı (Aşkan)",
      text: "Mutfak dolaplarımız çok kullanışlı oldu, banyoda su sızması korkumuz tamamen bitti. Ustaların efendiliği ve iş titizliği gerçekten mükemmeldi."
    }
  },
  {
    id: "selcuklu-bosna-bina-mantolama",
    slug: "selcuklu-bosna-bina-mantolama",
    title: "Selçuklu Bosna Hersek Apartmanı Mantolama & Boya",
    category: "bina",
    categoryLabel: "Bina Dış Cephe",
    location: "Selçuklu, Konya",
    area: "2.400 m² Cephe",
    duration: "35 İş Günü",
    year: "2023",
    description: "6 katlı 24 daireli apartmanın taşyünü dış cephe mantolaması, Jotun silikonlu dış cephe boyası ve çatı oluk tamiratı yapılarak teslim edildi.",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Taşyünü Yangına Dayanıklı Yalıtım", "Silikonlu Su İtici Dış Cephe Boyası", "%40'a Varan Yakıt Tasarrufu", "Güvenlikli İskele Kurulumu"],
    testimonial: {
      author: "Hakan V.",
      role: "Apartman Yöneticisi",
      text: "Konya'nın ayazında doğalgaz faturalarımız neredeyse yarı yarıya düştü. HS Dekorasyon ve usta kadrosu iş güvenliğinden temizliğe kadar her konuda tam puan aldı."
    }
  },
  {
    id: "karatay-sehir-merkezi-dubleks",
    slug: "karatay-sehir-merkezi-dubleks",
    title: "Karatay Şehir Merkezi Çatı Dubleks Tadilatı",
    category: "ev",
    categoryLabel: "Komple Ev Tadilatı",
    location: "Karatay, Konya",
    area: "190 m²",
    duration: "32 İş Günü",
    year: "2024",
    description: "Çatı dubleksinin teras su izolasyonu, ahşap merdiven cilası, banyoları ve boya-badana işleri baştan sona usta işçiliğiyle yapıldı.",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Teras Su Yalıtımı Garantisi", "Masif Ahşap Merdiven Bakımı", "Silinebilir Jotun Boya", "Gömme Aydınlatmalar"],
  }
];
