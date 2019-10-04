import { Component, OnInit } from '@angular/core';
import { UglaService } from 'projects/ugla/src';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(private ugla: UglaService) { }

  color = `color-${this.ugla.color}`;
  html = `<ugl-button [id]="'button-1'"
              [type]="'button'"
              [theme]="'aquamarine'"
              [style]="'fill'"
              [wave]="false"
              [title]="'Teste'"
              [disabled]="false">TEXT</ugl-button>`;

  ngOnInit() {
  }

  showText(test) {
    alert(`This buttons is ${test}`);
  }
}
