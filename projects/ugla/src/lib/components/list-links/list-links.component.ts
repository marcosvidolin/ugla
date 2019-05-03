import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { List, Link } from '../../models';
import { UglaService } from '../../ugla.service';

/**
 * List links component
 *
 * This component generates a selectable list of links, emitting the clicked link.
 *
 * @example
 * <ugl-list-links
 *  [list]="list"
 *  [id]="'list-links'"
 *  [orientation]="'row'"
 *  (linkClicked)="linkClicked($event)">
 * </ugl-list-links>
 */
@Component({
  selector: 'ugl-list-links',
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
  @Output() linkClicked = new EventEmitter<Link>();

  /**
   * Classes of the component
   */
  public classes: string;

  /**
   * @ignore
   */
  private theme: string;

  constructor(private ugla: UglaService) {
    this.theme = ugla.theme;
  }

  ngOnInit() {
    this.classes = `${this.theme} ${this.orientation}`;
  }

  /**
   * Function called on click of the link. Set the active link and emitts the object.
   * @param item Link element
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
