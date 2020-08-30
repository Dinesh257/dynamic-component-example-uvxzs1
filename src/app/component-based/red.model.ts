import { Color } from "./color.interface";
import { RedComponent } from "./red.component";

export class Red implements Color {
  readonly component = RedComponent;
}