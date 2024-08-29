import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    redirectTo: 'users/settings',
    pathMatch: 'full'
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        redirectTo: 'settings',
        pathMatch: 'full'
      },
      {
        path: 'settings',
        loadComponent: () => import('./dashboard/users/settings/settings.page').then(m => m.SettingsPageComponent),
      },
      {
        path: 'control',
        loadComponent: () => import('./dashboard/users/control/control.page').then(m => m.ControlPageComponent),
      }
    ]
  },
  {
    path: 'names',
    loadComponent: () => import('./dashboard/names/names.page').then(m => m.NamesPageComponent),
  }
];