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
    fullDescription: "Evinizi yenilemek yalnızca estetik bir dokunuş değil; yaşam kalitenizi, konforunuzu ve mülkünüzün değerini artıran stratejik bir yatırımdır. Artı Mimarlık olarak, kırım-döküm aşamasından son kat boyaya, gizli tesisat yenilemesinden akıllı ev altyapısına kadar tüm süreci tek elden ve sözleşmeli sabit fiyat garantisiyle yürütüyoruz.",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "Ücretsiz yerinde mimari keşif ve lazer ölçümlendirme",
      "Foto-gerçekçi 3D mimari render ve malzeme sunumu",
      "Elektrik, sıhhi tesisat ve doğalgaz altyapısının %100 yenilenmesi",
      "Akustik ve ısı yalıtımlı zemin şapı ve 1. sınıf parke uygulaması",
      "İç mimar onaylı gizli ledli asma tavan ve aydınlatma senaryoları",
      "Gecikme cezalı noter tasdikli sözleşme ve 5 yıl garanti"
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
      { step: "01", title: "Ücretsiz Keşif & İhtiyaç Analizi", desc: "Mekanınızı yerinde inceliyor, statik durumunu kontrol ediyor ve isteklerinizi dinliyoruz." },
      { step: "02", title: "3D Tasarım & Sabit Fiyat Teklifi", desc: "Evinizin bitmiş halini 3D olarak görselleştiriyor, kuruşu kuruşuna sabit bütçeli teklif sunuyoruz." },
      { step: "03", title: "Sözleşme & Malzeme Seçimi", desc: "Teslim tarihi, malzeme markaları ve cezai şartların yer aldığı resmi sözleşmemizi imzalıyoruz." },
      { step: "04", title: "Uygulama & Mimar Denetimi", desc: "Uzman kadromuzla işe başlıyor, her aşamada şantiye şefimizle fotoğraflı ilerleme raporu sunuyoruz." },
      { step: "05", title: "Detaylı Temizlik & Anahtar Teslim", desc: "Endüstriyel temizliği tamamlanmış mekanınızı garanti sertifikasıyla zamanında teslim ediyoruz." },
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
        a: "Kesinlikle hayır. Baş mimarımız ve şantiye şefimiz her gün uygulamayı denetler. Haftalık veya günlük WhatsApp video/fotoğraf raporlarıyla süreci oturduğunuz yerden takip edebilirsiniz."
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
    title: "Lüks Villa Tadilatı & İç Mimarlık",
    badge: "Özel Mimari Çözümler",
    subtitle: "Prestijli ve benzersiz müstakil yaşam alanları",
    shortDescription: "Statik güçlendirmeden akıllı ev otomasyonuna, spa & sauna alanlarından peyzaj ve havuz revizyonuna kadar kusursuz lüks villa yenilemesi.",
    fullDescription: "Müstakil yaşamın gerektirdiği yüksek mühendislik disiplinini, üst segment iç mimari estetikle harmanlıyoruz. Isı yalıtımı, çatı revizyonu, yerden ısıtma sistemleri, galeri boşluğu tasarımları, şömine uygulamaları ve dış mekan peyzajıyla villanızı modern bir başyapıta dönüştürüyoruz.",
    heroImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "Özel iç mimar ve peyzaj mimarı liderliğinde projelendirme",
      "KNX / Control4 akıllı ev otomasyonu ve iklimlendirme entegrasyonu",
      "Yerden ısıtma (Rehau) ve VRF merkezi iklimlendirme sistemleri",
      "İthal doğal mermer (Calacatta, Nero Marquina) zemin ve şömine kaplamaları",
      "Özel akustik sinema odası, şarap mahzeni, hamam ve sauna imalatı",
      "Açık havuz yenileme, kış bahçesi ve giyotin cam sistemleri"
    ],
    scope: [
      "Çatı karkas onarımı, su ve ısı izolasyonu (Braas/Onduline)",
      "Rehau yerden ısıtma altyapısı & Daikin/Mitsubishi VRF klima",
      "Doğal ahşap masif lamine parke & İtalyan seramik zeminler",
      "Özel imalat masif ve lake giyinme odaları, lambri duvar kaplamaları",
      "Biyoetanol ve odunlu modern şömine tasarımları",
      "Güvenlik kameraları, çevre aydınlatma ve otomatik sulama altyapısı"
    ],
    process: [
      { step: "01", title: "Statik ve Mimari İnceleme", desc: "Binanın taşıyıcı elemanları, tesisat kanalları ve bahçe topoğrafyası incelenir." },
      { step: "02", title: "Konsept & Moodboard Geliştirme", desc: "Yaşam tarzınıza uygun lüks malzeme kombinasyonları ve 3D sanal tur hazırlanır." },
      { step: "03", title: "Resmi İzinler & Sözleşme", desc: "Gerekli belediye/site yönetim izinleri planlanır ve şantiye takvimi netleştirilir." },
      { step: "04", title: "Ağır Kırım & Altyapı İmalatı", desc: "Tüm mekanik, elektrik ve izolasyon altyapısı sıfır hata toleransıyla uygulanır." },
      { step: "05", title: "İnce İşçilik & Peyzaj Teslimi", desc: "Özel mobilyalar, aydınlatmalar monte edilir; bahçe ve havuzla birlikte teslim edilir." },
    ],
    materials: ["Rehau", "Daikin VRF", "Braas Çatı", "Calacatta Mermer", "Hansgrohe Axor", "Gaggenau / Miele", "Somfy Motorlu Sistemler"],
    faq: [
      {
        q: "Villa tadilatında bahçe ve havuz da kapsama dahil edilebilir mi?",
        a: "Evet, peyzaj mimarlarımız eşliğinde havuz mekanik revizyonu, mozaik kaplama, taş döşeme, kış bahçesi ve bahçe sulama altyapısı komple anahtar teslim yürütülmektedir."
      },
      {
        q: "Akıllı ev sistemleri projeye nasıl entegre ediliyor?",
        a: "Kırım aşamasında KNX uyumlu kablolama altyapısı çekilir. Aydınlatma, perde-panjur, yerden ısıtma, klima ve güvenlik kameraları tek bir mobil uygulama ve dokunmatik paneller üzerinden kontrol edilebilir."
      }
    ],
    estimatedDuration: "60 - 90 İş Günü",
    warranty: "5 Yıl Şirket & Tesisat Garantisi"
  },
  {
    id: "ofis-tadilat",
    slug: "ofis-tadilat",
    title: "Ofis & Ticari Alan Tadilatı",
    badge: "Kurumsal Çözümler",
    subtitle: "Üretkenliği ve marka prestijini artıran modern çalışma alanları",
    shortDescription: "Açık ofis planlaması, ses yalıtımlı toplantı odaları, veri/sunucu altyapısı ve kurumsal kimliğinizi yansıtan prestijli mimari tasarımlar.",
    fullDescription: "Günümüz iş dünyasında ofis mekanları, yalnızca çalışılan bir yer değil; şirketinizin marka değerini, çalışan motivasyonunu ve müşteri algısını belirleyen en önemli vitrindir. Esnek çalışma alanları, akustik konfor, ergonomik aydınlatma ve kesintisiz zayıf akım altyapısıyla işyerinizi geleceğe hazırlıyoruz.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "Hızlı şantiye yönetimi (Hafta sonu ve gece vardiyası imkanı)",
      "Akustik cam bölme duvarlar ve ses yalıtımlı toplantı kabinleri",
      "Yükseltilmiş döşeme ve karo halı (Tarkett/Interface) sistemleri",
      "Zayıf akım, Cat6/Cat7 yapısal kablolama ve sunucu odası yangın güvenliği",
      "Ergonomik karşılama bankosu, mutfak ve dinlenme (lounge) alanları",
      "Yangın yönetmeliğine %100 uygun yağmurlama ve kaçış planlaması"
    ],
    scope: [
      "Modüler çift camlı alüminyum bölme duvar imalatı",
      "Taşyünü ve akustik baffle asma tavan sistemleri",
      "Yükseltilmiş zemin üzeri antistatik karo halı kaplama",
      "Aydınlatma otomasyonu ve DALI kontrollü ofis armatürleri",
      "Mutfak/cafe alanı, WC grupları ve yönetici odası mobilyaları"
    ],
    process: [
      { step: "01", title: "Fonksiyonel Alan Planlaması", desc: "Departman büyüklükleri ve sirkülasyon hatları incelenerek yerleşim planı (layout) çizilir." },
      { step: "02", title: "Mekanik ve Elektrik Projelendirme", desc: "Klima kapasitesi, priz noktaları ve sunucu gereksinimleri hesaplanır." },
      { step: "03", title: "Sıfır İş Kaybı Planlaması", desc: "Şirketinizin operasyonunu aksatmayacak etaplı veya gece mesaili çalışma takvimi yapılır." },
      { step: "04", title: "Anahtar Teslim Montaj", desc: "Bölmeler, tavanlar, halılar ve zayıf akım hatları test edilerek devreye alınır." },
    ],
    materials: ["Interface Karo Halı", "Durlum Metal Asma Tavan", "Philips LED Aydınlatma", "Knauf Alçıpan", "Legrand Zayıf Akım", "Dormakaba Cam Aksesuarları"],
    faq: [
      {
        q: "Çalışma saatlerimizi aksatmadan tadilat yapabilir misiniz?",
        a: "Evet. Kurumsal ofis projelerinde iş akışınızı kesintiye uğratmamak adına hafta sonu ve akşam/gece vardiyası planlayabiliyoruz."
      },
      {
        q: "Server odası ve IT altyapısı hizmete dahil mi?",
        a: "Evet. Yapısal data kablolaması, rack kabinet montajı, FM200 yangın söndürme altyapısı ve kesintisiz güç kaynağı (UPS) hatları anahtar teslim kurulur."
      }
    ],
    estimatedDuration: "20 - 35 İş Günü",
    warranty: "3 Yıl Kurumsal Bakım & Garanti"
  },
  {
    id: "mutfak-banyo-tadilat",
    slug: "mutfak-banyo-tadilat",
    title: "Mutfak & Banyo Yenileme",
    badge: "Hızlı & Detaycı",
    subtitle: "Maksimum depolama, hijyen ve çağdaş estetik",
    shortDescription: "Su yalıtımı garantili banyo seramikleri, ankastre ada mutfaklar, çizilmez porselen tezgahlar ve akıllı depolama mekanizmaları.",
    fullDescription: "Evin en çok kullanılan ve en yüksek uzmanlık gerektiren mekanları mutfak ve banyolardır. Su kaçağı riskini sıfıra indiren çift kat sürme izolasyon, lazer teraziyle döşenen büyük ebat (120x240) porselen seramikler, Blum frenli mekanizmalar ve neme dayanıklı lake dolaplarla hayalinizdeki lüks konforu inşa ediyoruz.",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "Mutfakta akrilik / lake kapak ve Blum mekanizma garantisi",
      "Çizilmez ve ısıya dayanıklı Porselen (Laminam/Dekton) veya Kuvars tezgahlar",
      "Banyoda su yalıtım testi yapılmış çift kat çimento esaslı izolasyon",
      "Gömme rezervuar (Geberit) ve şık lineer paslanmaz süzgeçler",
      "Özel ölçü temperli cam duşakabin ve antrasit / fırçalanmış pirinç armatürler",
      "Gizli led aydınlatmalı buğu önleyicili akıllı aynalar"
    ],
    scope: [
      "Eski dolap, fayans ve tesisatın sökülüp molozun tahliyesi",
      "PPRC temiz su ve PVC atık su borularının yenilenmesi",
      "Banyoda tam yüzey su izolasyonu ve 24 saatlik sızdırmazlık testi",
      "Özel üretim CNC detaylı lake mutfak ve banyo mobilyaları",
      "Ankastre cihaz montajı ve su/gaz bağlantı testleri"
    ],
    process: [
      { step: "01", title: "Ölçü ve Yerleşim Tasarımı", desc: "Köşe açıları, priz ve gider konumları lazer metreyle hassas şekilde çıkarılır." },
      { step: "02", title: "3D Malzeme Kombinasyonu", desc: "Kapak rengi, tezgah modeli ve kulp seçenekleri 3D çizimde beğeninize sunulur." },
      { step: "03", title: "Kırım & İzolasyon", desc: "Eski seramikler sökülür, su tesisatı sıfırlanıp izolasyon katmanı çekilir." },
      { step: "04", title: "Seramik & Mobilya Montajı", desc: "Seramikler döşenir, fabrikamızda üretilen dolap ve tezgahlar monte edilir." },
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
    fullDescription: "Binalarınızın ömrünü uzatan, kışın %50'ye varan doğalgaz tasarrufu sağlayan ve yapıya modern bir estetik kazandıran bina ölçekli taahhüt hizmetleri. İskele kurulumundan iş güvenliği izinlerine, dış cephe aydınlatmasından ortak merdiven holü ve asansör revizyonuna kadar site yönetimlerine profesyonel çözümler.",
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
      { step: "02", title: "Site Yönetimi Sunumu & 3D Tasarım", desc: "Apartman toplantılarına bizzat katılıp 3D cephe alternatiflerini kat maliklerine sunuyoruz." },
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

