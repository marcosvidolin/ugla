import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  constructor() { }

  html = `
    <ugl-datepicker [label]="'Date'"
      [name]="'date'"
      [options]="onInitDatepicker()"
      [message]="'Select a Date'"
      [required]="true"
      (onSelectValue)="onChangeFinalDate($event)"
      #date></ugl-datepicker>
  `;

  ngOnInit() {
  }

  onInitDatepicker() {
    return {
      startDate: new Date(),
      position: 'br'
    };
  }

  onChangeFinalDate(event) {
    console.log(event);
  }

}
