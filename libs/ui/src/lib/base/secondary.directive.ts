import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[abs-secondary]',
})
export class SecondaryDirective {
  constructor(el: ElementRef) {
    (el.nativeElement as HTMLElement).classList.add('abs-secondary');
  }
}
