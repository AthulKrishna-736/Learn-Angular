import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent {
  modelValue = model(0)

  increment() {
    if (this.modelValue() >= 5) {
      alert('reached top')
      return
    }
    this.modelValue.update((val) => val + 1)
  }

  decrement() {
    if (this.modelValue() <= -5){
      alert('reached bottom')
      return
    }
    this.modelValue.update((val) => val - 1)
  }
}
