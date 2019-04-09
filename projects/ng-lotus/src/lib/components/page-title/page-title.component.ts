import { Component, Input } from '@angular/core';
import { uglaService } from '../../ugla.service';

/**
 * Page title
 *
 * @example
 * <lts-page-title
 *   [firstTitle]="'New'"
 *   [secondTitle]="'Form Example'">
 * </lts-page-title>
 */
@Component({
  selector: 'lts-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  /**
   * Receives theme's name
   */
  public theme: string;

  /**
   * Receives the component's name
   * @param ugla: uglaService
   */
  constructor(private ugla: uglaService) {
    this.theme = ugla.theme;
  }

  /**
   * Set firt title: prefix
   */
  @Input() firstTitle: string;

  /**
   * Set second title
   */
  @Input() secondTitle: string;
}
