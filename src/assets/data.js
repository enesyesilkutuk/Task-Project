const clothes = [
    {
      id: 1,
      title: 'Gömlek',
      brand: 'ALTINYILDIZ',
      category: 'Erkek Giyim',
      price: 250,
      img: '/images/item-1.png',
      desc: `%100 Pamuk, Flamlı Mavi, Casual Model, Slim Fit, Düğmeli Yaka, Uzun Kol, Cepsiz, 2022 Yaz, Altınyıldız Classics Slim Fit Dar Kesim Düğmeli Yaka %100 Pamuk Flamlı Gömlek`,
      sum: 'Erkek Beyaz Düğmeli Yaka Regular Fit Gömlek',
    },
    {
      id: 2,
      title: 'Sırt Çantası',
      brand: 'ADIDAS',
      category: 'lunch',
      price: 13.99,
      img: '/images/item-2.png',
      desc: ` %100 Pamuk, Flamlı Mavi, Casual Model, Slim Fit, Düğmeli Yaka, Uzun Kol, Cepsiz, 2022 Yaz, Altınyıldız Classics Slim Fit Dar Kesim Düğmeli Yaka %100 Pamuk Flamlı Gömlek`,
      sum: '%100 Deri Sırt Çantası',
    },
    {
      id:3,
      title: 'Kısa Kollu Yazlık Gömlek',
      brand: 'GRIMELANGE',
      category: 'shakes',
      price: 6.99,
      img: '/images/item-3.png',
      desc: ` %100 Pamuk, Flamlı Mavi, Casual Model, Slim Fit, Düğmeli Yaka, Uzun Kol, Cepsiz, 2022 Yaz, Altınyıldız Classics Slim Fit Dar Kesim Düğmeli Yaka %100 Pamuk Flamlı Gömlek`,
      sum: 'Çok Renkli Erkek Regular Fit Gömlek',
    },
    {
      id: 4,
      title: 'Yağmurluk',
      brand: 'THE NORTHFACE',
      category: 'breakfast',
      price: 20.99,
      img: '/images/item-4.png',
      desc: ` %100 Pamuk, Flamlı Mavi, Casual Model, Slim Fit, Düğmeli Yaka, Uzun Kol, Cepsiz, 2022 Yaz, Altınyıldız Classics Slim Fit Dar Kesim Düğmeli Yaka %100 Pamuk Flamlı Gömlek`,
      sum: 'Kadın Yeni Sezon Su Geçirmez Yağmurluk',
    },
    {
      id: 5,
      title: 'Tişört',
      brand: 'AVVA',
      category: 'lunch',
      price: 22.99,
      img: '/images/item-5.png',
      desc: ` %100 Pamuk, Flamlı Mavi, Casual Model, Slim Fit, Düğmeli Yaka, Uzun Kol, Cepsiz, 2022 Yaz, Altınyıldız Classics Slim Fit Dar Kesim Düğmeli Yaka %100 Pamuk Flamlı Gömlek`,
      sum: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    },
    {
      id: 6,
      title: 'Deri Ceket',
      brand: 'DERIMOD',
      category: 'shakes',
      price: 18.99,
      img: '/images/item-6.png',
      desc: `%100 Pamuk, Flamlı Mavi, Casual Model, Slim Fit, Düğmeli Yaka, Uzun Kol, Cepsiz, 2022 Yaz, Altınyıldız Classics Slim Fit Dar Kesim Düğmeli Yaka %100 Pamuk Flamlı Gömlek`,
      sum: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, commodi',
    },
    {
      id: 7,
      title: 'bacon overflow',
      brand: 'HUMMEL',
      category: 'breakfast',
      price: 8.99,
      img: '/images/item-7.png',
      desc: `%100 Pamuk, Flamlı Mavi, Casual Model, Slim Fit, Düğmeli Yaka, Uzun Kol, Cepsiz, 2022 Yaz, Altınyıldız Classics Slim Fit Dar Kesim Düğmeli Yaka %100 Pamuk Flamlı Gömlek`,
      sum: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      id: 8,
      title: 'american classic',
      category: 'Gömlek',
      brand: 'MAVI',
      price: 12.99,
      img: '/images/item-8.png',
      desc: ` %100 Pamuk, Flamlı Mavi, Casual Model, Slim Fit, Düğmeli Yaka, Uzun Kol, Cepsiz, 2022 Yaz, Altınyıldız Classics Slim Fit Dar Kesim Düğmeli Yaka %100 Pamuk Flamlı Gömlek`,
      sum: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius',
    },
    {
      id: 9,
      title: 'quarantine buddy',
      brand: 'ADIDAS',
      category: 'shakes',
      price: 16.99,
      img: '/images/item-9.png',
      desc: ` %100 Pamuk, Flamlı Mavi, Casual Model, Slim Fit, Düğmeli Yaka, Uzun Kol, Cepsiz, 2022 Yaz, Altınyıldız Classics Slim Fit Dar Kesim Düğmeli Yaka %100 Pamuk Flamlı Gömlek`,
      sum: 'Lorem ipsum dolor sit amet',
    },
    {
        id: 10,
        title: 'quarantine buddy',
        brand: 'PIERRE CARDIN',
        category: 'shakes',
        price: 16.99,
        img: '/images/item-12.png',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        sum: `%100 Pamuk Erkek Kapşonlu SweatShirt`,
    },
    {
        id: 11,
        title: 'quarantine buddy',
        brand: 'CALVIN KLEIN',
        category: 'shakes',
        price: 16.99,
        img: '/images/item-10.png',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        sum: `%100 Pamuk Fileli Basketbol Şortu`
    },
    {
        id: 12,
        title: 'Polo T-Shirt',
        brand: 'COLUMBIA',
        category: 'Polo T-Shirt',
        price: 16.99,
        img: '/images/item-11.png',
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        sum:'%100 Pamuk Koyu Vizon Polo Yaka Düz T-shirt'
    },
  ];
  
  export default clothes;