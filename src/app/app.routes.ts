import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'stepper', loadComponent: () => import('./stepper/stepper.component').then(c => c.StepperComponent) }
];
