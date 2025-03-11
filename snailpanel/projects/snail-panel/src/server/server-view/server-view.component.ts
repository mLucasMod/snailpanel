import { Component } from '@angular/core';
import { SnailButtonComponent } from '@snail/ui';
import { AngularSplitModule } from 'angular-split';

@Component({
  selector: 'app-server-view',
  imports: [AngularSplitModule, SnailButtonComponent],
  templateUrl: './server-view.component.html',
  styleUrl: './server-view.component.scss'
})
export class ServerViewComponent {

}
