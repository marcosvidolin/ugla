import { Directive, ElementRef, Input, OnInit } from '@angular/core';

/**
 * Directive for create a grid
 *
 * @example
 * // Create a grid div:
 * <div uglGrid [grid]="true" [col]="'2'" [colSm]="'3'"></div>
 * // Generated html:
 * <div class="grid col-2 col-sm-3"></div>
 *
 */
@Directive({
  selector: '[uglGrid]'
})
export class GridDirective implements OnInit  {

  /**
   * Is a grid element?
   *
   * Default: false
   *
   * Generated a class .grid on element
   */
  @Input() grid: boolean;

  /**
   * Define a column length by mobile
   *
   * Value: from 1 to 12
   *
   * Default: 1
   *
   * Include a class .col-sm-x
   */
  @Input() colSm: number;

  /**
   * Define a gap size
   *
   * Value: from 1 to 12
   *
   * Default: 1
   *
   * Include a class .gap-x
   */
  @Input() gap: number;

  /**
   * Define a gap size by mobile
   *
   * Value: from 1 to 12
   *
   * Default: 1
   *
   * Include a class .gap-sm-x
   */
  @Input() gapSm: number;

  /**
   * Define a span size
   *
   * Value: from 1 to 12
   *
   * Default: 1
   *
   * Include a class .span-x
   */
  @Input() span: number;

  /**
   * Define a span-sm size
   *
   * Value: from 1 to 12
   *
   * Default: 1
   *
   * Include a class .span-sm-x
   */
  @Input() spanSm: number;

  /**
   * Define a column length
   *
   * Value: from 1 to 12
   *
   * Default: 1
   *
   * Include a class .col-x
   */
  @Input() set col(col: number) {
    this._col = col;
    this.el.nativeElement.classList.value += ` col-${this.col}`;
  }

  /**
   * Get column length value
   */
  get col(): number {
    return this._col;
  }

  /**
   * Internal attribute to column length value
   */
  private _col: number;

  /**
   * ElementRef to get a element html
   */
  constructor(private el: ElementRef) {}

  /**
   * Set initials configurations
   */
  ngOnInit() {
    if (this.grid) {
      this.el.nativeElement.classList.value += ' grid';
    }

    if (this.colSm) {
      this.el.nativeElement.classList.value += ` col-sm-${this.colSm}`;
    }

    if (this.gap) {
      this.el.nativeElement.classList.value += ` gap-${this.gap}`;
    }

    if (this.gapSm) {
      this.el.nativeElement.classList.value += ` gap-sm-${this.gapSm}`;
    }

    if (this.span) {
      this.el.nativeElement.classList.value += ` span-${this.span}`;
    }

    if (this.spanSm) {
      this.el.nativeElement.classList.value += ` span-sm-${this.spanSm}`;
    }
  }
}
