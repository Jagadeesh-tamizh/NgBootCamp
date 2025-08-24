import { Component, Input, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildBoxComponent } from '../child-box/child-box.component';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-parent-box',
  standalone: true,
  imports: [CommonModule, ChildBoxComponent,FormsModule],
  templateUrl: './parent-box.component.html',
  styleUrls: ['./parent-box.component.less']
})

export class ParentBoxComponent {
  message = '';
  childMessage = '';
  replyMessage = '';
  @Input() parentInput = '';

  SendMessageToChild() {
    this.childMessage = this.message;
  }

  HandleMessageFromChild(event: string) {
    this.replyMessage = event;
  }
}
