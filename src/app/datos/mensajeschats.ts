//Interfaz para cada mensaje (el contenido y si es mío o no para darle un estilo css u otro)
export interface MensajeChat {
  texto: string;
  mio: boolean;
}

//Interfaz para estblecer los campos de los chats
//mensajes es una lista porque en un chat hay varios mensajes
export interface Chat {
  id: number;
  prenda: string;
  nombre: string;
  prendaSolicitada: string;
  imagen: string;
  sinLeer: boolean;
  mensajes: MensajeChat[];
}

//Creamos una variable CHATS con export para poder acceder a ella desde otros archivos
// y con const para que no pueda editarse
export const CHATS: Chat[] = [
  {
    id: 1,
    prenda: './assets/aprobado.jpg',
    nombre: 'Jose Ignacio N.',
    prendaSolicitada: 'Aprobado de examen',
    imagen: './assets/joseignacio.jpg',
    sinLeer: true,
    mensajes: [
      { texto: 'Hola, ¿puedes aprobarme?', mio: true },
      { texto: 'Bizum de 1000€ o no apruebas la asignatura', mio: false }
    ]
  },
  {
    id: 2,
    prenda: './assets/betis1.png',
    nombre: 'Manuel R.',
    prendaSolicitada: 'Camiseta betis',
    imagen: './assets/manuel.jpg',
    sinLeer: false,
    mensajes: [
      { texto: 'Holaa, tienes la camiseta disponible para el para del viernes', mio: true },
      { texto: 'Buenas, la tengo disponible a partir del martes', mio: false },
      { texto: 'Vale pues el Miercoles hablamos', mio: true },
      { texto: 'Okey', mio: false },
      { texto: 'Hola, ¿quedamos esta tarde?', mio: true },
      { texto: 'Claro, ¿a qué hora?', mio: false },
      { texto: 'A las 5', mio: true },
      { texto: 'Okey, a las 5 estoy allí', mio: false }
    ]
  },
  {
    id: 3,
    prenda: './assets/chaquetaoversize.png',
    nombre: 'Sofia L.',
    prendaSolicitada: 'Chaqueta Oversize',
    imagen: './assets/sofia.jpg',
    sinLeer: false,
    mensajes: [
      { texto: 'Hola, ¿sigue disponible la prenda?', mio: true },
      { texto: 'Sí, todavía la tengo', mio: false },
      { texto: 'Vale, te viene bien quedar mañana a las 19:00', mio: true },
      { texto: 'Perfecto', mio: false },
      { texto: 'Vale pues allí nos vemos', mio: true },
      { texto: 'Buenas, ya te he enviado la chaqueta devuelta, en 2 días te llega', mio: true },
      { texto: 'Muchas gracias por el trato', mio: true },
      { texto: 'De nada, encantada!', mio: false }
    ]
  }
];
