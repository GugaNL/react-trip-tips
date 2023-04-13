const { Configuration, OpenAIApi } = require("openai");

export const subHeaderItems = [
  { text: "Praia", icon: "bi bi-shop" },
  { text: "Fazendas", icon: "bi bi-image-alt" },
  { text: "Interior", icon: "bi bi-house" },
  { text: "Pousadas", icon: "bi bi-houses" },
  { text: "Ilhas", icon: "bi bi-sunset" },
  { text: "Barcos", icon: "bi bi-life-preserver" },
  { text: "Castelos", icon: "bi bi-hospital" },
  { text: "Flats", icon: "bi bi-house-door" },
  { text: "Vistas incríveis", icon: "bi bi-heart-pulse-fill" },
  { text: "Em alta", icon: "bi bi-fire" },
];

export const placesItems = [
  {
    id: 1,
    title: "Caruaru, PE",
    rating: "4.5",
    dist: "10km",
    stay: "22-27 de mai",
    price: "512,00",
    arrayImages: [
      {
        src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        alt: "first slide",
      },
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        alt: "second slide",
      },
      {
        src: "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        alt: "thirth slide",
      },
    ],
  },
  {
    id: 2,
    title: "Fortaleza, CE",
    rating: "4.8",
    dist: "200km",
    stay: "10-15 de ago",
    price: "426,00",
    arrayImages: [
      {
        src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        alt: "first slide",
      },
      {
        src: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "second slide",
      },
      {
        src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "thirth slide",
      },
    ],
  },
  {
    id: 3,
    title: "Porto Seguro, BA",
    rating: "4.8",
    dist: "500km",
    stay: "20-25 de jun",
    price: "230,00",
    arrayImages: [
      {
        src: "https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "first slide",
      },
      {
        src: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "second slide",
      },
      {
        src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "thirth slide",
      },
    ],
  },
  {
    id: 4,
    title: "Campina Grande, PB",
    rating: "4.4",
    dist: "87km",
    stay: "15-26 de jun",
    price: "75,00",
    arrayImages: [
      {
        src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "first slide",
      },
      {
        src: "https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "second slide",
      },
      {
        src: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "thirth slide",
      },
    ],
  },
  {
    id: 5,
    title: "Santos, SP",
    rating: "4.3",
    dist: "980km",
    stay: "12-19 de jul",
    price: "468,00",
    arrayImages: [
      {
        src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "first slide",
      },
      {
        src: "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "second slide",
      },
      {
        src: "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "thirth slide",
      },
    ],
  },
  {
    id: 6,
    title: "Niteroi, RJ",
    rating: "4.3",
    dist: "1250km",
    stay: "15-20 de ago",
    price: "350,00",
    arrayImages: [
      {
        src: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "first slide",
      },
      {
        src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "second slide",
      },
      {
        src: "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "thirth slide",
      },
    ],
  },
  {
    id: 7,
    title: "Blumenal, SC",
    rating: "4.9",
    dist: "2400km",
    stay: "10-24 de jun",
    price: "270,00",
    arrayImages: [
      {
        src: "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "first slide",
      },
      {
        src: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "second slide",
      },
      {
        src: "https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "thirth slide",
      },
    ],
  },
  {
    id: 8,
    title: "Tamandaré, PE",
    rating: "4.8",
    dist: "135km",
    stay: "08-10 de jul",
    price: "189,00",
    arrayImages: [
      {
        src: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "first slide",
      },
      {
        src: "https://images.unsplash.com/photo-1578681041175-9717c16b0d66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "second slide",
      },
      {
        src: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "thirth slide",
      },
    ],
  },
  {
    id: 9,
    title: "Porto de Galinhas, PE",
    rating: "4.8",
    dist: "160km",
    stay: "15-20 de jun",
    price: "",
    arrayImages: [
      {
        src: "https://images.unsplash.com/photo-1578774204375-826dc5d996ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "first slide",
      },
      {
        src: "https://images.unsplash.com/photo-1529551739587-e242c564f727?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "second slide",
      },
      {
        src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "thirth slide",
      },
    ],
  },
  {
    id: 10,
    title: "Gravatá, PE",
    rating: "4.1",
    dist: "47km",
    stay: "01-23 de set",
    price: "600,00",
    arrayImages: [
      {
        src: "https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "first slide",
      },
      {
        src: "https://images.unsplash.com/photo-1623718649591-311775a30c43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "second slide",
      },
      {
        src: "https://images.unsplash.com/photo-1534679541758-8dc76ff8081d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "thirth slide",
      },
    ],
  },
  {
    id: 11,
    title: "Maceió, AL",
    rating: "4.2",
    dist: "99km",
    stay: "25-27 de ago",
    price: "340,00",
    arrayImages: [
      {
        src: "https://images.unsplash.com/photo-1600435335786-d74d2bb6de37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "first slide",
      },
      {
        src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "second slide",
      },
      {
        src: "https://images.unsplash.com/photo-1631049035634-c04c637651b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "thirth slide",
      },
    ],
  },
  {
    id: 12,
    title: "Aracajú, SE",
    rating: "4.2",
    dist: "170km",
    stay: "12-20 de jul",
    price: "120,00",
    arrayImages: [
      {
        src: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "first slide",
      },
      {
        src: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "second slide",
      },
      {
        src: "https://images.unsplash.com/photo-1584132869994-873f9363a562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "thirth slide",
      },
    ],
  },
  {
    id: 13,
    title: "Paulo Afonso, BA",
    rating: "3.9",
    dist: "370km",
    stay: "10-15 de out",
    price: "230,00",
    arrayImages: [
      {
        src: "https://images.unsplash.com/photo-1614957004131-9e8f2a13123c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "first slide",
      },
      {
        src: "https://images.unsplash.com/photo-1631049035326-57414e7739eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "second slide",
      },
      {
        src: "https://images.unsplash.com/photo-1541435469116-8ce8ccc4ff85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "thirth slide",
      },
    ],
  },
  {
    id: 14,
    title: "Garanhuns, PE",
    rating: "3.8",
    dist: "150km",
    stay: "10-13 de set",
    price: "330,00",
    arrayImages: [
      {
        src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "first slide",
      },
      {
        src: "https://images.unsplash.com/photo-1557127275-f8b5ba93e24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "second slide",
      },
      {
        src: "https://images.unsplash.com/photo-1596948209610-c566ee564ea2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGhvdGVsfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        alt: "thirth slide",
      },
    ],
  },
];


export const PAGE_PLACE_DETAIL = "/detail";


const configurationOpenIA = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configurationOpenIA);
