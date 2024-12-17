
import { Routes } from '@angular/router';

export default [
    {
        path: '',
        loadComponent: () => 
            import('./task-list/task-list.component').then((mod)=> mod.default),
    },
    {
        path: 'profile',
        loadComponent: () => 
            import('./profile/profile.component').then((mod) => mod.default),
    },
] as Routes;
