export interface SiteConfig {
  brandName: string;
  legalName: string;
  tagline: string;
  description: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  address: string;
  city: string;
  district: string;
  workingHours: string;
  yearsOfExperience: number;
  completedProjects: number;
  customerSatisfaction: number;
  warrantyYears: number;
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  };
  navigation: Array<{
    name: string;
    href: string;
    children?: Array<{ name: string; href: string; desc?: string }>;
  }>;
}

export const siteConfig: SiteConfig = {
  brandName: "Artı Mimarlık & Tadilat",
  legalName: "Artı Mimarlık İnşaat ve Dekorasyon Ltd. Şti.",
  tagline: "Anahtar Teslim Ev, Ofis ve Bina Tadilatında Kusursuz İşçilik",
  description: "İstanbul genelinde anahtar teslim komple daire tadilatı, lüks villa dekorasyonu, kurumsal ofis yenileme ve bina taahhüt hizmetleri. 3D projelendirme, sabit fiyat sözleşmesi ve 5 yıl işçilik garantisi.",
  phone: "+90 (212) 850 44 20",
  phoneRaw: "+902128504420",
  whatsapp: "+90 (532) 123 45 67",
  whatsappRaw: "905321234567",
  email: "info@artimimarlik.com.tr",
  address: "Barbaros Bulvarı No: 142/A, Beşiktaş",
  city: "İstanbul",
  district: "Beşiktaş",
  workingHours: "Pazartesi - Cumartesi: 08:30 - 19:30",
  yearsOfExperience: 18,
  completedProjects: 450,
  customerSatisfaction: 99.4,
  warrantyYears: 5,
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
  navigation: [
    { name: "Ana Sayfa", href: "/" },
    { name: "Kurumsal", href: "/hakkimizda" },
    {
      name: "Hizmetlerimiz",
      href: "/hizmetler",
      children: [
        { name: "Komple Ev Tadilatı", href: "/hizmetler/ev-tadilat", desc: "A'dan Z'ye daire ve konut yenileme" },
        { name: "Lüks Villa Tadilatı", href: "/hizmetler/villa-tadilat", desc: "Özel mimari çözümler & peyzaj" },
        { name: "Ofis & Ticari Tadilat", href: "/hizmetler/ofis-tadilat", desc: "Ergonomik ve prestijli çalışma alanları" },
        { name: "Mutfak & Banyo Yenileme", href: "/hizmetler/mutfak-banyo-tadilat", desc: "Modern modüler mobilya ve su tesisatı" },
        { name: "Bina Dış Cephe & Mantolama", href: "/hizmetler/bina-tadilat", desc: "Isı yalıtımı, güçlendirme ve cephe tasarımı" },
      ],
    },
    { name: "Nasıl Çalışırız?", href: "/surec" },
    { name: "Projelerimiz", href: "/projeler" },
    { name: "Fiyat Hesapla", href: "/fiyat-hesapla" },
    { name: "Blog", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ],
};

