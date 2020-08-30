import { NgModule } from '@angular/core';

import { HappyComponent } from "./happy.component";
import { SadComponent } from "./sad.component";
import { FactoryService } from './factory.service';
import { ExampleComponent } from "./example.component";

@NgModule({
  declarations: [
    ExampleComponent,
    HappyComponent,
    SadComponent,
  ],
  entryComponents: [
    HappyComponent,
    SadComponent,
  ],
  exports: [
    ExampleComponent,
  ],
  providers: [
    FactoryService,
  ],
})
export class ServiceBasedModule { }