export interface Recordatorios {
  id: number;
  etiqueta: 'Intercambio' | 'Préstamo' | 'Devolución'; //la tuberia indica que solo puede tomar uno de los dos valores establecidos
  descripcion?: string;
  imagenIntercambio?: string;
  imagenPrestamo?: string;
  imagenDevolucion?: string;
  fechaInicio?: string;
  fechaFin?: string;
  nombre?: string;
  estado?: 'Pendiente' | 'Aceptado' | 'Rechazado' | 'Devuelta';
  recibido?: boolean;
}

export const RECORDATORIOS: Recordatorios[] = [
  {
    id: 1,
    etiqueta: "Intercambio",
    fechaInicio: "12/11",
    fechaFin: "26/11",
    estado: 'Pendiente',
    imagenIntercambio: 'assets/toplentejuelas.png',
    imagenPrestamo: 'assets/conjunto.png',
  },
  {
    id: 3,
    etiqueta: "Préstamo",
    fechaInicio: "16/10",
    fechaFin: "20/10",
    estado: 'Pendiente',
    imagenIntercambio: 'assets/bolsoestampadomarron.png',
  },
  {
    id: 4,
    etiqueta: "Devolución",
    descripcion: "Debes devolver",
    estado: 'Pendiente',
    imagenDevolucion: 'assets/bolsodorado.png',
    fechaFin: "18/11"
  },
  {
    id: 5,
    etiqueta: 'Devolución',
    descripcion: "Te deben devolver",
    estado: 'Pendiente',
    imagenDevolucion: 'assets/bolsocuerdasmarron.png',
    fechaFin: "18/11"
  }
];
