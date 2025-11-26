import { Component } from '@angular/core';
import { Titulo } from '../../components/shared/titulo/titulo';
import { CameraComponent } from '../../components/shared/camera/camera';

@Component({
  selector: 'app-home',
  imports: [Titulo, CameraComponent],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {}
