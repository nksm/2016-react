import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-container',
  template: `
    <main class="Container">
      <div class="ItemListArea Container__flex">
        <h2>商品一覧 / 品数: 5</h2>
      </div>

      <div class="CartArea">
        <h4>カート</h4>
        <div class="Total">
          計2点
          <span class="Total__price">1600円</span>
        </div>
      </div>
  `,
  styleUrls: ['container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
