import { Component, Input } from '@angular/core';

@Component({
  selector: 'abs-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() type = 'text';
  @Input() label = '';

  value: string;

  onChange(val: string): void {
    this.value = val;
  }
}
