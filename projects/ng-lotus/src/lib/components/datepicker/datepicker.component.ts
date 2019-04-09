import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Form } from '../../enum';
import * as datepicker_ from 'js-datepicker';

/**
 * @ignore
 */
const datepicker = datepicker_;

/**
 * Datepicker
 *
 * @example
 * <lts-datepicker
 *   [name]="'date'"
 *   [label]="'Date'"
 *   [message]="'Select one date'"
 *   [options]="Documentation -> https://github.com/qodesmith/datepicker"
 *   [required]="true"
 *   [disabled]="true"
 *   [invalid]="false"
 *   (onSelectValue)="onDateChange($event)"></lts-datepicker>
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
  selector: 'lts-datepicker',
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
  @Input() value: string;

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

  /**
   * @ignore
   */
  constructor() { }

  /**
   * Event on change inputs
   * @param event
   */
  onDateChange(picker) {
    if (picker) {
      try {
        const format = this.language === 'en' ? '$1/$2/$3' : '$2/$1/$3';
        picker.setDate(new Date(picker.el.value.replace( /(\d{2})[-/](\d{2})[-/](\d+)/, format)), true);
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
    this.invalid = (this.invalid !== undefined) ? this.invalid : false;
    this.disabled = (this.disabled !== undefined) ? this.disabled : false;
    this.value = (this.value !== undefined) ? this.value : '';
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
        input.classList.remove('valid');
        input.classList.add('invalid');
        this.message = this.messageRequired;
      } else if (!this.invalid) {
        input.classList.remove('invalid');
        this.message = this.originalMessage;
      }
    }
  }

  /**
   * Execute on after view
   */
  ngAfterViewInit() {
    this.picker = datepicker('#datepicker-' + this.name, this.options);
  }
}
