import { Component, OnInit } from '@angular/core';
import { Options } from 'projects/ugla/src';

@Component({
  selector: 'app-dev-page',
  templateUrl: './dev-page.component.html',
  styleUrls: ['./dev-page.component.scss']
})
export class DevPageComponent implements OnInit {

  list = [
    new Options('Teste 1', '1'),
    new Options('Teste 2', '2'),
    new Options('Teste 3', '3'),
    new Options('Teste 4', '4'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onInitDatepicker() {
    return {
      startDate: new Date(),
      position: 'br'
    };
  }

  onChangeInitialDate(date: Date) {
    console.log(date);
  }

  radioChecked(item: Options) {
    console.log(item);
    console.log(`O item ${item.description} foi selecionado e seu valor é ${item.value}.`);
  }

  cardClick($event: any) {
    
  }

  lightboxAction(event: any) {
    console.log('Teste', event);
    return false;
  }

}
