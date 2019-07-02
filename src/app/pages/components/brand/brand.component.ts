import { Component, OnInit } from '@angular/core';
import { UglaService } from 'projects/ugla/src';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  constructor(private ugla: UglaService) { }

  public color = `color-${this.ugla.color}`;

  html = `<ugl-brand [brandName]="'Brand name'" [brandImage]="'./assets/imgs/logo.png'"></ugl-brand>`;

  ngOnInit() {
  }

}
