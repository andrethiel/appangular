import { Routes } from '@angular/router';
import { Home } from './screens/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'contador',
    loadComponent: () => import('./screens/contador/contador').then((m) => m.Contador),
  },
  {
    path: 'tarefas',
    loadComponent: () => import('./screens/tarefas/tarefas').then((m) => m.Tarefas),
  },
  { path: '**', redirectTo: '' },
];
