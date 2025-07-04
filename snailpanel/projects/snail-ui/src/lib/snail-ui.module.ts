import { NgModule } from '@angular/core';
import { SnailButtonComponent } from './button/button.component';
import { SnailTextFieldComponent } from './text-field/text-field.component';
import { SnailToastComponent } from './toast/toast.component';

const importsExports = [
  SnailButtonComponent,
  SnailTextFieldComponent,
  SnailToastComponent
]

@NgModule({
  declarations: [],
  imports: [importsExports],
  exports: [importsExports]
})
export class SnailUIModule {}
