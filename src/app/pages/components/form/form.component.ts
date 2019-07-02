import { Component, OnInit } from '@angular/core';
import { UglaService } from 'projects/ugla/src';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private ugla: UglaService) { }

  public color = `color-${this.ugla.color}`;

  html = `<ugl-form
      [hiddenButtonSubmit]="false"
      (cancelClick)="onCancelClick()"
      (submitClick)="onSubmitClick()"
      [cancelText]="'Cancelar'"
      [submitText]="'Enviar'">
  </ugl-form>`;

  ngOnInit() {
  }

}
