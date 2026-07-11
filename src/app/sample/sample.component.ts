import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent {
  modelValue = model(0)

  outPutValue = output<number>()

  sampleEmitEvent() {
    this.outPutValue.emit(10)
  }

  increment() {
    this.sampleEmitEvent()
    if (this.modelValue() >= 5) {
      alert('reached top')
      return
    }
    this.modelValue.update((val) => val + 1)
  }

  decrement() {
    if (this.modelValue() <= -5) {
      alert('reached bottom')
      return
    }
    this.modelValue.update((val) => val - 1)
  }
}
