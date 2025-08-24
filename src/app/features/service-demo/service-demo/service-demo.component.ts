import { Component } from '@angular/core';
import { BoxAComponent } from '../box-a/box-a.component';
import { BoxBComponent } from '../box-b/box-b.component';

@Component({
  selector: 'app-service-demo',
  standalone: true,
  imports: [BoxAComponent, BoxBComponent],
  templateUrl: './service-demo.component.html',
  styleUrl: './service-demo.component.less'
})
export class ServiceDemoComponent {

}
