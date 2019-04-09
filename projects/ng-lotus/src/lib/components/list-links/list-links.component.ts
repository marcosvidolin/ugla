import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List, Link } from '../../models';
import { LotusService } from '../../lotus.service';

/**
 * List links component
 *
 * This component generates a selectable list of links, emitting the clicked link.
 *
 * @example
 * <lts-list-links
 *  [list]="list"
 *  [id]="'list-links'"
 *  [orientation]="'row'"
 *  (linkClicked)="linkClicked($event)">
 * </lts-list-links>
 */
@Component({
  selector: 'lts-list-links',
  templateUrl: './list-links.component.html',
  styleUrls: ['./list-links.component.scss']
})
export class ListLinksComponent implements OnInit {

  /**
   * Receive a list of links
   */
  @Input() list: List;

  /**
   * Text to attribute id
   */
  @Input() id: string;

  /**
   * Set Orientation of the list: row, column
   *
   * Default: row
   */
  @Input() orientation = 'row';

  /**
   * Emmiter for link clicked
   */
  @Output('linkClicked') linkClicked = new EventEmitter<Link>();

  /**
   * Classes of the component
   */
  public classes: string;

  /**
   * @ignore
   */
  private theme: string;

  constructor(private lotus: LotusService) {
    this.theme = lotus.theme;
  }

  ngOnInit() {
    this.classes = `${this.theme} ${this.orientation}`;
  }

  /**
   * Function called on click of the link. Set the active link and emitts the object.
   * @param item
   */
  onClickLink(item: Link) {
    this.list.links.forEach(link => link.active = false);

    item.active = true;
    if (!item.path) {
      this.linkClicked.emit(item);
      return false;
    }
  }

}
