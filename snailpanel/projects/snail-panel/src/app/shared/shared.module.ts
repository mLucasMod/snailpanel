import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SnailUIModule } from '@snail/ui';
import { AngularSplitModule } from 'angular-split';

const importsExports = [
  AngularSplitModule,
  CommonModule,
  ReactiveFormsModule,
  RouterModule,
  RouterOutlet,
  SnailUIModule
];

@NgModule({
  declarations: [],
  imports: [importsExports],
  exports: [importsExports]
})
export class SharedModule {}
