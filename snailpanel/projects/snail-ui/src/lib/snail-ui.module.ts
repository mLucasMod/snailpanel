import { NgModule } from '@angular/core';
import { SnailButtonComponent } from './button/button.component';
import { SnailInputComponent } from './input/input.component';
import { SnailToastComponent } from './toast/toast.component';

const importsExports = [
  SnailButtonComponent,
  SnailInputComponent,
  SnailToastComponent
]

@NgModule({
  declarations: [],
  imports: [importsExports],
  exports: [importsExports]
})
export class SnailUIModule {}
