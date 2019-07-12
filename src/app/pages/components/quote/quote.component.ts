import { Component, OnInit, Input } from '@angular/core';
import { UglaService } from 'projects/ugla/src';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  constructor(private ugla: UglaService) { }

  public color = `color-${this.ugla.color}`;

  html = `
  <ugl-quote
    [text]="'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'"
    [color]="'aquamarine'">
    <a href="/" class="color-white">Generated 3090 bytes of Lorem Ipsum</a>
  </ugl-quote>
  `;

  ngOnInit() {
  }
}
