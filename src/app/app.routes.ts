import { Routes } from '@angular/router';
import { dashboardRoutes } from './pages/routesDashboard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layouts/dashboard-layout/dashboard-layout.component').then(mod => mod.DashboardLayoutComponent),
        children: dashboardRoutes
      },
    
  ];