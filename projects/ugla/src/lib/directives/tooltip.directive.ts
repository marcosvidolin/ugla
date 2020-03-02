import { Directive, ElementRef, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import Tooltip from 'tooltip.js';
import { Options, TitleFunction } from 'tooltip.js';


/**
 * Tooltip
 *
 * @example
 * <div [uglTooltip] [uglTooltipTitle]="Title">Content</div>
 *
 * @example
 * <div [uglTooltip]="{placement: 'left', trigger: 'click'}" [uglTooltipTitle]="Title">Content</div>
 *
 ```typescript
  options: Object;
  // See https://popper.js.org/tooltip-documentation.html
  this.options = Options {
    placement?: string | Placement; // tooltip direction, default 'top'
    arrowSelector?: string;
    innerSelector?: string;
    container?: HTMLElement | string;
    delay?: number | Delay;
    html?: boolean;
    template?: string;
    title?: string | HTMLElement | TitleFunction;
    // available options are click, hover, focus, manual
    // required to form a space delimited string
    // e.g. 'hover focus'
    trigger?: string;
    closeOnClickOutside?: boolean;
    boundariesElement?: Boundary | HTMLElement;
    offset?: number | string;
    popperOptions?: PopperOptions;
  }
 ```
 */
@Directive({
  selector: '[uglTooltip]',
  exportAs: 'uglTooltip'
})
export class TooltipDirective implements AfterViewInit, OnChanges {

  _tooltip: Tooltip;

  /**
   * Default tooltip options
   */
  _options: Options = {
    placement: 'top',
    title: undefined,
    trigger: 'hover focus',
    closeOnClickOutside: true,
  };

  /**
   * Set the tooltip title value
   */
  @Input('uglTooltipTitle') title?: string | HTMLElement | TitleFunction;

  /**
   * Set the tooltip options value
   */
  @Input('uglTooltip')
  set options(value: {} | Options) {
    if (value) {
      this._options = Object.assign(this._options as Object, value);
    }
  }

  /**
   * @ignore
   */
  constructor(private elementRef: ElementRef) {}

  /**
   * Set configurations after view is initializes
   */
  ngAfterViewInit() {
    if (this.title) {
      this._options.title = this.title;
    }
    this._tooltip = new Tooltip((this.elementRef.nativeElement as HTMLElement), this._options);
  }

  /**
   * Set a new tooltip instance
   */
  private newTooltipInstance(value: string | HTMLElement | TitleFunction) {
    if (this._tooltip) {
      this._tooltip.updateTitleContent(value.toString());
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.title.currentValue !== changes.title.previousValue) {
      this._options.title = changes.title.currentValue;
      this.newTooltipInstance(this._options.title);
    }
  }
}
