import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Form} from '../../enum';
import * as datepicker_ from 'js-datepicker';

/**
 * @ignore
 */
const datepicker = datepicker_;

/**
 * Datepicker
 *
 * @example
 * <ugl-datepicker
 *   [name]="'date'"
 *   [label]="'Date'"
 *   [message]="'Select one date'"
 *   [options]="Documentation -> https://github.com/qodesmith/datepicker"
 *   [required]="true"
 *   [disabled]="true"
 *   [invalid]="false"
 *   (onSelectValue)="onDateChange($event)"></ugl-datepicker>
 *
 ```typescript
 options: object;
 this.options = {
      minDate: new Date(2019, 1, 3), //hide dates before
      maxDate: new Date(2019, 12, 3), //hide dates after
      position: 'tr' //position of calendar | tr = top right
    };
 ```
 */
@Component({
  selector: 'ugl-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit, AfterViewInit {

  /**
   * Set name
   */
  @Input() name: string;

  /**
   * Set label
   */
  @Input() label: string;

  /**
   * Set initial value
   */
  @Input()
  set value(value: any) {
    if (value) {
      this._value = new Date(value);
    }
  }

  get value() {
    if (this.picker) {
      this.picker.dateSelected = this._value;
    }
    return null;
  }

  /**
   * Set message
   */
  @Input() message: string;

  /**
   * Set a options
   *
   * [See more](https://github.com/qodesmith/datepicker)
   */
  @Input() options: any;

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
   * Is invalid
   *
   * Default: false
   */
  @Input() invalid: boolean;

  /**
   * Message for invalid selection
   *
   * Default: Form.INVALID_SELECTION
   */
  @Input() messageInvalidSelection: string;

  /**
   * Message for invalid selection
   *
   * Default: Form.REQUIRED
   */
  @Input() messageRequired: string;

  /**
   * Language for date formatting
   *
   * Default: en
   */
  @Input() language: string;

  /**
   * Allow set field readonly
   * Use as needed to assure a disabled look and feel, but still readable by accessibility's screen readers.
   * Default:  false
   */
  @Input() readonly: boolean;


  @Output() onSelectValue = new EventEmitter<Date>();

  /**
   * List classes
   */
  public groupClass: string;

  /**
   * Save the origin message
   */
  public originalMessage: string;

  /**
   * Indicates if the format of the date is invalid
   *
   * Default is false
   */
  public invalidFormat: boolean;

  /**
   * @ignore
   */
  picker: any;

  id: string;

  _value: Date;

  /**
   * @ignore
   */
  constructor() {
  }

  /**
   * Event on change inputs
   * @param event
   */
  onDateChange(picker) {
    if (picker) {
      try {
        const format = this.language === 'en' ? '$1/$2/$3' : '$2/$1/$3';
        picker.setDate(new Date(picker.el.value.replace(/(\d{2})[-/](\d{2})[-/](\d+)/, format)), true);
        this.invalid = false;
        this.message = this.originalMessage;
      } catch (e) {
        this.invalid = true;
        this.message = this.messageInvalidSelection;
      } finally {
        this.invalidFormat = this.invalid;
        this.onSelectValue.emit(picker.dateSelected);
      }
    }
  }

  /**
   * Set initials configurations
   */
  ngOnInit() {
    this.id = 'datepicker-' + this.name;
    this.originalMessage = this.message;
    this.value = this.value ? this.value : '';
    this.invalid = (this.invalid !== undefined) ? this.invalid : false;
    this.disabled = (this.disabled !== undefined) ? this.disabled : false;
    this.readonly = (this.readonly !== undefined) ? this.readonly : false;
    this.messageInvalidSelection = (this.messageInvalidSelection !== undefined) ? this.messageInvalidSelection : Form.INVALID_SELECTION;
    this.messageRequired = (this.messageRequired !== undefined) ? this.messageRequired : Form.REQUIRED;
    this.language = (this.language !== undefined) ? this.language : 'en';
    this.invalidFormat = (this.invalidFormat !== undefined) ? this.invalidFormat : false;

    this.options.onHide = (instance) => {
      this.onFocusOut(instance);
    };

    this.options.onSelect = (instance) => {
      // force trigger event of input
      const event = new Event('change');
      instance.el.dispatchEvent(event);
    };

    if (this.disabled) {
    }
  }

  /**
   * Event focus in
   * @param instance
   */
  onFocusIn(instance) {
    const input: HTMLInputElement = instance.el;
    input.setAttribute('focused', 'true');
  }

  /**
   * Event focus out
   * @param instance
   */
  onFocusOut(instance) {
    // Both instances will be set because they are linked by `id`.
    const input: HTMLInputElement = instance.el;
    if (this.required && input.hasAttribute('focused')) {
      if (input.value === '') {
        this.invalid = true;
        this.message = this.messageRequired;
      } else if (!this.invalid) {
        this.invalid = false;
        this.message = this.originalMessage;
      }
    }
  }

  /**
   * Set a current date value.
   */
  setCurrentDate() {
    if (this._value) {
      this.picker.setDate(this._value, true);
      const event = new Event('change');
      const input: HTMLInputElement = this.picker.el;
      input.dispatchEvent(event);
    } else {
      this.picker.setDate(null, false);
    }
  }

  /**
   * Execute on after view
   */
  ngAfterViewInit() {
    this.picker = datepicker('#datepicker-' + this.name, this.options);

    this.setCurrentDate();
  }

  /**
   * Set a date
   * @param date
   */
  setDate(date: Date) {
    this.picker.setDate(date);

    const event = new Event('change');
    const input: HTMLInputElement = this.picker.el;
    input.dispatchEvent(event);
  }
}
