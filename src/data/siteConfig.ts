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
  brandName: "HS Dekorasyon",
  legalName: "HS Dekorasyon & Anahtar Teslim Tadilat",
  tagline: "Konya'da Ustasından Anahtar Teslim Ev, Ofis ve Bina Tadilatı",
  description: "Konya Merkez ve tüm ilçelerinde kırımından boyasına, su-elektrik tesisatından fayans ve mutfak dolabına kadar aracısız, doğrudan usta güvencesiyle anahtar teslim tadilat ve dekorasyon hizmeti.",
  phone: "+90 (530) 450 41 16",
  phoneRaw: "+905304504116",
  whatsapp: "+90 (530) 450 41 16",
  whatsappRaw: "905304504116",
  email: "hsdekorasyon42@gmail.com",
  address: "Konya / Merkez",
  city: "Konya",
  district: "Merkez",
  workingHours: "Pazartesi - Cumartesi: 08:00 - 20:00",
  yearsOfExperience: 20,
  completedProjects: 550,
  customerSatisfaction: 99.6,
  warrantyYears: 5,
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
  navigation: [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    {
      name: "Hizmetlerimiz",
      href: "/hizmetler",
      children: [
        { name: "Komple Ev & Daire Tadilatı", href: "/hizmetler/ev-tadilat", desc: "A'dan Z'ye anahtar teslim daire yenileme" },
        { name: "Müstakil Ev & Villa Tadilatı", href: "/hizmetler/villa-tadilat", desc: "Yalıtım, tesisat ve lüks dekorasyon" },
        { name: "Ofis & Dükkan Tadilatı", href: "/hizmetler/ofis-tadilat", desc: "İşyeri, mağaza ve ticari mekan yenileme" },
        { name: "Mutfak & Banyo Yenileme", href: "/hizmetler/mutfak-banyo-tadilat", desc: "Fayans, seramik, dolap ve su tesisatı" },
        { name: "Bina Dış Cephe & Mantolama", href: "/hizmetler/bina-tadilat", desc: "Isı yalıtımı, boya ve çatı onarımı" },
      ],
    },
    { name: "Nasıl Çalışırız?", href: "/surec" },
    { name: "Yaptığımız İşler", href: "/projeler" },
    { name: "Fiyat Hesapla", href: "/fiyat-hesapla" },
    { name: "Tadilat Rehberi", href: "/blog" },
    { name: "İletişim", href: "/iletisim" },
  ],
};
