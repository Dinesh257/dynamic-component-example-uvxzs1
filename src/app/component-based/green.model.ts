import { Color } from "./color.interface";
import { GreenComponent } from "./green.component";

export class Green implements Color {
  readonly component = GreenComponent;
}