import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApplicationComponent } from './components/application/app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/projects/project.component';
import { ProjectDetailsComponent } from './components/projects/project-details.component';

import { AppRoutingModule } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    exports: [],
    declarations: [
        ApplicationComponent,
        HomeComponent,
        ProjectComponent,
        ProjectDetailsComponent
    ],
    providers: [],
    bootstrap: [ApplicationComponent]
})
export class ApplicationModule { }
