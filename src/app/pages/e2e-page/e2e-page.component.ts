import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e2e-page',
  templateUrl: './e2e-page.component.html',
  styleUrls: ['./e2e-page.component.scss']
})
export class E2ePageComponent implements OnInit {
  colors = ['aquamarine', 'red', 'green', 'purple', 'yellow', 'gray'];
  totalColors = this.colors.length;

  constructor() { }

  ngOnInit() {
  }

  closeBanner() {}
}
