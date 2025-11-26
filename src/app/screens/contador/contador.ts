import { Component, signal } from '@angular/core';
import { Titulo } from '../../components/shared/titulo/titulo';

@Component({
  selector: 'app-contador',
  imports: [Titulo],
  templateUrl: './contador.html',
  styles: ``,
})
export class Contador {
  count = signal(0);

  incrementar() {
    this.count.update((value) => value + 1);
  }

  decrementar() {
    this.count.update((value) => value - 1);
  }

  reset() {
    this.count.set(0);
  }
}
