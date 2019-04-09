import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List } from '../../models';
import { LotusService } from '../../lotus.service';

/**
 * List component
 *
 * This component generates a selectable list of names getting the index of each item.
 *
 * @example
 * <lts-list-options
 *  [names]="names"
 *  ltsGrid [span]="'2'"
 *  [id]=""
 *  (onClick)="selectItem($event)">
 * </lts-list-options>
 */
@Component({
  selector: 'lts-list-options',
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
   * @param lotus: LotusService
   */
  constructor(private lotus: LotusService) {
    this.theme = lotus.theme;
  }

  selectItem(index) {
    this.onClick.emit(index);
  }

}
