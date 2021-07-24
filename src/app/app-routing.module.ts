import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', canActivate: [NologinGuard],
  loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
   {
    path: 'recetas', canActivate: [AuthGuard],
    children:[
      {  
        path:"",
        loadChildren: () => import('./pages/recetas/recetas.module').then( m => m.RecetasPageModule,)
      },
    
    ]
  },
  {
    path: 'carne', canActivate: [AuthGuard],
    children:[
      {
        path:"",
        loadChildren: () => import('./pages/carne/carne.module').then( m => m.CarnePageModule)
      },
    ]
  },
  {
    path: 'pasta',canActivate: [AuthGuard],
    children:[
      {
        path:"",
        loadChildren: () => import('./pages/pasta/pasta.module').then( m => m.PastaPageModule)
      },
    ]
  },
  {
    path: 'pescado', canActivate: [AuthGuard],
    children:[
      {
        path:"",
        loadChildren: () => import('./pages/pescado/pescado.module').then( m => m.PescadoPageModule)
      },

    ]
  },
  {
    path: 'postre', canActivate: [AuthGuard],
    children:[
      {
        path:"",
        loadChildren: () => import('./pages/postre/postre.module').then( m => m.PostrePageModule)
      },
    ]
  },
  {
    path: 'registro', canActivate: [NologinGuard],
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'community', canActivate: [AuthGuard],
    loadChildren: () => import('./pages/community/community.module').then( m => m.CommunityPageModule)
  },
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
