import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TextComponent } from './text/text.component';
import { LinkComponent } from './link/link.component';
import { InputComponent } from './input/input.component';
import { PrimaryDirective } from './primary.directive';
import { SecondaryDirective } from './secondary.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    TextComponent,
    LinkComponent,
    InputComponent,
    PrimaryDirective,
    SecondaryDirective,
  ],
  exports: [
    ButtonComponent,
    TextComponent,
    LinkComponent,
    InputComponent,
    PrimaryDirective,
    SecondaryDirective,
  ],
})
export class BaseModule {}
