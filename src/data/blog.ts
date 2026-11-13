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
    title: "2025 Ev Tadilatı Maliyetleri: Ustasından Kalem Kalem Bütçe Rehberi",
    excerpt: "Komple daire tadilatında kırım, elektrik, su tesisatı, seramik, mutfak ve banyo masrafları ne kadar tutar? Sürpriz maliyetlerden nasıl korunursunuz?",
    category: "Maliyet & Bütçe",
    date: "10 Ocak 2025",
    readTime: "6 dk okuma",
    author: "Hasan Usta",
    authorRole: "HS Dekorasyon Kurucusu & Usta Başı",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    content: `
      <h2>Ev Tadilatında Bütçeyi Belirleyen Temel Unsurlar</h2>
      <p>Bir evin yenilenmesi sürecinde maliyeti doğrudan etkileyen unsurlar vardır. Metrekare büyüklüğü, binanın yaşı, mevcut su ve elektrik tesisatının durumu ve kullanılacak malzeme kalitesi (Standart, Konfor, Lüks) nihai bütçeyi belirler.</p>
      
      <h3>1. Altyapı ve Kırım-Döküm Kalemleri</h3>
      <p>Özellikle 20 yaşın üzerindeki binalarda elektrik hatları ve eski galvaniz demir su boruları mutlaka sıfırlanmalıdır. Kırım aşamasında bu boruların yenilenmesi, sonradan oluşabilecek su patlamalarını ve yangın risklerini önler.</p>
      
      <h3>2. Mutfak ve Banyo İmalatları</h3>
      <p>Bir ev tadilatının en kritik ve en çok emek isteyen kısmı mutfak ve banyodur. Kaliteli dolap kapakları, frenli menteşeler, çizilmez tezgah ve gömme rezervuar sistemleri bu alanın temelini oluşturur.</p>

      <h3>3. Sürpriz Masraflardan Korunmanın Yolu: Doğrudan Usta ile Sabit Fiyat Sözleşmesi</h3>
      <p>En sık yaşanan sorun, işe başlandıktan sonra 'burası da bozukmuş, şu da değişecek' denilerek bütçenin katlanmasıdır. HS Dekorasyon olarak Konya'da yerinde ücretsiz keşif yapıyor, her kalemi sözleşmeye yazıyor ve sabit fiyat garantisi veriyoruz.</p>
    `
  },
  {
    slug: "anahtar-teslim-tadilatta-yapilan-7-hata",
    title: "Anahtar Teslim Tadilatta En Çok Yapılan Hatalar ve Çözümleri",
    excerpt: "Sözleşmesiz iş yaptırmak, farklı taşeronlarla tek tek uğraşmak ve su yalıtımını ihmal etmek... Tadilata başlamadan önce bu usta tavsiyelerini okuyun.",
    category: "Tadilat İpuçları",
    date: "24 Şubat 2025",
    readTime: "5 dk okuma",
    author: "Hasan Usta",
    authorRole: "HS Dekorasyon Kurucusu & Usta Başı",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    content: `
      <h2>Tadilat Sürecini Sorunsuz Geçirmek İçin Usta Tavsiyeleri</h2>
      <p>Ev tadilatı doğru usta ekibiyle çalışıldığında huzurlu ve keyifli bir süreçtir. Ancak plansız başlandığında bütçe aşımı ve usta kavgalarıyla yıpratıcı bir hale gelebilir.</p>

      <h3>1. Farklı Ustalarla Tek Tek Uğraşmak</h3>
      <p>Tesisatçıyı, elektrikçiyi, boyacıyı, fayansçıyı ayrı ayrı bulduğunuzda; fayansçı tesisatçıyı, boyacı alçıcıyı suçlar. Ortada tek bir sorumlu kalmaz. Anahtar teslim usta ekibiyle çalışmak tek muhatap ve eksiksiz sorumluluk demektir.</p>

      <h3>2. Yazılı ve Gün Belirtilmiş Sözleşme Yapmamak</h3>
      <p>İşin başlama ve bitiş tarihi net olarak yazılmalı, malzeme markaları (Jotun, VitrA, Fırat Boru, Çamsan vb.) açıkça listelenmelidir.</p>

      <h3>3. Banyo Su İzolasyonunu İhmal Etmek</h3>
      <p>Yeni döşenen seramiklerin altına su yalıtımı yapılmazsa alt komşuya su sızar ve seramikleri kırmak zorunda kalırsınız. Çift kat sürme izolasyon ve su sızdırmazlık testi asla atlanmamalıdır.</p>
    `
  },
  {
    slug: "acik-mutfak-ada-tezgah-tasarimi",
    title: "Açık Mutfak ve Ada Tezgah Uygulamasında Usta Püf Noktaları",
    excerpt: "Salonu mutfakla birleştirerek ferah bir yaşam alanı oluştururken hangi duvarlar kırılabilir? Ada tezgah tesisatı nasıl çekilir?",
    category: "Usta Rehberi",
    date: "18 Mart 2025",
    readTime: "4 dk okuma",
    author: "Hasan Usta",
    authorRole: "HS Dekorasyon Kurucusu & Usta Başı",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    content: `
      <h2>Açık Mutfak Planlamasında Dikkat Edilecekler</h2>
      <p>Konya'da son dönemde ferah ve geniş yaşam alanları isteyen ev sahipleri açık mutfak konseptini çokça tercih ediyor. Mutfak ve salonun birleşmesi mekanın aydınlık ve geniş görünmesini sağlar.</p>

      <h3>Taşıyıcı Kolon ve Kirişlere Asla Dokunulmaz!</h3>
      <p>Kırım işlemine başlamadan önce binanın taşıyıcı elemanları kontrol edilir. Kolon, perde beton ve ana kirişlere kesinlikle dokunulmaz; yalnızca ara bölme tuğla veya gazbeton duvarlar kaldırılabilir.</p>

      <h3>Ada Tezgah İçin Tesisat Püf Noktaları</h3>
      <p>Eğer ada tezgaha evye veya ocak gelecekse, zemin şapı dökülmeden önce su, gider ve elektrik kabloları zemin altından çekilmelidir. Şap atıldıktan sonra bu hatları taşımak zor ve masraflı olur.</p>
    `
  }
];
