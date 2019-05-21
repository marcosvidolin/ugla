import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Options } from '../../models/options';
import { UglaService } from '../../ugla.service';


/**
 * Radio
 *
 *
 *
 * @example
 * <ugl-radio [items]="radioItems" (itemChecked)="getItemChecked($event)">
 *
 * @example
 * this.radioItems = [new Options('Check1', '1', false, '#d71f3c', 'radios'),
 * new Options('Check2', '2', true, '#656565', 'radios'),
 * new Options('Check3', '3', false, '#656565', 'radios'),
 * new Options('Check4', '4', false, '#656565', 'radios')];
 */
@Component({
  selector: 'ugl-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent {

  @Input() items: Options[];
  @Output() itemChecked = new EventEmitter<Options>();

  /**
   * Insert the theme name on html component
   */
  public theme: string;

  /**
   * Receives the component's name
   * @param ugla: UglaService
   */
  constructor(private ugla: UglaService) {
    this.theme = ugla.theme;
  }

  onCheck(item: Options) {
    this.itemChecked.emit(item);
    this.updateItems(item);
  }

  private updateItems(item: Options) {
    this.items.forEach(i => {
      if (i.value === item.value) {
        i.checked = true;
      } else {
        i.checked = false;
      }
    });
  }
}
