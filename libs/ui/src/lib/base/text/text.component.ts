import { Component, Input } from '@angular/core';

@Component({
  selector: 'abs-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  @Input() type = '';
  @Input() centered = false;
}
