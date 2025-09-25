import { NgModule } from '@angular/core';
import { SnailButtonComponent } from './button/button.component';
import { SnailTextFieldComponent } from './text-field/text-field.component';

const importsExports = [
  SnailButtonComponent,
  SnailTextFieldComponent
]

@NgModule({
  declarations: [],
  imports: [importsExports],
  exports: [importsExports]
})
export class SnailUIModule {}
