import { Component, OnInit, Input } from '@angular/core';
import { UglaService } from '../../ugla.service';

/**
 * Quote
 *
 * @example
 * <ugl-quote
 *  [text]="'text.'"
 *  [color]="'color'"
 *  [align]="'center'">
 *  <ng-content></ng-content>
 * </ugl-quote>
 *
 */
@Component({
  selector: 'ugl-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {

  @Input() text: string;

  @Input() set color(color: string) {
    this._color = color !== undefined ? `background-${color}` : 'background-aquamarine';
  }

  get color(): string {
    return this._color;
  }

  @Input() set align(align: string) {
    this._align = `align-${align}`;
    this.classes.push(this._align);
  }

  get align(): string {
    return this._align;
  }

  private _color: string;
  private _align: string;
  private classes = ['quote'];

  constructor(private ugla: UglaService) { }
}
