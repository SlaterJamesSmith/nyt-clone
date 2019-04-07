import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyMenuComponent } from './daily-menu/daily-menu.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DailyMenuComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
