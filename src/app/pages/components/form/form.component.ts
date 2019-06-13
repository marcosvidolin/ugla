import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

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
