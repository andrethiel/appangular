import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-items',
  imports: [RouterLink],
  templateUrl: './menu-items.html',
  styles: ``,
})
export class MenuItems {
  readonly label = input.required<string>();
  readonly route = input.required<string>();
}
