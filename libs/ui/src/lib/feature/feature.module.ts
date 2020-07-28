import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseModule } from '../base/base.module';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';

@NgModule({
  declarations: [SignInFormComponent],
  imports: [CommonModule, BaseModule],
  exports: [SignInFormComponent],
})
export class FeatureModule {}
