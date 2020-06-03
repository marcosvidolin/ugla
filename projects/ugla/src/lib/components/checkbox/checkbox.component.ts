import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * Checkbox
 *
 *
 *
 * @example
 * <ugl-checkbox
 *  [disabled]="false"
 *  [mainText]="maintTextCheckbox2"
 *  [subText]="subTextCheckbox2">
 *  [name]="name"
 * </ugl-checkbox>
 *
 */
@Component({
  selector: 'ugl-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  /**
   * Set main Text
   */
  @Input() mainText: string;

  /**
   * Set main Text
   */
  @Input() name: string;

  /**
   * Set disabled
   */
  @Input() disabled: boolean;

  /**
   * Set sub Text
   */
  @Input() subText: string;

  /**
   * Set if is checked.
   *
   * Default is false
   */
  @Input() isChecked = false;

  /**
   * Set a value
   */
  @Input() value: string;

  /**
   * Event on clicked checked
   */
  @Output() checked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.disabled = (this.disabled === undefined) ? false : this.disabled;
  }

  onCheck(event: any) {
    this.isChecked = event.target.checked;
    this.checked.emit(event.target.checked);
  }
}
