export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  badge: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  gallery: string[];
  features: string[];
  process: Array<{ step: string; title: string; desc: string }>;
  materials: string[];
  scope: string[];
  faq: Array<{ q: string; a: string }>;
  estimatedDuration: string;
  warranty: string;
}

export const services: ServiceItem[] = [
  {
    id: "ev-tadilat",
    slug: "ev-tadilat",
    title: "Komple Ev & Daire Tadilatı",
    badge: "En Çok Tercih Edilen",
    subtitle: "Anahtar teslim yaşam alanı dönüşümü",
    shortDescription: "Elektrik ve su tesisatından zemin kaplamalarına, asma tavandan özel mobilya üretimine kadar evinizi sıfırdan hayalinizdeki konfora kavuşturuyoruz.",
    fullDescription: "Evinizi yenilemek yalnızca estetik bir dokunuş değil; yaşam kalitenizi, konforunuzu ve mülkünüzün değerini artıran kalıcı bir yatırımdır. HS Dekorasyon olarak Konya'da, kırım-döküm aşamasından son kat boyaya, gizli tesisat yenilemesinden montaja kadar tüm süreci doğrudan işinin ehli usta ekibimizle ve sözleşmeli sabit fiyat garantisiyle yürütüyoruz.",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "Ücretsiz yerinde keşif ve lazer metre ile net ölçümlendirme",
      "Aracısız doğrudan usta ekibiyle birebir iletişim ve uygulama",
      "Elektrik, sıhhi tesisat ve doğalgaz altyapısının %100 garantili yenilenmesi",
      "Akustik ve ısı yalıtımlı zemin şapı ve 1. sınıf parke uygulaması",
      "Usta titizliğiyle gizli ledli asma tavan ve aydınlatma detayları",
      "Gecikme cezalı yazılı sözleşme ve 5 yıl işçilik garantisi"
    ],
    scope: [
      "Yıkım, kırım, moloz atımı ve hafriyat temizliği",
      "Elektrik & aydınlatma tesisatı sıfırlama (Schneider/Legrand altyapı)",
      "PPRC sessiz boru sıhhi tesisat & kombi radyatör altyapısı",
      "Alçıpan duvar bölme, niş detayları ve asma tavan tasarımları",
      "Jotun boya ile 3 kat saten alçı ve silinebilir boya uygulaması",
      "Lake iç kapılar ve özel tasarım çelik kapı",
      "Özel ölçü mutfak, banyo dolapları ve giyinme odası"
    ],
    process: [
      { step: "01", title: "Ücretsiz Keşif & İhtiyaç Analizi", desc: "Mekanınızı Konya'da yerinde inceliyor, tesisat durumunu kontrol ediyor ve isteklerinizi dinliyoruz." },
      { step: "02", title: "Planlama & Sabit Fiyat Teklifi", desc: "Evinizin ihtiyaçlarını kalem kalem çıkarıyor, kuruşu kuruşuna sabit bütçeli net usta teklifi sunuyoruz." },
      { step: "03", title: "Sözleşme & Malzeme Seçimi", desc: "Teslim tarihi, malzeme markaları ve cezai şartların yer aldığı yazılı sözleşmemizi imzalıyoruz." },
      { step: "04", title: "Uygulama & Usta Başı Denetimi", desc: "Çekirdekten yetişme usta kadromuzla işe başlıyor, her aşamada fotoğraflı ilerleme bilgisi veriyoruz." },
      { step: "05", title: "Detaylı Temizlik & Anahtar Teslim", desc: "Tüm kaba ve ince temizliği tamamlanmış evinizi söz verdiğimiz günde teslim ediyoruz." },
    ],
    materials: ["Jotun Boya", "VitrA", "Artema", "Çimstone / Silestone", "Egger / Çamsan Parke", "Blum Menteşe & Ray Sistemleri", "Schneider Elektrik"],
    faq: [
      {
        q: "Komple bir daire tadilatı ortalama ne kadar sürer?",
        a: "Standart 3+1 (120-140 m²) bir dairenin komple anahtar teslim tadilatı kapsamına göre ortalama 30 ile 45 iş günü arasında tamamlanmaktadır. Teslim tarihimiz sözleşmemizde gün bazında taahhüt edilir."
      },
      {
        q: "Tadilat sırasında ekstra masraflar çıkar mı?",
        a: "Hayır. Keşif sonrası hazırladığımız sözleşmede tüm kalemler ve markalar nettir. Sizin onayınız olmadan hiçbir ek maliyet çıkarılmaz; sabit fiyat garantimiz mevcuttur."
      },
      {
        q: "Tadilat boyunca evde bulunmam gerekiyor mu?",
        a: "Kesinlikle hayır. Usta başımız her gün bizzat işin başında durur ve ekibi yönetir. Günlük WhatsApp video/fotoğraf bilgilendirmeleriyle süreci evinizden veya işinizden rahatça takip edebilirsiniz."
      },
      {
        q: "Hangi garanti şartlarını sunuyorsunuz?",
        a: "Uygulanan tüm işçiliklerimiz için 5 yıl firma garantisi, kullanılan tüm 1. sınıf markalı malzemeler için ise üretici fabrika garantisi (2 ila 10 yıl) sunmaktayız."
      }
    ],
    estimatedDuration: "30 - 45 İş Günü",
    warranty: "5 Yıl İşçilik Garantisi"
  },
  {
    id: "villa-tadilat",
    slug: "villa-tadilat",
    title: "Villa & Müstakil Ev Tadilatı",
    badge: "Kapsamlı Usta Çözümleri",
    subtitle: "Sağlam altyapılı ve konforlu müstakil yaşam alanları",
    shortDescription: "Çatı aktarmadan tesisat yenilemeye, yerden ısıtmadan şömine, çevre düzenlemesi ve dış cephe yalıtımına kadar müstakil ev tadilatı.",
    fullDescription: "Müstakil yaşamın gerektirdiği sağlam tesisat ve yalıtım disiplinini, 20 yıllık usta tecrübemizle harmanlıyoruz. Isı yalıtımı, çatı revizyonu, yerden ısıtma sistemleri, şömine uygulamaları ve dış mekan çevre düzenlemesiyle Konya'daki villanızı dört dörtlük yeniliyoruz.",
    heroImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "Çekirdekten yetişme uzman usta kadrosuyla projelendirme ve uygulama",
      "Yerden ısıtma (Rehau/Fraenkische) ve kalorifer altyapısı yenileme",
      "Doğal mermer, traverten zemin ve şömine kaplama işçiliği",
      "Çatı onarımı, oluk yenileme ve garantili su-ısı izolasyonu",
      "Bahçe duvarı, taş döşeme, kış bahçesi ve çevre düzenleme",
      "Gecikme cezalı yazılı sözleşme ve 5 yıl işçilik garantisi"
    ],
    scope: [
      "Çatı karkas onarımı, su ve ısı izolasyonu",
      "Yerden ısıtma altyapısı & mekanik tesisat revizyonu",
      "Doğal ahşap masif/lamine parke & granit seramik zeminler",
      "Özel imalat ahşap ve lake dolaplar, giyinme odaları",
      "Modern şömine ve barbekü imalatı",
      "Çevre aydınlatma ve bahçe gider tesisatları"
    ],
    process: [
      { step: "01", title: "Yerinde Detaylı Keşif", desc: "Binanın çatı, temel, tesisat kanalları ve bahçe durumunu bizzat yerinde inceliyoruz." },
      { step: "02", title: "İhtiyaç Listesi & Sabit Fiyat", desc: "Yapılacak tüm işleri malzeme markalarıyla birlikte listeleyip net fiyat çıkarıyoruz." },
      { step: "03", title: "Sözleşme & İş Takvimi", desc: "Başlama ve teslim tarihlerini yazılı sözleşmeyle güvenceye alıyoruz." },
      { step: "04", title: "Kırım, Tesisat & İzolasyon", desc: "Mekanik, elektrik ve izolasyon altyapısını usta titizliğiyle uyguluyoruz." },
      { step: "05", title: "İnce İşçilik & Eksiksiz Teslim", desc: "Tüm zemin, boya, dolap ve dış mekan işlerini tamamlayıp anahtarı teslim ediyoruz." },
    ],
    materials: ["Rehau", "Fırat Boru", "Braas Çatı", "Kütahya Porselen", "VitrA", "Jotun", "Çamsan"],
    faq: [
      {
        q: "Villa tadilatında bahçe ve çevre düzenlemesi de dahil edilebilir mi?",
        a: "Evet, dış mekan taş döşeme, çevre aydınlatması, kış bahçesi ve bahçe duvarı gibi tüm dış alan işlerini de anahtar teslim yapıyoruz."
      },
      {
        q: "Kışın ısınma problemini nasıl çözüyorsunuz?",
        a: "Konya'nın kış şartlarına uygun taşyünü dış cephe mantolaması, çatı izolasyonu ve modern yerden ısıtma sistemleri kurarak ısınma konforunuzu garanti ediyoruz."
      }
    ],
    estimatedDuration: "60 - 90 İş Günü",
    warranty: "5 Yıl Şirket & Tesisat Garantisi"
  },
  {
    id: "ofis-tadilat",
    slug: "ofis-tadilat",
    title: "Ofis & Dükkan Tadilatı",
    badge: "Ticari Çözümler",
    subtitle: "İş yerinizi canlandıran sağlam ve hızlı tadilat",
    shortDescription: "Alçıpan bölme duvarlar, asma tavan, zemin kaplamaları, elektrik ve aydınlatma tesisatı ile dükkan ve ofis yenileme.",
    fullDescription: "HS Dekorasyon olarak Konya genelinde ofis, mağaza, klinik, cafe ve dükkan tadilatlarını, ticari faaliyetinizi aksatmayacak esnek çalışma takvimiyle ve doğrudan usta işçiliğiyle anahtar teslim gerçekleştiriyoruz.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "Hızlı şantiye yönetimi (Hafta sonu ve akşam çalışma imkanı)",
      "Cam ve alçıpan bölme duvarlar, ses yalıtımı",
      "Dayanıklı zemin kaplamaları (karo halı, laminat, seramik)",
      "Kuvvetli akım, priz hatları ve LED ofis aydınlatması",
      "Mutfak/çay ocağı ve WC alanlarının sıfırlanması",
      "Gecikme cezalı yazılı sözleşme ve garantili teslim"
    ],
    scope: [
      "Alüminyum veya alçıpan bölme duvar imalatı",
      "Taşyünü, karolam ve modüler asma tavan sistemleri",
      "Aşınmaya dayanıklı zemin kaplamaları",
      "Ofis priz grupları ve enerji hatları",
      "Mutfak alanı, banko ve ıslak hacim tesisatları"
    ],
    process: [
      { step: "01", title: "Yerinde Keşif & Planlama", desc: "İş yerinizin kullanım ihtiyacına göre alan dağılımı ve tesisat noktaları belirlenir." },
      { step: "02", title: "Maliyet & Malzeme Çizelgesi", desc: "Gereken tüm malzemeler ve işçilik kalemleri şeffaf usta teklifi olarak sunulur." },
      { step: "03", title: "Hızlı Çalışma Takvimi", desc: "Ticaretinizi aksatmayacak şekilde çalışma saatleri planlanarak işe başlanır." },
      { step: "04", title: "Anahtar Teslim Montaj", desc: "Bölmeler, tavanlar, aydınlatmalar ve zeminler eksiksiz tamamlanıp teslim edilir." },
    ],
    materials: ["Knauf Alçıpan", "Philips LED Aydınlatma", "Çamsan Parke", "VitrA", "Schneider Elektrik"],
    faq: [
      {
        q: "Çalışma saatlerimizi aksatmadan tadilat yapabilir misiniz?",
        a: "Evet. Dükkan ve ofis projelerinde iş akışınızı kesintiye uğratmamak adına hafta sonu ve akşam mesaisi planlayabiliyoruz."
      },
      {
        q: "Konya'nın tüm sanayi ve iş merkezlerine hizmet veriyor musunuz?",
        a: "Evet. BÜSAN, Marangozlar, Karatay Sanayi, Meram, Selçuklu ve tüm Konya merkezindeki iş yerlerine hizmet sunuyoruz."
      }
    ],
    estimatedDuration: "15 - 25 İş Günü",
    warranty: "3 Yıl Usta İşçilik Garantisi"
  },
  {
    id: "mutfak-banyo-tadilat",
    slug: "mutfak-banyo-tadilat",
    title: "Mutfak & Banyo Yenileme",
    badge: "Hızlı & Detaycı",
    subtitle: "Maksimum depolama, hijyen ve çağdaş estetik",
    shortDescription: "Su yalıtımı garantili banyo seramikleri, kullanışlı mutfak dolapları, çizilmez tezgahlar ve kusursuz sıhhi tesisat.",
    fullDescription: "Evin en çok kullanılan ve en yüksek ustalık gerektiren mekanları mutfak ve banyolardır. Su kaçağı riskini sıfıra indiren çift kat sürme izolasyon, lazer teraziyle döşenen seramikler, sağlam dolap montajı ve garantili tesisat işçiliğiyle Konya'da banyo ve mutfaklarınızı baştan aşağı yeniliyoruz.",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "Mutfakta akrilik / membran / lake kapak ve Blum mekanizma",
      "Çizilmez granit, porselen veya mermerit tezgah seçenekleri",
      "Banyoda su yalıtım testi yapılmış çift kat sürme izolasyon",
      "Gömme rezervuar ve modern paslanmaz duş süzgeçleri",
      "Özel ölçü temperli cam duşakabin ve kaliteli bataryalar",
      "Gizli LED aydınlatmalı ayna ve tavan uygulamaları"
    ],
    scope: [
      "Eski dolap, fayans ve tesisatın sökülüp molozun atılması",
      "PPRC temiz su ve PVC pis su borularının sıfırdan çekilmesi",
      "Banyoda tam yüzey su izolasyonu ve 24 saatlik sızdırmazlık testi",
      "Ölçüye özel mutfak ve banyo dolapları imalatı",
      "Evye, batarya, duş seti ve ankastre montajı"
    ],
    process: [
      { step: "01", title: "Ölçü ve İhtiyaç Analizi", desc: "Gider boruları, prizler ve dolap yerleşimi yerinde lazer metreyle ölçülür." },
      { step: "02", title: "Malzeme ve Model Seçimi", desc: "Kapak modeli, renk, kulp ve tezgah seçimi yapılarak net usta fiyatı verilir." },
      { step: "03", title: "Kırım & Su İzolasyonu", desc: "Eski seramikler sökülür, su tesisatı sıfırlanıp çift kat sürme izolasyon yapılır." },
      { step: "04", title: "Fayans & Dolap Montajı", desc: "Fayanslar lazer teraziyle döşenir, özel imalat dolaplar ve tezgah monte edilir." },
    ],
    materials: ["Geberit", "Grohe", "VitrA", "Dekton / Çimstone", "Blum", "Laminam Seramik", "Franke Evye"],
    faq: [
      {
        q: "Sadece banyo veya sadece mutfak tadilatı yapıyor musunuz?",
        a: "Evet, tekil mutfak veya banyo projelerini de anahtar teslim projelendirip sözleşmeli olarak teslim ediyoruz."
      },
      {
        q: "Banyo yenilemesinde su sızdırma garantisi var mı?",
        a: "Kesinlikle. Fayans döşenmeden önce çift kat elastik sürme izolasyon uygulanır ve su doldurularak 24 saat test edilir. Su yalıtımımıza 10 yıl tam garanti veriyoruz."
      }
    ],
    estimatedDuration: "10 - 18 İş Günü",
    warranty: "5 Yıl Dolap & 10 Yıl Su İzolasyon Garantisi"
  },
  {
    id: "bina-tadilat",
    slug: "bina-tadilat",
    title: "Bina Dış Cephe & Mantolama",
    badge: "Komple Bina Taahhüt",
    subtitle: "Enerji tasarrufu, modern mimari cephe ve değer artışı",
    shortDescription: "Dış cephe mantolama, mekanik seramik/kompozit cephe kaplama, çatı izolasyonu ve bina ortak alanlarının komple yenilenmesi.",
    fullDescription: "Konya'nın kış ve yaz şartlarına uygun, binalarınızın ömrünü uzatan, kışın %50'ye varan doğalgaz tasarrufu sağlayan ve yapıya modern bir estetik kazandıran bina ölçekli taahhüt hizmetleri. İskele kurulumundan iş güvenliği kurallarına, dış cephe boyasından çatı aktarmaya ve merdiven boşluğu yenilemesine kadar apartman ve site yönetimlerine sağlam usta çözümleri sunuyoruz.",
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "Taşyünü nefes alan A1 sınıfı yangına dayanıklı mantolama",
      "Mekanik alüminyum kompozit, kompakt laminat ve porselen cephe sistemleri",
      "Çatı kiremit aktarımı, su olukları ve membran su yalıtımı",
      "Bina giriş kapısı, rüzgarlık, posta kutuları ve görüntülü diafon altyapısı",
      "Enerji Kimlik Belgesi (EKB) tanzimi ve belediye hakediş süreçleri",
      "Tüm çalışanlarımız için eksiksiz SGK ve şantiye risk sigortası"
    ],
    scope: [
      "Güvenlikli flanşlı iskele kurulumu ve bina koruma filesi çekimi",
      "Taşyünü levha mantolama, dübelleme, fileli sıva ve dekoratif kaplama",
      "Jotun dış cephe silikonlu boya uygulaması",
      "Bina ortak holü mermer kaplama, yangın merdiveni kapıları ve aydınlatma",
      "Balkon korkulukları ve Fransız balkon küpeşteleri yenilenmesi"
    ],
    process: [
      { step: "01", title: "Termal Kamera & Raporlama", desc: "Bina cephesindeki ısı kaçakları ve nem kusurları termal kameralarla tespit edilir." },
      { step: "02", title: "Apartman Yönetimi Keşfi & Teklif", desc: "Apartman toplantılarına bizzat katılıp malzeme kalitesini ve yapılacak iş kalemlerini kat maliklerine şeffafça anlatıyoruz." },
      { step: "03", title: "Güvenlikli İskele & Uygulama", desc: "İş sağlığı ve güvenliği kurallarına uygun iskele kurulup çalışmalar başlatılır." },
      { step: "04", title: "EKB Tanzimi ve Teslim", desc: "Çalışma tamamlanıp Enerji Kimlik Belgesi ile birlikte yönetime teslim edilir." },
    ],
    materials: ["Knauf Taşyünü", "Weber Mantolama", "Jotun Dış Cephe Boyası", "Asaş Kompozit", "Braas Çatı Sistemleri"],
    faq: [
      {
        q: "Apartman veya site yönetimlerine taksit imkanı sunuyor musunuz?",
        a: "Evet. Daire sahipleri için anlaşmalı bankalar üzerinden uygun faizli mantolama kredisi veya hak ediş bazlı vadeli ödeme planları sunabilmekteyiz."
      },
      {
        q: "İş sağlığı ve güvenlik sigortası kimin sorumluluğundadır?",
        a: "Tüm şantiye, işçi SGK primleri ve 3. şahıs mali mesuliyet sigortası firmamızın tam sorumluluğundadır; apartman yönetimine sıfır hukuki risk bırakılır."
      }
    ],
    estimatedDuration: "30 - 60 İş Günü",
    warranty: "10 Yıl Dış Cephe Mantolama Garantisi"
  }
];

