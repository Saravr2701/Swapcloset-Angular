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
    loadComponent: () => import('./paginas/barranav/barranav.page').then((m) => m.BarranavPage),
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
        loadComponent: () => import('./paginas/barranav/barranav.page').then( m => m.BarranavPage)
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
];
