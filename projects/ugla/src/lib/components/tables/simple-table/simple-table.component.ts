import { Component, OnInit, Input } from '@angular/core';
import { Table } from '../../../models';
import { UglaService } from '../../../ugla.service';


/**
 * @example
 * <ugl-simple-table
 *  [style]="'fixed'"
 *  [table]="table">
 * </ugl-simple-table>
 */
@Component({
  selector: 'ugl-simple-table',
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
   * @param ugla: UglaService
   */
  constructor(private ugla: UglaService) {
    this.theme = this.ugla.theme;
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
