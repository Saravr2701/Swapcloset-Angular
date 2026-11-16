//define como debe ser una prenda, sus atributos
export interface Perfiles {
  nombre: string;
  imagen: string;
  ubicacion: string;
  valoracion: number;
  resenas: number;
  estilosfavoritos: string[];
  tallas: string[];
}

//contiene los usuarios mostrados en los detalles de las prendas (se usará hasta que conectemos con la bd)
export const PERFILESUSUARIOS: Perfiles[] = [
{
  nombre: 'Hugo M.',
  imagen: 'assets/hugo.jpg',
  ubicacion: 'Cádiz, Cádiz',
  valoracion: 4.6,
  resenas: 21,
  estilosfavoritos: ['Skater', 'Deportivo', 'Casual'],
  tallas: ['Altura - 1,79', 'Zapatos - 42', 'Parte superior - M', 'Parte inferior - 42/L']
},
{
  nombre: 'Sara B.',
  imagen: 'assets/sara.jpg',
  ubicacion: 'Barcelona, Barcelona',
  valoracion: 4.7,
  resenas: 26,
  estilosfavoritos: ['Y2K', 'Streetwear', 'Calzado'],
  tallas: ['Altura - 1,62', 'Zapatos - 37/38', 'Parte superior - S', 'Parte inferior - 36/S']
},
{
  nombre: 'Alvaro C.',
  imagen: 'assets/alvaro1.jpg',
  ubicacion: 'Málaga, Málaga',
  valoracion: 4.8,
  resenas: 39,
  estilosfavoritos: ['Sneakers', 'Deportivo', 'Streetwear'],
  tallas: ['Altura - 1,85', 'Zapatos - 44', 'Parte superior - L', 'Parte inferior - 44/L']
},
{
  nombre: 'Daniel R.',
  imagen: 'assets/daniel.jpg',
  ubicacion: 'Zaragoza, Zaragoza',
  valoracion: 4.9,
  resenas: 44,
  estilosfavoritos: ['Streetwear', 'Vintage', 'Deportivo'],
  tallas: ['Altura - 1,73', 'Zapatos - 41/42', 'Parte superior - M', 'Parte inferior - 40/M']
},
{
  nombre: 'Jose Ignacio N.',
  imagen: 'assets/joseignacio.jpg',
  ubicacion: 'Valladolid, Valladolid',
  valoracion: 4.4,
  resenas: 15,
  estilosfavoritos: ['Clásico', 'Casual', 'Accesorios'],
  tallas: ['Altura - 1,82', 'Zapatos - 43', 'Parte superior - M', 'Parte inferior - 42/L']
},
{
  nombre: 'Manuel R.',
  imagen: 'assets/manuel.jpg',
  ubicacion: 'Toledo, Toledo',
  valoracion: 4.1,
  resenas: 9,
  estilosfavoritos: ['Outdoor', 'Deportivo', 'Casual'],
  tallas: ['Altura - 1,78', 'Zapatos - 42/43', 'Parte superior - L', 'Parte inferior - 42/L']
},
{
  nombre: 'Sofia L.',
  imagen: 'assets/sofia.jpg',
  ubicacion: 'Vigo, Pontevedra',
  valoracion: 4.7,
  resenas: 18,
  estilosfavoritos: ['Romántico', 'Streetwear', 'Casual'],
  tallas: ['Altura - 1,66', 'Zapatos - 38/39', 'Parte superior - S', 'Parte inferior - 38/S']
},
{
  nombre: 'Laura P.',
  imagen: 'assets/laura.jpg',
  ubicacion: 'Salamanca, Salamanca',
  valoracion: 4.9,
  resenas: 22,
  estilosfavoritos: ['Casual', 'Preppy', 'Accesorios'],
  tallas: ['Altura - 1,60', 'Zapatos - 37', 'Parte superior - M', 'Parte inferior - 38/S']
},
{
  nombre: 'Marta L.',
  imagen: 'assets/marta.jpg',
  ubicacion: 'Gijón, Asturias',
  valoracion: 4.5,
  resenas: 14,
  estilosfavoritos: ['Vintage', 'Artesanal', 'Boho'],
  tallas: ['Altura - 1,69', 'Zapatos - 39', 'Parte superior - S', 'Parte inferior - 40/M']
},
{
  nombre: 'Lorena H.',
  imagen: 'assets/lorena.jpg',
  ubicacion: 'Bilbao, Bizkaia',
  valoracion: 4.8,
  resenas: 31,
  estilosfavoritos: ['Fiesta', 'Elegante', 'Accesorios'],
  tallas: ['Altura - 1,71', 'Zapatos - 40', 'Parte superior - M', 'Parte inferior - 40/M']
},
{
  nombre: 'Álvaro G.',
  imagen: 'assets/alvaro.jpg',
  ubicacion: 'Mataró, Barcelona',
  valoracion: 4.2,
  resenas: 12,
  estilosfavoritos: ['Casual', 'Accesorios'],
  tallas: ['Altura - 1,83', 'Zapatos - 43/44', 'Parte superior - S', 'Parte inferior - 40/M']
},
{
  nombre: 'Mariana L.',
  imagen: 'assets/mariana.jpg',
  ubicacion: 'Sevilla, Sevilla',
  valoracion: 4.8,
  resenas: 24,
  estilosfavoritos: ['Accesorios', 'Casual', 'Zapatos', 'Streetwear'],
  tallas: ['Altura - 1,61', 'Zapatos - 38/39', 'Parte superior - S', 'Parte inferior - 40/M']
},

  {
    nombre: 'Cintia M.',
    imagen: 'assets/cintia.jpg',
    ubicacion: 'Madrid, Madrid',
    valoracion: 3.9,
    resenas: 36,
    estilosfavoritos: ['Casual', 'Streetwear', 'Accesorios'],
    tallas: [
      'Altura - 1,68',
      'Zapatos - 38/39',
      'Parte superior - M',
      'Parte inferior - 40/M'
    ]
  },
  {
    nombre: 'Lola R.',
    imagen: 'assets/lola.jpg',
    ubicacion: 'Alicante, Alicante',
    valoracion: 4.3,
    resenas: 12,
    estilosfavoritos: ['Boho', 'Verano', 'Conjuntos'],
    tallas: [
      'Altura - 1,64',
      'Zapatos - 37/38',
      'Parte superior - L',
      'Parte inferior - 42/L'
    ]
  },
  {
    nombre: 'Pablo G.',
    imagen: 'assets/pablo.jpg',
    ubicacion: 'Sevilla, Sevilla',
    valoracion: 4.6,
    resenas: 28,
    estilosfavoritos: ['Deportivo', 'Urbano', 'Casual'],
    tallas: [
      'Altura - 1,80',
      'Zapatos - 43',
      'Parte superior - L',
      'Parte inferior - 42/L'
    ]
  },
  {
    nombre: 'María L.',
    imagen: 'assets/maria.jpg',
    ubicacion: 'Granada, Granada',
    valoracion: 4.8,
    resenas: 34,
    estilosfavoritos: ['Elegante', 'Formal', 'Minimalista'],
    tallas: [
      'Altura - 1,70',
      'Zapatos - 39',
      'Parte superior - M',
      'Parte inferior - 38/M'
    ]
  },
  {
    nombre: 'Lucía P.',
    imagen: 'assets/lucia.jpg',
    ubicacion: 'Málaga, Málaga',
    valoracion: 4.5,
    resenas: 19,
    estilosfavoritos: ['Vintage', 'Casual', 'Streetwear'],
    tallas: [
      'Altura - 1,65',
      'Zapatos - 38',
      'Parte superior - S',
      'Parte inferior - 36/S'
    ]
  },
  {
    nombre: 'Elena V.',
    imagen: 'assets/elena.jpg',
    ubicacion: 'Valencia, Valencia',
    valoracion: 4.7,
    resenas: 23,
    estilosfavoritos: ['Romántico', 'Boho', 'Accesorios'],
    tallas: [
      'Altura - 1,72',
      'Zapatos - 40',
      'Parte superior - M',
      'Parte inferior - 40/M'
    ]
  },
  {
    nombre: 'Nerea D.',
    imagen: 'assets/nerea.jpg',
    ubicacion: 'Murcia, Murcia',
    valoracion: 4.9,
    resenas: 41,
    estilosfavoritos: ['Y2K', 'Fiesta', 'Casual'],
    tallas: [
      'Altura - 1,60',
      'Zapatos - 37',
      'Parte superior - XS',
      'Parte inferior - 34/XS'
    ]
  },
  {
    nombre: 'Claudia F.',
    imagen: 'assets/claudia.jpg',
    ubicacion: 'Madrid, Madrid',
    valoracion: 4.4,
    resenas: 17,
    estilosfavoritos: ['Formal', 'Elegante', 'Vintage'],
    tallas: [
      'Altura - 1,74',
      'Zapatos - 40/41',
      'Parte superior - L',
      'Parte inferior - 42/L'
    ]
  },
  {
    nombre: 'Rocío T.',
    imagen: 'assets/rocio.jpg',
    ubicacion: 'Sevilla, Sevilla',
    valoracion: 4.6,
    resenas: 25,
    estilosfavoritos: ['Deportivo', 'Streetwear', 'Minimalista'],
    tallas: [
      'Altura - 1,67',
      'Zapatos - 38',
      'Parte superior - M',
      'Parte inferior - 38/M'
    ]
  }
];
