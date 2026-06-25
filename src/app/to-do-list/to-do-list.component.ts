import { Component, input } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})

export class ToDoListComponent {
  value = input(0)
}
