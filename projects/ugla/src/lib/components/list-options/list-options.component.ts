import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List } from '../../models';
import { UglaService } from '../../ugla.service';

/**
 * List component
 *
 * This component generates a selectable list of names getting the index of each item.
 *
 * @example
 * <ugl-list-options
 *  [names]="names"
 *  uglGrid [span]="'2'"
 *  [id]=""
 *  (onClick)="selectItem($event)">
 * </ugl-list-options>
 */
@Component({
  selector: 'ugl-list-options',
  templateUrl: './list-options.component.html',
  styleUrls: ['./list-options.component.scss']
})
export class ListOptionsComponent {

  /**
   *  Receive onClick function
   */
  @Output() onClick = new EventEmitter();

  /**
   * Receive an array of strings
   */
  @Input() names: string[];

  /**
   * Text to attribute id
   */
  @Input() id: string;

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

  selectItem(index) {
    this.onClick.emit(index);
  }

}
