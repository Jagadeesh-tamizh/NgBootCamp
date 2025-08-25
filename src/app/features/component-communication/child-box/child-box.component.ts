import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child-box.component.html',
  styleUrls: ['./child-box.component.less']
})
export class ChildBoxComponent {
  messageToParent = ''
  @Input() childInput = '';
  @Output() childOutput = new EventEmitter<string>();

  SendMessageToParent() {
    this.childOutput.emit(this.messageToParent);
  }
}
