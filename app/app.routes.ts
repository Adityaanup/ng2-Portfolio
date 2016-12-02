import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApplicationComponent } from './components/application/app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/projects/project.component';
import { ProjectDetailsComponent } from './components/projects/project-details.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path:'home', component: HomeComponent },
  { path:'project', component: ProjectComponent },
  { path:'projects/:id', component: ProjectDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }