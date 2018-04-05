import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from  './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateProjectComponent } from './create-project/create-project.component';

const appRoutes: Routes = [
  {
    path: 'project-details/:id',
    component: ProjectDetailsComponent
  },
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'create-project',
    component: CreateProjectComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
