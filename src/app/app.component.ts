import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Dynamic Component Example</h1>
    
    <component-based-factory></component-based-factory>

    <br />
    <br />

    <service-based-factory></service-based-factory>
  `,
})
export class AppComponent  { }
