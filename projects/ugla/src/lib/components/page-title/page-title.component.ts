import { Component, Input } from '@angular/core';
import { UglaService } from '../../ugla.service';

/**
 * Page title
 *
 * @example
 * <ugl-page-title
 *   [firstTitle]="'New'"
 *   [secondTitle]="'Form Example'">
 * </ugl-page-title>
 */
@Component({
  selector: 'ugl-page-title',
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
   * @param ugla: UglaService
   */
  constructor(private ugla: UglaService) {
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
