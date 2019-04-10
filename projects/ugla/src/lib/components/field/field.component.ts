import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form } from '../../enum';

/**
 * Field
 *
 * @example
 * <ugl-field
 *   [type]="'text'"
 *   [name]="'text'"
 *   [label]="'E-mail'"
 *   [message]="'Input type email'"
 *   [maxLength]="200"
 *   [value]="value"
 *   [disabled]="true"
 *   [multiple]="true"
 *   [required]="true"></ugl-field>
 */
@Component({
  selector: 'ugl-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  /**
   * Types: text, number, email, search, password, tel, url, time, datetime-local, month, week, file
   *
   * For type date, use another component: [DatepickerComponent](/components/DatepickerComponent.html)
   *
   * Default: text
   */
  @Input() type: string;

  /**
   * Input name. It's use on id too
   */
  @Input() name: string;

  /**
   * Set label
   */
  @Input() label: string;

  /**
   * Set initial value
   */
  @Input() value: string;

  /**
   * Set limit characters.
   *
   * If set, show count
   *
   * Default: 1000
   */
  @Input() maxLength: number;

  /**
   * Set min value (for type number or date)
   */
  @Input() min: string;

  /**
   * Set max value (for type number or date)
   */
  @Input() max: string;

  /**
   * Set message
   */
  @Input() message: string;

  /**
   * Is disabled?
   *
   * Default: false
   */
  @Input() disabled: boolean;

  /**
   * Is required
   *
   * Default: false
   */
  @Input() required: boolean;

  /**
   * Is multiple file
   *
   * Use only type file
   *
   * Default: false
   *
   */
  @Input() multiple: boolean;

  /**
   * Is invalid
   *
   * Default: false
   */
  @Input() invalid: boolean;

  /**
   * Message for invalid selection
   *
   * Default: Form.REQUIRED
   */
  @Input() messageRequired: string;

  /**
   * @ignore
   */
  public num: number;

  /**
   * @ignore
   */
  public infos__count: string;

  /**
   * List classes
   */
  public groupClass: string;

  /**
   * Original message
   */
  public originalMessage: string;

  /**
   * Event emitter to value changes
   */
  @Output() onChangeValue = new EventEmitter<string>();

  /**
   * @ignore
   */
  constructor() {}

  /**
   * Event keyup input
   * @param event
   */
  keyupHandler(event) {
    const val = event.currentTarget.value;
    if (this.type === 'number' && val !== '') {
      if (this.min && Number(val) < Number(this.min)) {
        event.currentTarget.value = '';
      }
      if (this.max && Number(val) > Number(this.max)) {
        event.currentTarget.value = '';
      }
    }
    this.num = event.currentTarget.value.length;
    this.infos__count = `${this.num}/${this.maxLength}`;
  }

  /**
   * Event on change input
   * @param event
   */
  changeHandler(event) {
    this.onChangeValue.emit(event.currentTarget.value);
  }

  /**
   * Event focus out
   * @param event
   */
  focusoutHandler(event) {
    const val = event.currentTarget.value;

    if (event.currentTarget.hasAttribute('required') && val === '') {
      this.message = this.messageRequired;

      event.currentTarget.classList.remove('valid');
      event.currentTarget.classList.add('invalid');
    } else {
      if (!this.invalid) {
        event.currentTarget.classList.remove('invalid');
      }
      this.message = this.originalMessage;
    }
  }

  /**
   * Set initials configurations
   */
  ngOnInit() {
    this.type = this.type === undefined ? 'text' : this.type;
    this.originalMessage = this.message;
    this.num = 0;
    this.infos__count = (this.maxLength !== undefined) ? `${this.num}/${this.maxLength}` : ' ';
    this.multiple = this.multiple === undefined ? false : this.multiple;
    this.disabled = (this.disabled !== undefined) ? this.disabled : false;
    this.value = (this.value !== undefined) ? this.value : '';
    this.invalid = (this.invalid !== undefined) ? this.invalid : false;
    this.messageRequired = (this.messageRequired !== undefined) ? this.messageRequired : Form.REQUIRED;
    this.min = (this.min !== undefined) ? this.min : '';
    this.max = (this.max !== undefined) ? this.max : '';
    this.maxLength = (this.maxLength !== undefined) ? this.maxLength : 1000;
  }
}
