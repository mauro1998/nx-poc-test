import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from './base/base.module';
import { FeatureModule } from './feature/feature.module';

@NgModule({
  imports: [CommonModule, BaseModule, FeatureModule],
  exports: [BaseModule, FeatureModule],
})
export class UiModule {}
