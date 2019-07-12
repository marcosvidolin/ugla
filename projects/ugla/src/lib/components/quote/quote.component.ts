import { Component, OnInit, Input } from '@angular/core';
import { UglaService } from '../../ugla.service';

/**
 * Quote
 *
 * @example
 * <ugl-quote
 *  [text]="'text.'"
 *  [color]="'color'">
 *  <ng-content></ng-content>
 * </ugl-quote>
 *
 */
@Component({
  selector: 'ugl-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  /**
   * Receive the text
   */
  @Input() text: string;

  /**
   * Receive the text
   */
  @Input() color: string;

  constructor(private ugla: UglaService) { }

  ngOnInit() {
    this.color = (this.color === undefined) ? `${this.ugla.color}` : this.color;
  }
}
