import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-signals-demo',
  templateUrl: './signals-demo.component.html',
  styleUrls: ['./signals-demo.component.less']
})
export class SignalsDemoComponent {
  // define a signal
  count = signal(0);

  // computed signal
  isEven = computed(() => this.count() % 2 === 0);

  Increment() {
    this.count.update(value => value + 1);
  }

  Decrement() {
    this.count.update(value => value - 1);
  }
}
