import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page',
  imports: [Menu, RouterOutlet],
  templateUrl: './page.html',
  styles: ``,
})
export class Page {}
