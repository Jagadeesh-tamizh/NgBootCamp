import { Component } from '@angular/core';
import { CounterService } from '../../../core/counter.service';

@Component({
  selector: 'app-box-b',
  standalone: true,
  templateUrl: './box-b.component.html',
  styleUrl: './box-b.component.less'
})
export class BoxBComponent {
  constructor(public counter: CounterService) {}
}
