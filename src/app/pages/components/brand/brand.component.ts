import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  constructor() { }

  html = `<ugl-brand [brandName]="'Brand name'" [brandImage]="'./assets/imgs/logo.png'"></ugl-brand>`;

  ngOnInit() {
  }

}
