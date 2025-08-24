import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // available app-wide
})
export class CounterService {
  private count = 0;

  GetCount(): number {
    return this.count;
  }

  Increment(): void {
    this.count++;
  }

  Decrement(): void {
    this.count--;
  }
}
