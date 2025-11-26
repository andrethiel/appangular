import { Injectable, signal } from '@angular/core';
import { Todos } from '../model/Todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly _items = signal<Array<Todos>>([
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build an app', completed: true },
  ]);

  readonly items = this._items.asReadonly();

  toggleCompleted(id: number) {
    this._items.update((items) =>
      items.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  }

  remover(id: number) {
    this._items.update((items) => items.filter((item) => item.id !== id));
  }

  adicionar(title: string) {
    const newTodo: Todos = {
      id: 1 + Math.max(0, ...this._items().map((item) => item.id)),
      title,
      completed: false,
    };
    this._items.update((items) => [...items, newTodo]);
  }
}
