import { Component, input, model, signal } from '@angular/core';
import { SampleComponent } from '../sample/sample.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [SampleComponent],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})

export class ToDoListComponent {
  value = input(0)
  value1 = input.required<string>()
  label = input('', { transform: upperCaseString })
  signalValue = signal(0)

  handleOutputEvent(data: any | null) {
    console.log('logging even data: ', data);

  }
}

function upperCaseString(val: string) {
  if (val != null || val != "") {
    return val.toUpperCase()
  }

  return ''
}