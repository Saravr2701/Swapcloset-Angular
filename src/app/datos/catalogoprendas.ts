//define como debe ser una prenda, sus atributos
export interface Prenda {
  id: string;
  titulo: string;
  subtitulo: string;
  etiqueta: 'Intercambio' | 'Préstamo'; //la tuberia indica que solo puede tomar uno de los dos valores establecidos
  imagen: string;
  categorias: string[];
  descripcion: string;
  talla: string;

  //la ? establece que el campo no es obligatorio
  duracion?: string;
  color?: string;
  estado?: string;

  propietario: {
    nombre: string;
    ubicacion: string;
    iniciales: string;
    valoracion?: number; //no tiene por qué tener aun reseñas o valoraciones
    resenas?: number;
  };
}

//contiene las prendas de la app (se usará hasta que conectemos con la bd)
export const CATALOGO_PRENDAS: Prenda[] = [
  {
    id: 'pendientestous',
    titulo: 'Pendientes bañados oro',
    subtitulo: 'Tous',
    etiqueta: 'Intercambio',
    imagen: 'assets/pendientestous.png',
    categorias: ['todo', 'accesorios'],
    descripcion: 'Pendientes Tous bañados en oro de 18k, con aproximadamente 10 usos, incluye ticket de compra y caja original.',
    duracion: 'Intercambio de hasta 12 días después de la recepción del producto.',
    talla: 'Sin talla',
    color: 'Gris',
    estado: 'Como nuevo (1-10 usos)',
    propietario: {
      nombre: 'Cintia M.',
      ubicacion: 'Madrid, Madrid',
      iniciales: 'CM',
      valoracion: 3.9,
      resenas: 36
    }
  },
  {
    id: 'conjunto',
    titulo: 'Conjunto top y short',
    subtitulo: 'Mango',
    etiqueta: 'Préstamo',
    imagen: 'assets/conjunto.png',
    categorias: ['todo', 'casual'],
    descripcion: 'Conjunto comprado hace alrededor de 1 año, usado unas 10-15 veces, se entrega en su embalaje original.',
    duracion: 'Préstamos de hasta 2 semanas desde la recepción del producto.',
    talla: 'L',
    color: 'Multicolor',
    estado: 'Buen estado (10-20 usos)',
    propietario: {
      nombre: 'Lola R.',
      ubicacion: 'Alicante, Alicante',
      iniciales: 'LR',
      valoracion: 4.3,
      resenas: 12
    }
  },
  {
    id: 'hooka',
    titulo: 'Zapatos running',
    subtitulo: 'Hooka',
    etiqueta: 'Intercambio',
    imagen: 'assets/hooka.png',
    categorias: ['todo', 'deportivo'],
    descripcion: 'Zapatillas de running muy cómodas y ligeras, ideales para correr o caminar largas distancias. Compradas hace aproximadamente 8 meses y utilizadas en unas 12 ocasiones. Se entregan limpias y con su caja original.',
    duracion: 'Intercambio de hasta 10 días después de la recepción del producto.',
    talla: '39',
    color: 'Blanco',
    estado: 'Buen estado (10-20 usos)',
    propietario: {
      nombre: 'Pablo G.',
      ubicacion: 'Sevilla, Sevilla',
      iniciales: 'PG',
      valoracion: 4.7,
      resenas: 28
    }
  },
  {
    id: 'gabardinagris',
    titulo: 'Gabardina gris a cuadros',
    subtitulo: 'Stradivarius',
    etiqueta: 'Préstamo',
    imagen: 'assets/gabardinagris.png',
    categorias: ['todo', 'formal'],
    descripcion: 'Gabardina de cuadros grises perfecta para entretiempo y ocasiones especiales. Comprada hace 2 años, utilizada en pocas ocasiones y conservada cuidadosamente. No presenta manchas ni desperfectos.',
    duracion: 'Préstamo de hasta 7 días desde la recepción del producto.',
    talla: 'M',
    color: 'Gris',
    estado: 'Como nuevo (1-10 usos)',
    propietario: {
      nombre: 'María L.',
      ubicacion: 'Granada, Granada',
      iniciales: 'ML',
      valoracion: 4.9,
      resenas: 41
    }
  },
  {
    id: 'vaqueroslevis',
    titulo: 'Vaqueros skinny básicos',
    subtitulo: 'Levis',
    etiqueta: 'Intercambio',
    imagen: 'assets/vaqueroslevis.png',
    categorias: ['todo', 'casual'],
    descripcion: 'Pantalones vaqueros Levi’s de corte skinny y tiro medio. Muy versátiles para combinar con cualquier look. Comprados hace un año y medio y utilizados unas 20 veces. Se encuentran en perfecto estado de conservación.',
    duracion: 'Intercambio de hasta 14 días después de la recepción del producto.',
    talla: '40',
    color: 'Azul vaquero',
    estado: 'Buen estado (10-20 usos)',
    propietario: {
      nombre: 'Pablo G.',
      ubicacion: 'Córdoba, Córdoba',
      iniciales: 'PG',
      valoracion: 4.7,
      resenas: 28
    }
  },
  {
    id: 'packtops',
    titulo: 'Pack de 4 tops multicolor',
    subtitulo: 'Shein',
    etiqueta: 'Préstamo',
    imagen: 'assets/packtops.png',
    categorias: ['todo', 'deportivo'],
    descripcion: 'Pack de cuatro tops ajustados de diferentes colores. Ideales para hacer deporte o crear conjuntos informales. Tejido elástico y cómodo. Comprados hace unos 6 meses, todos en muy buenas condiciones.',
    duracion: 'Préstamo de hasta 10 días desde la recepción de los productos.',
    talla: 'S',
    color: 'Multicolor',
    estado: 'Buen estado (10-20 usos)',
    propietario: {
      nombre: 'Lucía P.',
      ubicacion: 'Málaga, Málaga',
      iniciales: 'LP',
      valoracion: 4.6,
      resenas: 23
    }
  },
  {
    id: 'chalecozara',
    titulo: 'Chaleco formal',
    subtitulo: 'Zara',
    etiqueta: 'Intercambio',
    imagen: 'assets/chalecozara.png',
    categorias: ['todo', 'formal'],
    descripcion: 'Chaleco elegante de Zara, ideal para combinar con pantalones de vestir o faldas. Comprado para una ocasión especial y utilizado solamente tres veces. Tiene un corte entallado y se entrega recién lavado.',
    duracion: 'Intercambio de hasta 7 días después de la recepción del producto.',
    talla: 'S',
    color: 'Beige',
    estado: 'Como nuevo (1-10 usos)',
    propietario: {
      nombre: 'Elena V.',
      ubicacion: 'Valencia, Valencia',
      iniciales: 'EV',
      valoracion: 4.8,
      resenas: 34
    }
  },
  {
    id: 'caprisrotos',
    titulo: 'Pantalones capri rotos',
    subtitulo: 'H&M',
    etiqueta: 'Intercambio',
    imagen: 'assets/caprisrotos.png',
    categorias: ['todo', 'casual'],
    descripcion: 'Pantalones capri de H&M con detalles desgastados y rotos originales del diseño. Perfectos para primavera y verano. Comprados hace aproximadamente un año y utilizados unas 15 veces. Sin desperfectos adicionales.',
    duracion: 'Intercambio de hasta 12 días después de la recepción del producto.',
    talla: '38',
    color: 'Azul claro',
    estado: 'Buen estado (10-20 usos)',
    propietario: {
      nombre: 'Nerea D.',
      ubicacion: 'Murcia, Murcia',
      iniciales: 'ND',
      valoracion: 4.4,
      resenas: 16
    }
  },
  {
    id: 'conjuntosofisticado',
    titulo: 'Conjunto sofisticado',
    subtitulo: 'Zara',
    etiqueta: 'Préstamo',
    imagen: 'assets/conjuntosofisticado.png',
    categorias: ['todo', 'formal'],
    descripcion: 'Conjunto elegante de dos piezas de Zara, ideal para cenas, reuniones y eventos especiales. Comprado hace aproximadamente 8 meses y utilizado en cuatro ocasiones. Se entrega limpio, planchado y en perfecto estado.',
    duracion: 'Préstamo de hasta 5 días desde la recepción del producto.',
    talla: 'L',
    color: 'Beige',
    estado: 'Como nuevo (1-10 usos)',
    propietario: {
      nombre: 'Claudia F.',
      ubicacion: 'Madrid, Madrid',
      iniciales: 'CF',
      valoracion: 5.0,
      resenas: 47
    }
  },
  {
    id: 'taconmaripaz',
    titulo: 'Tacones Buganvilla',
    subtitulo: 'Maripaz',
    etiqueta: 'Préstamo',
    imagen: 'assets/taconmaripaz.png',
    categorias: ['todo', 'calzado'],
    descripcion: 'Tacones de fiesta de Maripaz en un llamativo tono buganvilla. Ideales para bodas, graduaciones y celebraciones. Comprados hace un año y utilizados solamente en tres eventos. Se entregan con su caja original.',
    duracion: 'Préstamo de hasta 4 días desde la recepción del producto.',
    talla: '38',
    color: 'Buganvilla',
    estado: 'Como nuevo (1-10 usos)',
    propietario: {
      nombre: 'Rocío T.',
      ubicacion: 'Sevilla, Sevilla',
      iniciales: 'RT',
      valoracion: 4.9,
      resenas: 32
    }
  },
  {
    id: 'campus',
    titulo: 'Campus Gris',
    subtitulo: 'Adidas',
    etiqueta: 'Préstamo',
    imagen: 'assets/campus.png',
    categorias: ['todo', 'calzado'],
    descripcion: 'Zapatillas Adidas Campus de estilo urbano en color gris. Muy cómodas y fáciles de combinar con cualquier conjunto casual. Compradas hace unos 5 meses, utilizadas aproximadamente 10 veces y conservadas en muy buen estado.',
    duracion: 'Préstamo de hasta 7 días desde la recepción del producto.',
    talla: '42',
    color: 'Gris',
    estado: 'Buen estado (10-20 usos)',
    propietario: {
      nombre: 'Hugo M.',
      ubicacion: 'Cádiz, Cádiz',
      iniciales: 'HM',
      valoracion: 4.6,
      resenas: 21
    }
  },
  {
    id: 'conversebota',
    titulo: 'Converse Chunk Bota',
    subtitulo: 'Converse',
    etiqueta: 'Préstamo',
    imagen: 'assets/conversebota.png',
    categorias: ['calzado'],
    descripcion: 'Zapatillas Converse de caña alta y plataforma gruesa, perfectas para looks urbanos. Compradas hace aproximadamente un año y utilizadas unas 15 veces. La suela y la tela están en buen estado, sin roturas.',
    duracion: 'Préstamo de hasta 10 días desde la recepción del producto.',
    talla: '38',
    color: 'Negro y blanco',
    estado: 'Buen estado (10-20 usos)',
    propietario: {
      nombre: 'Sara B.',
      ubicacion: 'Barcelona, Barcelona',
      iniciales: 'SB',
      valoracion: 4.7,
      resenas: 26
    }
  },
  {
    id: 'airforce',
    titulo: 'Airforce One Blancas',
    subtitulo: 'Nike',
    etiqueta: 'Intercambio',
    imagen: 'assets/airforce.png',
    categorias: ['calzado'],
    descripcion: 'Zapatillas Nike Air Force One blancas, un modelo clásico que combina con cualquier estilo. Compradas hace unos 7 meses y utilizadas aproximadamente 12 veces. Se entregan limpias, con cordones originales y caja.',
    duracion: 'Intercambio de hasta 14 días después de la recepción del producto.',
    talla: '43',
    color: 'Blanco',
    estado: 'Buen estado (10-20 usos)',
    propietario: {
      nombre: 'Alvaro C.',
      ubicacion: 'Málaga, Málaga',
      iniciales: 'AC',
      valoracion: 4.8,
      resenas: 39
    }
  },
  {
    id: 'jordan',
    titulo: 'Jordan rojo y blanco',
    subtitulo: 'Nike',
    etiqueta: 'Intercambio',
    imagen: 'assets/jordan.png',
    categorias: ['calzado'],
    descripcion: 'Zapatillas Nike Jordan en combinación de rojo y blanco. Modelo deportivo de estilo urbano, ideal para looks casuales. Compradas hace aproximadamente un año y utilizadas unas 8 veces. Se conservan con su caja original.',
    duracion: 'Intercambio de hasta 10 días después de la recepción del producto.',
    talla: '38',
    color: 'Rojo y blanco',
    estado: 'Como nuevo (1-10 usos)',
    propietario: {
      nombre: 'Daniel R.',
      ubicacion: 'Zaragoza, Zaragoza',
      iniciales: 'DR',
      valoracion: 4.9,
      resenas: 44
    }
  }
];
