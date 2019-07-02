import { Component, OnInit } from '@angular/core';
import { UglaService } from 'projects/ugla/src';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  constructor(private ugla: UglaService) { }

  public color = `color-${this.ugla.color}`;

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
