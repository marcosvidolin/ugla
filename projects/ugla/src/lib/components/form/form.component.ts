import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * Form
 *
 * # Example
 *
 ```html
  <ugl-form
    [hiddenButtonSubmit]="false|true"
    (cancelClick)="Cancel EventEmitter"
    (submitClick)="Submit EventEmitter"></ugl-form>
```
 *
 * # Example page
 * Para entender melhor o uso do form veja o link:
 * https://sites.google.com/v/1v19EHrIeV4-aZAiKJUxSY9pU4NKFSXpa/p/1PGQq2HDl3ffiICY7l0JNntX6aRkykml4/publishview
 *
 * Para desabilitar o botão de submit:
 ```Typescript
 @ViewChild(FormComponent) formComponent: FormComponent;
 (...)

 this.formComponent.disableSubmitButton = true;
 ```

 *
 *
 ```html
 <section id="form" class="central">
  <ugl-page-title
    [firstTitle]="'New'"
    [secondTitle]="'Form Example'">
  </ugl-page-title>
  <ugl-form
  [hiddenButtonSubmit]="false"
  (cancelClick)="onCancelClick()"
  (submitClick)="onSubmitClick()"
  [cancelText]="'Cancelar'"
  [submitText]="'Enviar'">

  <div uglGrid [grid]="true" [col]="'2'" [colSm]="'1'" [gap]="'2'" [gapSm]="'1'" class="form-areas">
    <div class="form-area-left">
      <ugl-select
        [label]="'Language'"
        [select]="select"
        [message]="'Select your language'"
        (selected)="selectLanguage($event)">
        </ugl-select>

      <ugl-datepicker
        [name]="'dateTest'"
        [label]="'Date'"
        [message]="'Selecione uma Data'"
        [required]="true"
        [disabled]="false"
        [options]="this.onInitDatepicker()"></ugl-datepicker>

      <ugl-field
        [type]="'time'"
        [name]="'hour'"
        [label]="'Hours'"
        [message]="'Add a value'"></ugl-field>
    </div>

    <div uglGrid [grid]="true" [col]="'5'" [colSm]="'1'" class="form-area-right">
      <div uglGrid [span]="'1'" [spanSm]="'0'"></div>
      <ugl-file-upload [pondOptions]="pondOptions" uglGrid [span]="'2'" ></ugl-file-upload>
    </div>
  </div>
  </ugl-form>
</section>
 ```
 */
@Component({
  selector: 'ugl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  /**
   * @ignore
   */
  constructor() { }

  /**
   * Set class background to footer.
   */
  @Input() footerWithBackground = false;

  /**
   * Set text to cancel button
   */
  @Input() cancelText: string;

  /**
   * Set text to submit button
   */
  @Input() submitText: string;

  /**
   * Event to cancel button
   */
  @Output() cancelClick = new EventEmitter<any>();

  /**
   * Event to submit form
   */
  @Output() submitClick = new EventEmitter<any>();

  /**
   * hidden submit button
   * Default true
   */
  @Input() hiddenButtonSubmit?: boolean;

  /**
   * Disable submit button
   * Default: false
   */
  disableSubmitButton?: boolean;

  /**
   * Call cancel event.
   */
  onCancelClick() {
    this.cancelClick.emit(true);
  }

  /**
   * Call submit event
   */
  onSubmitClick(event) {
    if (this.disableSubmitButton) {
      return false;
    }
    this.submitClick.emit(event);
  }

  /**
   * Set initials configurations
   */
  ngOnInit() {
    this.cancelText = (this.cancelText === undefined) ? 'Cancel' : this.cancelText;
    this.submitText = (this.submitText === undefined) ? 'Cancel' : this.submitText;
    this.hiddenButtonSubmit = (this.hiddenButtonSubmit === undefined) ? false : this.hiddenButtonSubmit;
    this.disableSubmitButton = (this.disableSubmitButton === undefined) ? false : this.disableSubmitButton;
  }
}
