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
    id: "kadikoy-modern-daire",
    slug: "kadikoy-modern-daire",
    title: "Kadıköy Bağdat Caddesi Komple Daire Yenileme",
    category: "ev",
    categoryLabel: "Komple Ev Tadilatı",
    location: "Kadıköy, İstanbul",
    area: "145 m²",
    duration: "38 İş Günü",
    year: "2024",
    description: "30 yıllık 3+1 daire, açık plan mutfak ve ferah bir salona dönüştürüldü. Eski galvaniz borular ve elektrik altyapısı komple yenilenerek akıllı aydınlatma ve Rehau yerden ısıtma entegre edildi.",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Açık Mutfak Ada Tezgah", "Gizli Tavan LED Aydınlatma", "Lake İç Kapılar", "Ebeveyn Banyo Eklenmesi"],
    testimonial: {
      author: "Murat & Selin K.",
      role: "Ev Sahibi",
      text: "Eski evimizden geriye sadece dış duvarlar kaldı, içeri girdiğimizde adeta 5 yıldızlı bir butik otele girmiş gibi hissettik. En önemlisi söz verilen tarihte 1 gün dahi gecikmeden teslim aldık."
    }
  },
  {
    id: "sariyer-bogaz-villa",
    slug: "sariyer-bogaz-villa",
    title: "Sarıyer Yeniköy Müstakil Villa & Peyzaj",
    category: "villa",
    categoryLabel: "Lüks Villa Tadilatı",
    location: "Sarıyer, İstanbul",
    area: "420 m²",
    duration: "75 İş Günü",
    year: "2024",
    description: "4 katlı Boğaz manzaralı tarihi nitelikli villanın statik güçlendirmesi, çatı restorasyonu, spa alanı, havuz mekaniği ve KNX akıllı ev sistemleri anahtar teslim tamamlandı.",
    beforeImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["KNX Akıllı Ev Otomasyonu", "Özel Şarap Mahzeni", "Taşma Sistemli Isıtmalı Havuz", "İtalyan Mermer Şömine"],
    testimonial: {
      author: "Bülent T.",
      role: "Yatırımcı & Mülk Sahibi",
      text: "Artı Mimarlık ekibi villamızın tüm kaba ve ince işlerini kusursuz bir mühendislik disipliniyle yönetti. Mimarlarının estetik vizyonu beklentimizin çok ötesine geçti."
    }
  },
  {
    id: "levent-finans-ofis",
    slug: "levent-finans-ofis",
    title: "Levent Finans Merkezi Genel Müdürlük Ofisi",
    category: "ofis",
    categoryLabel: "Ofis & Ticari Tadilat",
    location: "Levent, Beşiktaş",
    area: "680 m²",
    duration: "28 İş Günü (Gece Vardiyalı)",
    year: "2024",
    description: "Yatırım fonu yönetim ofisinin açık ofis, VIP toplantı odaları ve lounge alanlarının 28 iş gününde iş akışını durdurmadan teslimi gerçekleştirildi.",
    beforeImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Akustik Baffle Tavan", "Ses Yalıtımlı Çift Cam Bölmeler", "Tarkett Antistatik Zemin", "Sunucu Odası FM200"],
    testimonial: {
      author: "Cemil A.",
      role: "Operasyon Direktörü",
      text: "Şirket operasyonumuzu 1 gün bile durdurmadan, gece vardiyalarıyla 4 haftada sıfır pürüzle ofisimizi yenilediler. Kurumsal yaklaşım arayanlar için kesinlikle 1 numara."
    }
  },
  {
    id: "besiktas-luks-mutfak-banyo",
    slug: "besiktas-luks-mutfak-banyo",
    title: "Beşiktaş Akaretler Lüks Mutfak & Spa Banyo",
    category: "mutfak-banyo",
    categoryLabel: "Mutfak & Banyo",
    location: "Beşiktaş, İstanbul",
    area: "48 m²",
    duration: "14 İş Günü",
    year: "2024",
    description: "Karanlık ve kullanışsız mutfak ile banyo birimleri, mat lake dolaplar, Calacatta porselen tezgahlar ve gömme duş sistemleriyle spa konseptine kavuşturuldu.",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Çizilmez Porselen Ada Mutfak", "Geberit Akıllı Asma Klozet", "Gömme Termostatik Duş", "Blum Elektrikli Çekmeceler"],
    testimonial: {
      author: "Zeynep D.",
      role: "İç Mekan Meraklısı",
      text: "Mutfakta yemek yapmak artık en büyük keyfim. Çekmecelerin akıcılığı, tezgahın pürüzsüz dokusu ve banyonun o sakinleştirici spa atmosferi tam istediğim gibi oldu."
    }
  },
  {
    id: "atasehir-bina-mantolama",
    slug: "atasehir-bina-mantolama",
    title: "Ataşehir 12 Katlı Blok Dış Cephe & Isı Yalıtımı",
    category: "bina",
    categoryLabel: "Bina Dış Cephe",
    location: "Ataşehir, İstanbul",
    area: "3.200 m² Cephe",
    duration: "45 İş Günü",
    year: "2023",
    description: "12 katlı 48 daireli sitenin taşyünü mantolaması, kompozit cephe giydirmesi, çatı su izolasyonu ve bina giriş lobisi yenilenerek A sınıfı enerji verimliliği sağlandı.",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Knauf 8cm Taşyünü Mantolama", "Mekanik Kompozit Detaylar", "Jotun Dış Cephe Boyası", "%44 Isı Tasarrufu"],
    testimonial: {
      author: "Hakan V.",
      role: "Site Yönetim Kurulu Başkanı",
      text: "48 daireli bir sitede herkesi memnun etmek imkansız derler ama Artı Mimarlık iş disiplini ve zamanlamasıyla herkesin takdirini kazandı. Doğalgaz faturalarımız neredeyse yarı yarıya düştü."
    }
  },
  {
    id: "suadiye-teras-dublex",
    slug: "suadiye-teras-dublex",
    title: "Suadiye Sahil Teras Dubleks Komple Renovasyon",
    category: "ev",
    categoryLabel: "Komple Ev Tadilatı",
    location: "Kadıköy, İstanbul",
    area: "210 m²",
    duration: "42 İş Günü",
    year: "2024",
    description: "Teras dubleksinde çatı su izolasyonu yenilenerek giyotin camlı 4 mevsim kış bahçesi, masif ahşap merdiven ve açık teras barbekü alanı kurgulandı.",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
    ],
    highlights: ["Motorlu Giyotin Cam Teras", "Doğal Meşe Masif Merdiven", "Akustik Lamine Camlar", "Gizli Çatı Isı Yalıtımı"],
  }
];

