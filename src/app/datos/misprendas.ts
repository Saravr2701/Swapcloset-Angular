export interface MiPrenda {
  id: number;
  nombre: string;
  imagen: string[];
  tipo: 'Intercambio' | 'Préstamo';
  disponible: boolean;
  talla?: string;
  categoria?: string;
  marca?: string;
  descripcion?: string;
  fechaDisponible?: string;
}

export const MIS_PRENDAS: MiPrenda[] = [
  {
    id: 1,
    talla: 'M',
    categoria: 'Chaqueta',
    marca: 'Stradivarius',
    nombre: 'Chaqueta vaquera',
    imagen: ['assets/chaquetanegra.png'],
    descripcion: '',
    tipo: 'Intercambio',
    disponible: false
  },
  {
    id: 2,
    talla: 'S',
    categoria: 'Camisetas',
    marca: 'Shein',
    nombre: 'Conjunto azul',
    imagen: ['assets/conjuntoazul.png'],
    tipo: 'Préstamo',
    disponible: true,
    descripcion: 'Conjunto azul a estrenar, comprado hace 3 meses en Shein',
    fechaDisponible: '16/10'
  },
  {
    id: 4,
    talla: 'L',
    marca: 'Bershka',
    categoria: 'Camisetas',
    nombre: 'Top de lentejuelas',
    imagen: ['assets/toplentejuelas.png'],
    tipo: 'Intercambio',
    descripcion: '',
    disponible: true
  },
  {
    id: 5,
    talla: 'S',
    marca: 'Bershka',
    categoria: 'Bolsos',
    nombre: 'Bolso marron de cuerdas',
    imagen: ['assets/bolsocuerdasmarron.png'],
    tipo: 'Intercambio',
    descripcion: '',
    disponible: false,
    fechaDisponible: '09/10'
  }
];
