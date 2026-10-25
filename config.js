// EDIT THIS FILE ONLY when making a site for a new client.
const SITE = {
  name: "Demo Estates",
  whatsapp: "905488559429", // digits only, with country code
  email: "hello@example.com",
  currency: "£",
  colors: { ink: "#0A2540", sea: "#1F6F8B", stone: "#F2F4F3", accent: "#C8326B" },
  areas: ["Girne", "İskele", "Gazimağusa", "Lefkoşa"],
  types: {
    Villa: { en: "Villa", tr: "Villa" },
    Apartment: { en: "Apartment", tr: "Daire" },
    Penthouse: { en: "Penthouse", tr: "Çatı dubleks" }
  },
  budgets: [100000, 200000, 350000, 500000],
  i18n: {
    en: {
      navHomes: "Homes", navContact: "Contact",
      heroTitle: "Homes between the mountains and the sea",
      heroSub: "Villas and apartments across North Cyprus, with local agents who reply on WhatsApp.",
      fLoc: "Location", fBudget: "Budget", fType: "Type", any: "Any", upTo: "Up to",
      homesTitle: "Available homes", found: "homes found",
      none: "No homes match. Raise the budget or choose another area.",
      beds: "beds", baths: "baths", waBtn: "Chat on WhatsApp", close: "Close",
      contactTitle: "Talk to an agent", contactSub: "Tell us what you are looking for. We reply on WhatsApp.",
      fName: "Your name", fMsg: "What are you looking for?", send: "Send on WhatsApp",
      demo: "Demo listings, for illustration only.",
      waHello: "Hello, I'm interested in:", waGeneral: "Hello, I'd like help finding a home."
    },
    tr: {
      navHomes: "Evler", navContact: "İletişim",
      heroTitle: "Dağlarla denizin arasında bir ev",
      heroSub: "Kuzey Kıbrıs'ta villa ve daireler; WhatsApp'tan hızlı yanıt veren yerel danışmanlar.",
      fLoc: "Konum", fBudget: "Bütçe", fType: "Tür", any: "Hepsi", upTo: "En çok",
      homesTitle: "Güncel ilanlar", found: "ev bulundu",
      none: "Uygun ev bulunamadı. Bütçeyi artırın veya başka bölge seçin.",
      beds: "yatak odası", baths: "banyo", waBtn: "WhatsApp'tan yaz", close: "Kapat",
      contactTitle: "Bir danışmanla konuşun", contactSub: "Ne aradığınızı yazın, WhatsApp'tan dönüş yapalım.",
      fName: "Adınız", fMsg: "Ne arıyorsunuz?", send: "WhatsApp'tan gönder",
      demo: "Bu ilanlar yalnızca örnektir.",
      waHello: "Merhaba, şu ev hakkında bilgi almak istiyorum:", waGeneral: "Merhaba, ev bulmak için yardım istiyorum."
    }
  },
  // img: "images/1.webp" to use a real photo; leave "" for the built-in placeholder.
  listings: [
    { id: 1, area: "Girne", type: "Villa", price: 285000, beds: 3, baths: 2, size: 180, img: "images/villa-girne.jpg",
      title: { en: "Sea-view villa with pool", tr: "Havuzlu, deniz manzaralı villa" },
      desc: { en: "A quiet street, a private pool and a terrace facing the Mediterranean.", tr: "Sakin bir sokakta, özel havuzlu ve Akdeniz manzaralı teraslı villa." } },
    { id: 2, area: "İskele", type: "Apartment", price: 118000, beds: 2, baths: 1, size: 85, img: "images/flat-iskele.jpg",
      title: { en: "Two-bedroom flat near Long Beach", tr: "Long Beach yakınında 2 yatak odalı daire" },
      desc: { en: "A short walk to the sand, with a shared pool and parking.", tr: "Kumsala kısa yürüyüş mesafesinde, ortak havuz ve otoparklı." } },
    { id: 3, area: "Girne", type: "Penthouse", price: 342000, beds: 3, baths: 2, size: 140, img: "images/penthouse-girne.jpg",
      title: { en: "Penthouse with mountain views", tr: "Dağ manzaralı çatı dubleks" },
      desc: { en: "Wide roof terrace and open-plan living on the top floor.", tr: "Üst katta geniş çatı terası ve açık planlı yaşam alanı." } },
    { id: 4, area: "Gazimağusa", type: "Apartment", price: 74000, beds: 1, baths: 1, size: 55, img: "images/flat-magusa.jpg",
      title: { en: "Compact flat near the city centre", tr: "Şehir merkezine yakın kompakt daire" },
      desc: { en: "A practical first home or rental investment, close to shops and transport.", tr: "Mağazalara ve ulaşıma yakın, ilk ev veya kiralık yatırım için pratik bir daire." } },
    { id: 5, area: "İskele", type: "Villa", price: 219000, beds: 3, baths: 2, size: 150, img: "images/villa-iskele.jpg",
      title: { en: "Garden villa near the beach", tr: "Sahile yakın bahçeli villa" },
      desc: { en: "A private garden and room for a family, minutes from the coast.", tr: "Özel bahçeli, aileler için geniş, sahile dakikalar uzaklıkta." } },
    { id: 6, area: "Lefkoşa", type: "Apartment", price: 96000, beds: 2, baths: 1, size: 90, img: "images/flat-girne.jpg",
      title: { en: "Bright flat on a quiet street", tr: "Sakin sokakta aydınlık daire" },
      desc: { en: "Good light, a balcony and easy access to the main roads.", tr: "Bol ışıklı, balkonlu ve ana yollara kolay erişimli." } }
  ]
};