import { Component } from '@angular/core';
import { ParentBoxComponent } from "../parent-box/parent-box.component";
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-component-communication',
  standalone: true,
  imports: [ ParentBoxComponent, FormsModule],
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.less']
})
export class ComponentCommunicationComponent {}
