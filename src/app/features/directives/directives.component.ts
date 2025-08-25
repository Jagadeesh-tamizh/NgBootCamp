import { Component } from '@angular/core';
import { NgClass, CommonModule} from '@angular/common';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgClass, CommonModule, HighlightDirective],
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.less']
})
export class DirectivesComponent {
  showMessage = true;
  items = ['Angular', 'React', 'Vue', 'Svelte'];
  isActive = false;

  Toggle() {
    this.showMessage = !this.showMessage;
  }
}
