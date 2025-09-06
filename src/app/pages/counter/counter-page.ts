import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './counter-page.html',
  styleUrl: './counter-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPage {
  counter = 10;

  counterSignal = signal(20);

  // constructor() {
  //   setInterval(() => {
  //     // this.counter += 2;
  //     this.counterSignal.update((v) => v + 2);
  //     console.log('Tick');
  //   }, 10000);
  // }

  increaseBy(value: number) {
    this.counter += value;

    this.counterSignal.update((cualquier) => cualquier + value);
  }

  decreaseBy(value2: number) {
    this.counter -= value2;

    this.counterSignal.update((current) => current - value2);
  }

  resetCounter() {
    this.counter = 10;

    this.counterSignal.set(0);
  }
}
