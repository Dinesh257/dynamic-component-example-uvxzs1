import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example.component';
import { RedComponent } from './red.component';
import { GreenComponent } from './green.component';
import { FactoryComponent } from './factory.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ExampleComponent, 
    RedComponent, 
    GreenComponent, 
    FactoryComponent,
  ],
  entryComponents: [
    RedComponent,
    GreenComponent,
  ],
  exports: [
    ExampleComponent,
  ],
})
export class ComponentBasedModule { }