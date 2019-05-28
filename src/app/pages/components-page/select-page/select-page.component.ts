import { Component, OnInit } from '@angular/core';
import { Select, Options } from 'projects/ugla/src/lib/models';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.scss']
})
export class SelectPageComponent implements OnInit {

  constructor() { }

  public select;

  ngOnInit() {
    const selectItems = new Select('status-item-1', [], 'gray', 'white');
    selectItems.options.push(new Options('Teste 1', '1', false));
    selectItems.options.push(new Options('Teste 2', '2', false));
    selectItems.options.push(new Options('Teste 3', '3', true));
    selectItems.options.push(new Options('Teste 4', '4', false));
    selectItems.options.push(new Options('Teste 5', '5', false));

    this.select = selectItems;
  }

  onSelectedItem() {

  }

}
