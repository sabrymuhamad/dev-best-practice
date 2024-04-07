import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'embedded', loadComponent: () => import('./pages/embedded-views/embedded-views.component').then(c => c.EmbeddedViewsComponent) }
];
// embedded