import { Component } from '@angular/core';

import { HeaderComponent } from './header';
import { ContainerComponent } from './container';
import { FooterComponent } from './footer';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-container></app-container>
    <app-footer></app-footer>
  `,
  styleUrls: ['app.component.css'],
  directives: [
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
  ]
})
export class AppComponent {
  title = 'app works!';
}
