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

}
