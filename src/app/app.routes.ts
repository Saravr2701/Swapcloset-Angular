import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // Al entrar a la app, va al Login
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./paginas/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'tabs',
    loadComponent: () => import('./componentes/barranav/barranav.page').then((m) => m.BarranavPage),
    children: [
      {
        path: '',
        redirectTo: 'iniciotodo',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () => import('./paginas/login/login.page').then((m) => m.LoginPage),
      },
      {
        path: 'perfil',
        loadComponent: () => import('./paginas/perfil/perfil.page').then( m => m.PerfilPage)
      },
      {
        path: 'iniciotodo',
        loadComponent: () => import('./paginas/iniciotodo/iniciotodo.page').then( m => m.IniciotodoPage)
      },
      {
        path: 'inicioformal',
        loadComponent: () => import('./paginas/inicioformal/inicioformal.page').then( m => m.InicioformalPage)
      },
      {
        path: 'iniciocasual',
        loadComponent: () => import('./paginas/iniciocasual/iniciocasual.page').then( m => m.IniciocasualPage)
      },
      {
        path: 'inicioaccesorios',
        loadComponent: () => import('./paginas/inicioaccesorios/inicioaccesorios.page').then( m => m.InicioaccesoriosPage)
      },
      {
        path: 'chats',
        loadComponent: () => import('./paginas/chats/chats.page').then( m => m.ChatsPage)
      },
      {
        path: 'anadirprendas',
        loadComponent: () => import('./paginas/anadirprendas/anadirprendas.page').then( m => m.AnadirprendasPage)
      },
      {
        path: 'barranav',
        loadComponent: () => import('./componentes/barranav/barranav.page').then(m => m.BarranavPage)
      },
      {
        path: 'ajustes',
        loadComponent: () => import('./paginas/ajustes/ajustes.page').then( m => m.AjustesPage)
      },
      {
        path: 'recordatorios',
        loadComponent: () => import('./paginas/recordatorios/recordatorios.page').then( m => m.RecordatoriosPage)
      },
      {
        path: 'iniciocalzado',
        loadComponent: () => import('./paginas/iniciocalzado/iniciocalzado.page').then( m => m.IniciocalzadoPage)
      },
      {
        path: 'iniciodeportivo',
        loadComponent: () => import('./paginas/iniciodeportivo/iniciodeportivo.page').then( m => m.IniciodeportivoPage)
      },
      {
        path: 'publicado',
        loadComponent: () => import('./paginas/publicado/publicado.page').then( m => m.PublicadoPage)
      },
    ]
  },
  {
    path: 'tarjetasprendas',
    loadComponent: () => import('./componentes/tarjetasprendas/tarjetasprendas.page').then( m => m.TarjetasprendasPage)
  },
  {
    path: 'header',
    loadComponent: () => import('./componentes/header/header.page').then( m => m.HeaderPage)
  },
  {
    path: 'tarjetaschats',
    loadComponent: () => import('./componentes/tarjetaschats/tarjetaschats.page').then( m => m.TarjetaschatsPage)
  },
  {
    path: 'tarjetastusprendas',
    loadComponent: () => import('./componentes/tarjetastusprendas/tarjetastusprendas.page').then( m => m.TarjetastusprendasPage)
  },
  {
    path: 'tarjetastusintercambios',
    loadComponent: () => import('./componentes/tarjetastusintercambios/tarjetastusintercambios.page').then( m => m.TarjetastusintercambiosPage)
  },
  {
    path: 'tarjetastusprestamos',
    loadComponent: () => import('./componentes/tarjetastusprestamos/tarjetastusprestamos.page').then( m => m.TarjetastusprestamosPage)
  },
];
