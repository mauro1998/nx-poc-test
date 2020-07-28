import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[abs-primary]',
})
export class PrimaryDirective {
  constructor(el: ElementRef) {
    (el.nativeElement as HTMLElement).classList.add('abs-primary');
  }
}
