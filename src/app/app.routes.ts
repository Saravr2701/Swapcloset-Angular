import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // Al entrar a la app va al Login
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
        loadComponent: () => import('./paginas/chats/chats.page').then(m => m.ChatsPage)
      },
      {
        path: 'conversacion/:id',
        loadComponent: () => import('./paginas/conversacion/conversacion.page').then( m => m.ConversacionPage)
      },
      {
        path: 'anadirprendas',
        loadComponent: () => import('./paginas/anadirprendas/anadirprendas.page').then( m => m.AnadirprendasPage)
      },
      {
        path: 'barranav',
        loadComponent: () => import('./paginas/barranav/barranav.page').then(m => m.BarranavPage)
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
      {
        path: 'detalleprenda/:id',
        loadComponent: () =>
          import('./paginas/detalleprenda/detalleprenda.page')
            .then(m => m.DetalleprendaPage)
      },
      {
        path: 'solicitarprenda/:id',
        loadComponent: () => import('./paginas/solicitarprenda/solicitarprenda.page').then(m => m.SolicitarprendaPage)
      },
      {
        path: 'tarjetaseditarprendas/:id',
        loadComponent: () => import('./paginas/tarjetaseditarprendas/tarjetaseditarprendas.page').then(m => m.TarjetaseditarprendasPage)
      },
      {
        path: 'perfilusuarios/:id',
        loadComponent: () => import('./paginas/perfilusuarios/perfilusuarios.page').then( m => m.PerfilusuariosPage)
      },
    ]
  },
  {
    path: 'conversacion',
    loadComponent: () => import('./paginas/conversacion/conversacion.page').then( m => m.ConversacionPage)
  },
  {
    path: 'recordatorios',
    loadComponent: () => import('./paginas/recordatorios/recordatorios.page').then( m => m.RecordatoriosPage)
  },
  {
    path: 'pantallaexito',
    loadComponent: () => import('./paginas/pantallaexito/pantallaexito.page').then( m => m.PantallaexitoPage)
  },
  {
    path: 'rutaerronea',
    loadComponent: () => import('./paginas/rutaerronea/rutaerronea.page').then( m => m.RutaerroneaPage)
  },
  {
    path: '**',
    redirectTo: 'rutaerronea', // Al introducir una ruta erronea va a la pagina de error
    pathMatch: 'full',
  },
];
