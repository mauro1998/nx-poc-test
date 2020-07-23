import { Component, Input } from '@angular/core';

@Component({
  selector: 'abs-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type = 'button';
}
