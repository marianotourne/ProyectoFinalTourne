const productos = [
  {
    id: 1,
    nombre: "gaseosa 1.5lts",
    rubro: "bebidas",
    precio: 250,
    stock: 50,
    img: "https://images.pexels.com/photos/4389678/pexels-photo-4389678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    nombre: "arroz 1kg",
    rubro: "almacen",
    precio: 240,
    stock: 50,
    img: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    nombre: "galletitas sin sal",
    rubro: "galletitas",
    precio: 120,
    stock: 40,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    nombre: "chicles",
    rubro: "golosinas",
    precio: 90,
    stock: 20,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    nombre: "arroz 500grs",
    rubro: "almacen",
    precio: 140,
    stock: 25,
    img: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 6,
    nombre: "gaseosa 2.25lts",
    rubro: "bebidas",
    precio: 400,
    stock: 10,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 7,
    nombre: "detergente",
    rubro: "limpieza",
    precio: 90,
    stock: 30,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 8,
    nombre: "galletitas con chocolate",
    rubro: "galletitas",
    precio: 75,
    stock: 70,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 9,
    nombre: "fosforos",
    rubro: "varios",
    precio: 120,
    stock: 100,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 10,
    nombre: "fideos blancos",
    rubro: "almacen",
    precio: 600,
    stock: 34,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 11,
    nombre: "lavandina 1lt",
    rubro: "limpieza",
    precio: 400,
    stock: 22,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 12,
    nombre: "aceite girasol 900ml",
    rubro: "almacen",
    precio: 540,
    stock: 67,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 13,
    nombre: "caramelos acidos",
    rubro: "golosinas",
    precio: 120,
    stock: 71,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 14,
    nombre: "confites",
    rubro: "golosinas",
    precio: 190,
    stock: 0,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 15,
    nombre: "agua mineral sin gas",
    rubro: "bebidas",
    precio: 215,
    stock: 39,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 16,
    nombre: "lavandina 500ml",
    rubro: "limpieza",
    precio: 99,
    stock: 46,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 17,
    nombre: "encendedor",
    rubro: "varios",
    precio: 345,
    stock: 11,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 18,
    nombre: "agua saborizada",
    rubro: "bebidas",
    precio: 310,
    stock: 34,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 19,
    nombre: "alfajor triple",
    rubro: "golosinas",
    precio: 100,
    stock: 77,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 20,
    nombre: "galletitas rellenas",
    rubro: "galletitas",
    precio: 140,
    stock: 0,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 21,
    nombre: "chupetin",
    rubro: "golosinas",
    precio: 230,
    stock: 129,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 22,
    nombre: "galletitas de salvado",
    rubro: "galletitas",
    precio: 250,
    stock: 38,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 23,
    nombre: "cartas españolas",
    rubro: "varios",
    precio: 100,
    stock: 78,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 24,
    nombre: "obleas",
    rubro: "galletitas",
    precio: 430,
    stock: 87,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 25,
    nombre: "velas",
    rubro: "varios",
    precio: 155,
    stock: 72,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 26,
    nombre: "turron de mani",
    rubro: "golosinas",
    precio: 85,
    stock: 27,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 27,
    nombre: "jabon blanco",
    rubro: "limpieza",
    precio: 165,
    stock: 0,
    img: "https://images.pexels.com/photos/78778/fire-lighter-the-flame-firefox-78778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
