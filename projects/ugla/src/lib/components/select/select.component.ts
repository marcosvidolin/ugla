import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Select, Options } from '../../models';
import { UglaService } from '../../ugla.service';
import { Form } from '../../enum';
/**
 * Select
 *
 * @example
 * <ugl-select [select]="select" (selectItemEmit)="yourFunction($event)" [ngClass]="'header'"></ugl-select>
 *
 * <ugl-select
 *   [label]="'Language'"
 *   [select]="select"
 *   [message]="'Select your language'"
 *   [dataTitle]="'Select an option'"
 *   (selected)="selectLanguage($event)">
 * </ugl-select>
 *
 * @example
 * public people = new People('PEOPLE NAME', 'LOGIN', 'IMAGE URL');
 *
 * @example
 * public select = new Select('language', [
 *  new Options('Select an option', '-1');
 *  new Options('Portuguese PT-BR', 'pt_br', true, 'green'),
 *  new Options('English EN', 'en')
 * ], 'white', 'aquamarine');
 */
@Component({
  selector: 'ugl-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, AfterViewInit {

  /**
   * Receives theme's name
   */
  public theme: string;

  /**
   * Classes list
   */
  public classGroup: string;

  /**
   * Set select object
   */
  @Input() select: Select;

  /**
   * Set label
   */
  @Input() label: string;

  /**
   * Set message
   */
  @Input() message: string;

  /**
   * Is stylized?
   *
   * Stylized is used only header
   *
   * Deafult value: false
   */
  @Input() stylized: boolean;

  /**
   * If is stylized, set a defined type
   *
   * Stylized type options: header or pagination
   *
   * Deafult value: header
   */
  @Input() stylizedType = 'header';

  /**
   * Is disabled?
   *
   * Default value: false
   */
  @Input() disabled: boolean;

  /**
   * Set data-title attribute
   *
   * Default value: none
   */
  @Input() dataTitle: string;

  /**
   * Is required
   *
   * Default: false
   */
  @Input() required: boolean;

  /**
   * Z-index of the field. Optional.
   *
   * Default: 2
   */
  @Input() zindex = 2;

  /**
   * Direction to open list
   *
   * Defaukt: bottom
   */
  @Input() direction = 'bottom';

  /**
   * Get a checkbox element under select list
   */
  @ViewChild('checkbox') checkbox: ElementRef;

  /**
   * Event on clicked option
   */
  @Output() selected = new EventEmitter();

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
   * Set a truncate length for the text.
   */
  @Input() truncateLength: number;

  /**
   * Original message
   */
  public originalMessage: string;

  /**
   * Style for select
   */
  public selectStyle: {};

  private _open: boolean;

  /**
   * Receives the component's name
   * @param ugla: UglaService
   */
  constructor(private ugla: UglaService,
              protected elementRef: ElementRef) { }

  /**
   * Current values
   */
  public current = {
    description: '',
    value: '',
    checked: false,
    color: ''
  };

  originalBackgroundColor = '';
  originalZindex;

  /**
   * Set initials configurations
   */
  ngOnInit() {
    const checkedItem = this.select.options.findIndex((item) => item.checked);

    this.current = this.truncateCurrentOption(this.select.options[0]);
    if (checkedItem > -1) {
      this.current = this.truncateCurrentOption(this.select.options[checkedItem]);
    }

    this.originalBackgroundColor = this.select.labelBackgroundColor;

    this.setLabelColor();

    this.stylized = (this.stylized !== undefined) ? this.stylized : false;
    this.disabled = (this.disabled !== undefined) ? this.disabled : false;
    this.originalMessage = this.message;
    this.messageRequired = (this.messageRequired !== undefined) ? this.messageRequired : Form.REQUIRED;
    this.originalZindex = this.zindex;
  }

  ngAfterViewInit() {
    document.addEventListener('click', ev => {
      if (!this.elementRef.nativeElement.contains(ev.target)) {
        this.close();
      }
    });
  }

  open(event) {
    if (event.key === 'ArrowDown' || event.key === 'Down' // `"Down"` is IE specific value
        || event.keyCode === 13 || event.type === 'click') {

      if (!this.open) {
        this.checkbox.nativeElement.checked = true;
        this._open = true;
        if (!this.disabled) {
          if (this.zindex === 5) {
            this.zindex = this.originalZindex;
          } else {
            this.zindex = 5;
          }
        }
      } else {
        this.close();
      }
    }
  }

  close() {
    this.checkbox.nativeElement.checked = false;
    this._open = false;
    this.zindex = this.originalZindex;
  }

  onClick() {
    if (!this.disabled) {
      if (this.zindex === 5) {
        this.zindex = this.originalZindex;
      } else {
        this.zindex = 5;
      }
    }
  }

  /**
   * Call selected event
   * @param value
   */
  selectedItem(value, event) {
    if (event.keyCode === 13 || event.keyCode === undefined) {
      this.current = this.truncateCurrentOption(this.select.options[ value ]);

      this.setLabelColor();

      this.checkbox.nativeElement.checked = false;
      this.checkbox.nativeElement.nextSibling.focus();
      this.validate(this.checkbox.nativeElement, value);
      this.selected.emit(this.current);
      this.zindex = this.originalZindex;
    }
  }

  validate(element, value) {
    if (value === 0 && this.required) {
      this.message = this.messageRequired;

      element.classList.remove('valid');
      element.classList.add('invalid');
    } else {
      if (!this.invalid) {
        element.classList.remove('invalid');
      }
      this.message = this.originalMessage;
    }
  }

  getTheme() {
    this.theme = this.ugla.theme;

    if (this.stylized) {
      this.theme = `${this.theme} ${this.stylizedType}`;
    }

    return this.theme;
  }

  setSelect(value, labelColor?, backgroundColor?) {
    setTimeout(() => {
      this.select.labelColor = (labelColor) ? labelColor : this.select.labelColor;
      this.select.labelBackgroundColor = (backgroundColor) ? backgroundColor : this.select.labelBackgroundColor;
      this.select.options.forEach(((item) => {
        item.checked = false;
        if (item.value === String(value)) {
          item.checked = true;
          this.current = item;
        }
      }).bind(this));
    });
  }

  /**
   * Return a truncated value.
   *
   * @param value
   */
  truncateValue(value: string) {
    const ending = '...';
    if (this.truncateLength && value.length > this.truncateLength) {
      return value.substring(0, this.truncateLength - ending.length) + ending;
    }
    return value;
  }

  /**
   * Generate current option.
   *
   * @param currentOption
   */
  truncateCurrentOption(currentOption: Options) {
    const currentDescription: string = this.truncateValue(currentOption.description);
    return new Options(currentDescription, currentOption.value, currentOption.checked, currentOption.color);
  }

  setClass(color: string, backgroundColor: string) {
    const classColor = color ? `color-${color}` : '';
    const classBackgroundcolor  = backgroundColor ? `background-${backgroundColor}` : '';
    const classCustom = color ? 'custom' : '';
    const classComboSelected = 'combo-selected';
    return `${classComboSelected} ${classColor} ${classBackgroundcolor} ${classCustom} `;
  }

  setLabelColor() {
    this.select.labelColor = this.current.color;
    if (this.current.value !== '-1') {
      this.select.labelBackgroundColor = 'white';
    } else {
      this.select.labelBackgroundColor = this.originalBackgroundColor;
    }
  }

  /**
   * Handles `Escape` key closing the dropdown, and arrow up/down focus to/from the dropdown list.
   */
  @HostListener('keydown', ['$event'])
  hostkeys(ev: KeyboardEvent) {
    if (ev.key === 'Escape') {
      this.close();
    } else if (this.elementRef && this.elementRef.nativeElement.contains(ev.target)) {
      ev.stopPropagation();
      this.open(ev);
    }
  }
}
