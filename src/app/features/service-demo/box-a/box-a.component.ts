import { Component } from '@angular/core';
import { CounterService } from '../../../core/counter.service';

@Component({
  selector: 'app-box-a',
  templateUrl: './box-a.component.html',
  styleUrl: './box-a.component.less',
  standalone: true
})
export class BoxAComponent {
  constructor(public counter: CounterService) {}
}
