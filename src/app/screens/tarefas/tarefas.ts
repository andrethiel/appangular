import { Component, inject } from '@angular/core';
import { Titulo } from '../../components/shared/titulo/titulo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-tarefas',
  imports: [Titulo],
  templateUrl: './tarefas.html',
  styles: ``,
})
export class Tarefas {
  readonly todos = inject(TodosService);
}
