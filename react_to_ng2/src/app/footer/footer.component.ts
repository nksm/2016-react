import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-footer',
  template: `
    <footer class="Footer">
      <small>
        このショップは架空のものであり、商品もすべてダミーです。
      </small>
    </footer>
  `,
  styleUrls: ['footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
