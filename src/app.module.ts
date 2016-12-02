import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ApplicationComponent }   from './components/application/application';

@NgModule({
    imports: [BrowserModule],
    exports: [],
    declarations: [ApplicationComponent],
    providers: [],
    bootstrap: [ApplicationComponent]
})
export class ApplicationModule { }
