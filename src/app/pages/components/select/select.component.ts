import { Component, OnInit } from '@angular/core';
import { Select, Options } from 'projects/ugla/src';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor() { }

  html = `<ugl-select
      [select]="select"
      [stylized]="false"
      [zindex]="1"
      [dataTitle]="'Select an option'"
      [direction]="'bottom'"
      (selected)="onSelectedItem($event)">
  </ugl-select>`;

  public select;

  ngOnInit() {
    const selectItems = new Select('status-item-1', [], 'gray', 'white');
    selectItems.options.push(new Options('Select an option', '-1', true));
    selectItems.options.push(new Options('Teste 1', '1', false));
    selectItems.options.push(new Options('Teste 2', '2', false));
    selectItems.options.push(new Options('Teste 3', '3', false));
    selectItems.options.push(new Options('Teste 4', '4', false));
    selectItems.options.push(new Options('Teste 5', '5', false));

    this.select = selectItems;
  }

  onSelectedItem() {

  }

}
