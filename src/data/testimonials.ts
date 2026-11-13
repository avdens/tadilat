export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  serviceType: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "1",
    name: "Murat & Selin Karadağ",
    location: "Bağdat Caddesi, Kadıköy",
    serviceType: "3+1 Komple Daire Tadilatı",
    rating: 5,
    date: "Aralık 2024",
    comment: "Eski evimizden geriye sadece kolonlar kaldı. 3D tasarımda ne gördüysek, bitmiş evde tıpatıp aynısını bulduk. Söz verilen tarihten 2 gün önce anahtarlarımızı aldık. İş disiplinleri olağanüstü.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "2",
    name: "Dr. Bülent Tarcan",
    location: "Yeniköy, Sarıyer",
    serviceType: "Müstakil Villa & Bahçe Yenileme",
    rating: 5,
    date: "Ekim 2024",
    comment: "Tarihi ve mimari hassasiyeti olan villamızın renovasyonunda Artı Mimarlık ile çalışmak hayatımın en doğru kararlarından biri oldu. Şantiye her akşam süpürülmüş ve tertemiz bırakılıyordu.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "3",
    name: "Cemil Aksoy",
    location: "Levent, Beşiktaş",
    serviceType: "680 m² Kurumsal Ofis Fit-Out",
    rating: 5,
    date: "Kasım 2024",
    comment: "Yatırım şirketimizin genel müdürlüğünü gece mesaileri organize ederek 4 haftada sıfır aksamayla teslim ettiler. Akustik bölmeler ve zayıf akım altyapısı saat gibi çalışıyor.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "4",
    name: "Av. Zeynep Demiroğlu",
    location: "Akaretler, Beşiktaş",
    serviceType: "Lüks Mutfak & Spa Banyo",
    rating: 5,
    date: "Ocak 2025",
    comment: "Banyomdaki su sızıntısı probleminden bıkmıştım. Eski tesisatı komple söküp harika bir spa banyoya çevirdiler. Çift kat izolasyon testi yaptılar. Detaylara gösterdikleri özen için teşekkürler.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  }
];

export const trustGuarantees = [
  {
    icon: "ShieldCheck",
    title: "5 Yıl Firma Garantisi",
    desc: "Tüm sıhhi, elektrik tesisatı ve ince işçilik imalatlarımız 5 yıl boyunca resmi garantimiz altındadır."
  },
  {
    icon: "FileSignature",
    title: "Sabit Fiyat Sözleşmesi",
    desc: "İşin başında belirlenen malzeme listesi ve bütçe sabittir; sürpriz masraf asla çıkarılmaz."
  },
  {
    icon: "Clock",
    title: "Gecikme Cezalı Teslim",
    desc: "Teslim günü sözleşmeye yazılır. Olası gecikmeler için günlük cezai şart taahhüdü verilir."
  },
  {
    icon: "Box",
    title: "Foto-Gerçekçi 3D Render",
    desc: "Kırıma başlamadan önce evinizin bitmiş halini 3D olarak görür, her detayı önceden onaylarsınız."
  }
];

