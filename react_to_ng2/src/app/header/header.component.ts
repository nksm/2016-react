import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  template: `
    <header class="Header">
      <h1>{{ title }}</h1>
    </header>
  `,
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Input title: string = title;
  // const とかつけてはダメ
  title: string = 'CodeGrid Store';

  constructor() {}

  ngOnInit() {
  }

}
