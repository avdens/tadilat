export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "2025-ev-tadilati-maliyet-rehberi",
    title: "2025 Ev Tadilatı Maliyetleri: Kalem Kalem Güncel Bütçe Rehberi",
    excerpt: "Komple daire tadilatında kırım, elektrik, sıhhi tesisat, seramik, mutfak ve banyo giderleri ne kadar tutar? Sürpriz maliyetlerden nasıl korunursunuz?",
    category: "Maliyet & Bütçe",
    date: "10 Ocak 2025",
    readTime: "6 dk okuma",
    author: "Mimar Emre Yılmaz",
    authorRole: "Baş Mimar & Proje Direktörü",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    content: `
      <h2>Ev Tadilatında Bütçeyi Belirleyen Temel Unsurlar</h2>
      <p>Bir evin yenilenmesi sürecinde maliyeti etkileyen onlarca değişken bulunur. Metrekare büyüklüğü, binanın yaşı, tesisatların fiziki durumu ve tercih edilecek malzeme segmenti (Standart, Konfor, Lüks) nihai bütçeyi doğrudan belirler.</p>
      
      <h3>1. Altyapı ve Kırım-Döküm Maliyetleri</h3>
      <p>Özellikle 20 yaşın üzerindeki yapılarda elektrik kabloları bez sargılı veya eski tip bakır olabilir; temiz ve pis su boruları ise galvaniz ve demirden oluşabilir. Bu boruların sıfırlanması, ileride yaşanabilecek su patlaması ve yangın risklerini önlemek için ertelenemez bir zorunluluktur.</p>
      
      <h3>2. Mutfak ve Banyo İmalatları</h3>
      <p>Bir daire tadilat bütçesinin yaklaşık %35-%45'i mutfak ve banyo alanlarında harcanır. Akrilik veya lake kapaklar, porselen ya da kuvars tezgahlar ve gömme batarya sistemleri bu kalemin ana maliyetlerini oluşturur.</p>

      <h3>3. Sürpriz Harcamalardan Kaçınmanın Yolu: Sabit Fiyat Sözleşmesi</h3>
      <p>En sık karşılaşılan sorun, işe başladıktan sonra ustaların veya taşeronların 'burası da çürük çıktı, şu da değişecek' diyerek başlangıç bütçesini %50 aşmasıdır. Profesyonel anahtar teslim mimarlık firmaları, detaylı keşif yaparak keşif anında tüm riskleri sözleşmeye dahil eder ve sabit fiyat garantisi verir.</p>
    `
  },
  {
    slug: "anahtar-teslim-tadilatta-yapilan-7-hata",
    title: "Anahtar Teslim Tadilatta En Çok Yapılan 7 Hata ve Çözümleri",
    excerpt: "Sözleşmesiz usta çalıştırmak, 3D çizim yaptırmamak ve su yalıtımını ihmal etmek... Tadilata başlamadan önce bu rehberi mutlaka okuyun.",
    category: "Tadilat İpuçları",
    date: "24 Şubat 2025",
    readTime: "5 dk okuma",
    author: "İç Mimar Zeynep Arslan",
    authorRole: "Tasarım Ekip Lideri",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    content: `
      <h2>Tadilat Sürecini Kabusa Çevirmemek İçin Nelere Dikkat Edilmeli?</h2>
      <p>Ev tadilatı heyecan verici bir serüven olabileceği gibi, plansız başlandığında bütçe aşımı, gecikmeler ve usta anlaşmazlıklarıyla yıpratıcı bir sürece de dönüşebilir.</p>

      <h3>1. Ayrı Ayrı Taşeronlarla Uğraşmak</h3>
      <p>Tesisatçıyı, elektrikçiyi, boyacıyı ve parkeciyi ayrı ayrı bulduğunuzda; parkeci boyacıyı, boyacı alçıcıyı suçlar. Sorumluluk kimseye ait olmaz. Anahtar teslim bir mimarlık ofisiyle çalışmak tek muhatap ve tek sorumlu demektir.</p>

      <h3>2. Yazılı ve Cezai Şartlı Sözleşme Yapmamak</h3>
      <p>İşin teslim tarihi gün olarak netleştirilmeli ve olası gecikmelerde günlük cezai şart sözleşmede yer almalıdır. Ayrıca malzeme markaları (örn. 'Jotun boya, VitrA seramik, Rehau boru') açıkça yazılmalıdır.</p>

      <h3>3. Banyo Su İzolasyonunu Es Geçmek</h3>
      <p>Yeni döşenen pahalı seramiklerin altından alt komşuya su sızması, yapılan tüm masrafın çöpe gitmesine neden olur. Çift kat elastik sürme izolasyon ve 24 saatlik sızdırmazlık testi atlanmamalıdır.</p>
    `
  },
  {
    slug: "acik-mutfak-ada-tezgah-tasarimi",
    title: "Açık Mutfak ve Ada Tezgah Tasarımı: Trendler ve Statik Kurallar",
    excerpt: "Salonu mutfakla birleştirerek ferah bir yaşam alanı oluştururken hangi duvarlar yıkılabilir? Ada tezgah ölçüleri nasıl olmalıdır?",
    category: "İç Mimarlık",
    date: "18 Mart 2025",
    readTime: "4 dk okuma",
    author: "Mimar Emre Yılmaz",
    authorRole: "Baş Mimar & Proje Direktörü",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    content: `
      <h2>Açık Mutfak (Amerikan Mutfak) Neden Bu Kadar Popüler?</h2>
      <p>Modern yaşam biçimi, yemek hazırlama sürecini izole bir aktivite olmaktan çıkarıp aile ve misafirlerle sosyalleşilen keyifli bir alana dönüştürdü. Salon ile mutfağın birleşimi hem ışığı artırır hem de alana ferahlık katar.</p>

      <h3>Statik Taşıyıcı Duvarlara Dikkat!</h3>
      <p>Duvar yıkımı öncesinde binanın mimari ve statik projesi mutlaka incelenmelidir. Kolon, perde beton veya ana kirişlere hiçbir şekilde müdahale edilemez; yalnızca dolgu tuğla veya gazbeton ara bölme duvarlar kaldırılabilir.</p>

      <h3>Ada Tezgah İçin İdeal Ölçüler</h3>
      <p>Bir ada tezgahın etrafında rahat hareket edebilmek için mutfak tezgahı ile ada arasında en az 90 cm ile 110 cm geçiş mesafesi bırakılmalıdır. Adada ocak veya evye planlanıyorsa, zemin şapı atılmadan önce elektrik ve su/gider hatları taşınmalıdır.</p>
    `
  }
];

