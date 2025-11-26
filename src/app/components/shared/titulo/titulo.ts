import { Component, input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  imports: [],
  templateUrl: './titulo.html',
  styles: ``,
})
export class Titulo {
  readonly main = input.required<string>();
  readonly sub = input<string>();
}
