import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';
import { UglaService } from '../../ugla.service';
import { Form } from '../../enum';

/**
 * Banner component
 *
 * This component generates a banner that is shown on top of all elements
 *
 * @example
 * <ugl-banner [title]="'Title'" [message]="'Description'" [color]="'yellow'"></ugl-banner>
 */
@Component({
  selector: 'ugl-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements AfterViewInit {

  /**
   * @ignore
   */
  constructor(private ugla: UglaService, private element: ElementRef) {
    this.color = !!this.color ? this.color : this.ugla.color;
  }

  /**
   * Receives the banner's title
   */
  @Input() title: string;

  /**
   * Receives the banner's message
   */
  @Input() message: string;

  /**
   * Receives the banner's color.
   * Default is theme color
   */
  @Input() color: string;

  /**
   * Receives the close button title.
   * Default: Close
   */
  @Input() closeButtonTitle = Form.CLOSE_BUTTON_LABEL;

  /**
   * Indicates if banner is open.
   * Default: true
   */
  @Input() open = true;

  /**
   * Emitter for close event
   */
  @Output() close: EventEmitter<any> = new EventEmitter();

  /**
   * Executed after component is initialized. Focus on banner's title.
   */
  ngAfterViewInit() {
    (this.element.nativeElement as HTMLDivElement).querySelector<HTMLBodyElement>('#title').focus();
  }

  /**
   * Get banner classes
   */
  getClasses() {
    return `${this.color} ${this.open ? '' : 'closed'}`;
  }

  /**
   * Opens banner programatically
   */
  openBanner() {
    this.open = true;
  }

  /**
   * Close banner on close button click, and emits the close event
   */
  closeBanner() {
    this.open = false;
    this.close.emit();
  }

}
