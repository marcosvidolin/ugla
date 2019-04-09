import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { UglaService } from '../../ugla.service';

/**
 * Button
 *
 * @example
 * <ugl-button
 *    [id]="'id'"
 *    [type]="TYPE"
 *    [theme]="THEME"
 *    [style]="STYLE"
 *    [wave]="false"
 *    [title]="TITLE"
 *    [disabled]="false">TEXT</ugl-button>
 */
@Component({
  selector: 'ugl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {

  /**
   * Text to attribute id
   */
  @Input() id: string;

  /**
   * Set size: large, medium, small
   *
   * Default: ''
   */
  @Input() size: string;

  /**
   * Receives the theme's name
   */
  @Input() theme: string;

  /**
   * Set color: white, aquamarine, red, purple
   *
   * Default: aquarine
   */
  @Input() color: string;

  /**
   * Set style: fill, border, icon
   *
   * Default: fill
   */
  @Input() style: string;

  /**
   * Has wave effect?
   *
   * Default: true
   */
  @Input() wave: boolean;

  /**
   * Text to title
   *
   * Default: ''
   */
  @Input() title: string;

  /**
   * Has disabled
   *
   * Default: false
   */
  @Input() disabled: boolean;

  /**
   * Types: submit, button
   *
   * Default: button
   */
  @Input() type: string;

  /**
   * Element tabindex
   *
   * Default: 0
   */
  @Input() tabindex: number;

  /**
   * @ignore
   */
  public groupClass = '';

  /**
   * @ignore
   */
  constructor() {
  }

  /**
   * Set initials configurations
   */
  ngOnInit() {
    this.size = (this.size === undefined) ? '' : this.size;
    this.style = (this.style === undefined) ? 'fill' : this.style;
    this.color = (this.color === undefined) ? 'aquamarine' : this.color;
    this.disabled = (this.disabled === undefined) ? false : this.disabled;
    this.type = (this.type === undefined) ? 'button' : this.type;
    this.tabindex = (this.tabindex === undefined) ? 0 : this.tabindex;

    if (this.theme !== undefined && this.theme !== 'theme-white') {
      this.color = 'white';
    }

    const isIcon = this.style === 'icon' ? `btn-icon btn-${this.style}-${this.color}` : `btn btn-${this.style}-${this.color}`;

    this.groupClass = `${this.size} ${isIcon}`;
    this.groupClass = (this.wave) ? `${this.groupClass} wave` : this.groupClass;
  }

  ngOnChanges(changes: SimpleChanges) {
     if (changes['color'] !== undefined ) {
       this.color = changes['color'].currentValue;
       const isIcon = this.style === 'icon' ? `btn-icon btn-${this.style}-${this.color}` : `btn btn-${this.style}-${this.color}`;
       this.groupClass = `${this.size} ${isIcon}`;
       this.groupClass = (this.wave) ? `${this.groupClass} wave` : this.groupClass;
     }
  }
}
