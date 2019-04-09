import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Select } from '../../models';
import { NgClass } from '@angular/common';
import { UglaService } from '../../ugla.service';
import { Form } from '../../enum';
import { validateConfig } from '@angular/router/src/config';
import { directiveDef } from '@angular/core/src/view';
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
 *  new Options('Portuguese PT-BR', 'pt_br', true),
 *  new Options('English EN', 'en')
 * ]);
 */
@Component({
  selector: 'ugl-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

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
   * Original message
   */
  public originalMessage: string;

  /**
   * Style for select
   */
  public selectStyle: {};

  /**
   * Receives the component's name
   * @param ugla: UglaService
   */
  constructor(private ugla: UglaService) { }

  /**
   * Current values
   */
  public current = {
    description: ''
  };

  /**
   * Set initials configurations
   */
  ngOnInit() {
    const checkedItem = this.select.options.findIndex((item) => item.checked);

    this.current = (checkedItem > -1) ? this.select.options[checkedItem] : this.select.options[0];
    this.stylized = (this.stylized !== undefined) ? this.stylized : false;
    this.disabled = (this.disabled !== undefined) ? this.disabled : false;
    this.messageRequired = (this.messageRequired !== undefined) ? this.messageRequired : Form.REQUIRED;

    this.selectStyle = {
      'z-index': this.zindex
    };
  }

  open(event) {
    if (event.keyCode === 13) {
      this.checkbox.nativeElement.checked = !this.checkbox.nativeElement.checked;
    }
  }

  /**
   * Call selected event
   * @param value
   */
  selectedItem(value, event) {
    if (event.keyCode === 13 || event.keyCode === undefined) {
      this.current = this.select.options[ value ];
      this.checkbox.nativeElement.checked = false;
      this.checkbox.nativeElement.nextSibling.focus();
      this.validate(this.checkbox.nativeElement, value);
      this.selected.emit(this.current);
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

  setSelect(value) {
    setTimeout(() => {
      this.select.options.forEach(((item) => {
        item.checked = false;
        if (item.value === String(value)) {
          item.checked = true;
          this.current = item;
        }
      }).bind(this));
    });
  }
}
