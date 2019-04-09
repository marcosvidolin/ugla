import { Component, OnInit, Input } from '@angular/core';
import { Table } from '../../../models';
import { LotusService } from '../../../lotus.service';


/**
 * @example
 * <lts-simple-table
 *  [style]="'fixed'"
 *  [table]="table">
 * </lts-simple-table>
 */
@Component({
  selector: 'lts-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {

  @Input() table: Table;

  /**
   * Property to receive the style of the table
   * could be: fixed central o empty.
   */
  @Input() style: string;

  classes: string;

  public theme: string;

  /**
   * Receives the component's name
   * @param lotus: LotusService
   */
  constructor(private lotus: LotusService) {
    this.theme = this.lotus.theme;
  }

  ngOnInit() {
    this.classes = this.style ? `${this.theme} ${this.style}` : this.theme;
  }

  setClass(color: string, align: string, type: string) {
    const classColor = color ? `color-${color}` : '';
    const classAlign = align ? `align-${align}` : '';
    const classType = type ? type : '';
    return `${classColor} ${classAlign} ${classType} `;
  }
}
