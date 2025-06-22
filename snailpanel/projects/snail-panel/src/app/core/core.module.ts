import { NgModule } from '@angular/core';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const declaredAndExported = [
  HeaderComponent,
  NotFoundComponent,
  SidebarComponent
]

@NgModule({
  imports: [
    ButtonModule, // XXX PrimeNG should only be used in snail-ui
    SharedModule
  ],
  declarations: declaredAndExported,
  exports: declaredAndExported
})
export class CoreModule {}
