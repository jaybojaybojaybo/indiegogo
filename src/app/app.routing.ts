import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from  './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  {
    path: 'project-details/:id',
    component: ProjectDetailsComponent
  },
  {
    path: '',
    component: WelcomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
