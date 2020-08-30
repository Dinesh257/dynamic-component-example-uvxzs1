import { 
  Component, 
  Input, 
  OnChanges, 
  ViewChild, 
  ViewContainerRef, 
  ComponentFactoryResolver 
} from '@angular/core';
import { Color } from "./color.interface";

@Component({
  selector: 'app-factory',
  template: `
    <ng-container #dynamic></ng-container>
  `,
})
export class FactoryComponent implements OnChanges {
  @Input() model: Color; // polymorphism :)
  @ViewChild("dynamic", {read: ViewContainerRef}) component: ViewContainerRef;


  constructor(private componentFactory: ComponentFactoryResolver) { }

  ngOnChanges() {
    this.destroy();
    this.create();
  }


  private get hasModel(): boolean {
    return this.model != null;
  }

  private destroy(): void {
    this.component.clear();
  }

  private create(): void {
    if (this.hasModel) {
      const factory = this.componentFactory.resolveComponentFactory(this.model.component);
      const componentRef = this.component.createComponent(factory);
    }
  }
}