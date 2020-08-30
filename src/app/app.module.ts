import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentBasedModule } from "./component-based/component-based.module";
import { ServiceBasedModule } from "./service-based/service-based.module";
import { AppComponent } from './app.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    ComponentBasedModule,
    ServiceBasedModule,
  ],
  declarations: [ 
    AppComponent,
  ],
  bootstrap: [ 
    AppComponent 
  ],
})
export class AppModule { }
