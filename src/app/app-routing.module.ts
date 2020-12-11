import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'clientes',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    children: [
      {
        path: '',
        loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
      },
      {
        path: ':clienteId',
        loadChildren: () => import('./clientes/cliente-detalle/cliente-detalle.module').then(m => m.ClienteDetallePageModule)
      }
    ]
  },
  {
    path: 'cliente-nuevo',
    loadChildren: () => import('./clientes/cliente-add/cliente-add.module').then(m => m.ClienteAddPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
