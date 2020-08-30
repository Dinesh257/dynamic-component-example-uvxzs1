import { Component } from '@angular/core';
import { Color } from "./color.interface";
import { Green } from "./green.model";
import { Red } from "./red.model";

@Component({
  selector: 'component-based-factory',
  template: `
    <div>Factory Component Example</div>
    
    <div>
      <button (click)="green()">Green</button>
      <button (click)="red()">Red</button>
    </div>

    <app-factory [model]="type"></app-factory>
  `,
})
export class ExampleComponent {
  type: Color = null;

  green() {
    this.type = new Green();
  }

  red() {
    this.type = new Red();
  }
}