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
    location: "Yazır Mah., Selçuklu / Konya",
    serviceType: "3+1 Komple Daire Tadilatı",
    rating: 5,
    date: "Aralık 2024",
    comment: "Eski evimizden geriye sadece kaba duvarlar kaldı. HS Dekorasyon ve usta ekibiyle her aşamada ne konuştuysak eksiksiz uygulandı. Söz verilen günden bile 2 gün önce anahtarımızı teslim aldık. Usta disiplinleri olağanüstü.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "2",
    name: "Dr. Bülent Tarcan",
    location: "Havzan Mah., Meram / Konya",
    serviceType: "Müstakil Villa & Bahçe Yenileme",
    rating: 5,
    date: "Ekim 2024",
    comment: "Müstakil villamızın çatı, su tesisatı ve dış mekan yenilemesinde HS Dekorasyon ile çalışmak çok doğru bir karar oldu. Her akşam şantiyeyi süpürüp tertemiz bıraktılar. Aracısız usta işçiliğinin kalitesi ortada.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "3",
    name: "Cemil Aksoy",
    location: "BÜSAN Sanayi, Karatay / Konya",
    serviceType: "İdare Binası & Ofis Tadilatı",
    rating: 5,
    date: "Kasım 2024",
    comment: "Sanayi tesisimizdeki idari ofis katını iş akışımızı hiç aksatmadan söz verdikleri gibi 3 haftada teslim ettiler. Konya'da dürüst, sözünün eri ve işinin ehli usta ekibi bulmak büyük şans.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "4",
    name: "Av. Zeynep Demiroğlu",
    location: "Aşkan Mah., Meram / Konya",
    serviceType: "Mutfak & Banyo Yenileme",
    rating: 5,
    date: "Ocak 2025",
    comment: "Banyomdaki su sızıntısı probleminden bıkmıştım. Eski tesisatı komple söküp sıfırdan yaptılar, su izolasyon testi uyguladılar. Mutfak dolaplarımızın montajı da kusursuz oldu. Ellerinize sağlık.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  }
];

export const trustGuarantees = [
  {
    icon: "ShieldCheck",
    title: "5 Yıl Usta Garantisi",
    desc: "Tüm sıhhi, elektrik tesisatı ve ince işçilik uygulamalarımız 5 yıl boyunca HS Dekorasyon garantisi altındadır."
  },
  {
    icon: "FileSignature",
    title: "Sabit Fiyat Sözleşmesi",
    desc: "İşin başında belirlenen malzeme markaları ve usta bütçesi sabittir; sonradan sürpriz masraf asla çıkarılmaz."
  },
  {
    icon: "Clock",
    title: "Gecikme Cezalı Teslim",
    desc: "Teslim günü yazılı sözleşmeye yazılır. Olası gecikmeler için günlük cezai şart taahhüdü verilir."
  },
  {
    icon: "Users",
    title: "Doğrudan Usta İşi",
    desc: "Aracı, taşeron veya komisyoncu yok. İlk günden anahtar teslime kadar bizzat işin başındaki usta ekibiyle muhatap olursunuz."
  }
];
