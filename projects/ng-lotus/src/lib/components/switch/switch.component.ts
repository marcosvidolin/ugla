import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Switch component
 *
 * This component genate a checkbox in switch style
 *
 * @example
 * <lts-switch
 *   [labelOn]="'On'"
 *   [labelOff]="'Off'"
 *   [name]="'switch'"
 *   [disabled]="true"
 *   [checked]="true"></lts-switch>
 */
@Component({
  selector: 'lts-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {

  /**
   * Input name. It's used on id too
   */
  @Input() name: string;

  /**
   * Input label on.
   */
  @Input() labelOn: string;

  /**
   * Input label off.
   */
  @Input() labelOff: string;

  /**
   * Is disabled?
   *
   * Default: false
   */
  @Input() disabled = false;

  /**
   * Is checked?
   *
   * Default: false
   */
  @Input() checked = false;

  /**
   * Event emitter to value changes
   */
  @Output() onChangeValue = new EventEmitter<boolean>();

  /**
   * @ignore
   */
  constructor() { }

  /**
   * Executed when value of checkbox is changed. Emits onChangeValue output.
   * @param event
   */
  onChange(event) {
    this.checked = event.target.checked;
    this.onChangeValue.emit(event.target.checked);
  }

}
