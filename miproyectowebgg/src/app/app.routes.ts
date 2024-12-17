import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/auth.guard';

export const routes: Routes = [
 
    {
      canActivateChild: [publicGuard ()],
        path: 'autenticacion',
        loadChildren: () => import('./autenticacion/features/autenticacion.routes').then(
          (mod) => mod.default),
    },
    {
      canActivateChild: [privateGuard()],
      path: 'tasks',
      loadComponent: () => import('./shared/iu/layout.component'),
      loadChildren: () => import('./task/features/task.routes').then((mod)=> mod.default)
    },
  
  
    {
      path: '**',
      redirectTo: '/tasks',
    },    
];
