import { Component, Input } from '@angular/core';

/**
 * Hyper link component
 *
 * This component generates a link with icon to open in new tab
 *
 * @example
 * <ugl-hyper-link
 *  [href]="'http://www.example.com'"
 *  [text]="'Display text'"
 *  [ariaLabel]="'Accessibility text'"
 *  [ngStyle]="{'font-size': '1rem', 'font-weight': '600'}"
 *  [ngClass]="classList">
 * </ugl-hyper-link>
 */
@Component({
  selector: 'ugl-hyper-link',
  templateUrl: './hyper-link.component.html',
  styleUrls: ['./hyper-link.component.scss']
})
export class HyperLinkComponent {

  /**
   * Receive the hyper link href
   */
  @Input() href: string;

  /**
   * Receive the hyper link text
   */
  @Input() text: string;

  /**
   * Receive the hyper link aria-label.
   * If not received, it will use text variable instead.
   */
  @Input() ariaLabel: string;

  /**
   * @ignore
   */
  constructor() { }
}
