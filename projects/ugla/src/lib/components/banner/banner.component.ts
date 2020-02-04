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

  constructor(private ugla: UglaService, private element: ElementRef) {
    this.color = !!this.color ? this.color : this.ugla.color;
  }

  @Input() title: string;
  @Input() message: string;
  @Input() color: string;
  @Input() closeButtonTitle = Form.CLOSE_BUTTON_LABEL;
  @Input() open = true;

  @Output() close: EventEmitter<any> = new EventEmitter();

  ngAfterViewInit() {
    this.element.nativeElement.querySelector('h2').focus();
  }

  getClasses() {
    return `${this.color} ${this.open ? '' : 'closed'}`;
  }

  openBanner() {
    this.open = true;
  }

  closeBanner() {
    this.open = false;
    this.close.emit();
  }
}
