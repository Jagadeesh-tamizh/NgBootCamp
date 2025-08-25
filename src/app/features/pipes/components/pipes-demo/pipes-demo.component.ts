import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { CurrencyPipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.less'],
  standalone: true,
  imports: [FormsModule, DatePipe, UpperCasePipe, CurrencyPipe, LowerCasePipe, ReversePipe, JsonPipe]
})

export class PipesDemoComponent {
  selectedDateStr: string = '';   // for binding with <input type="date">
  selectedDate: Date = new Date();
  text = 'Hello NgBootCamp';
  amount: number = 100;
  currencyCode: string = 'USD';
  jsonInput: string = '{"name": "Neethi", "role": "AccuHealer"}';

  message = '';
  builtInPipeText = '';

  UpdateDate() {
    // Convert input string (yyyy-MM-dd) to Date
    this.selectedDate = this.selectedDateStr ? new Date(this.selectedDateStr) : new Date();
  }

get parsedJson() {
  try {
    return JSON.parse(this.jsonInput);
  } catch {
    return { error: "Invalid JSON" };
  }
}
}
