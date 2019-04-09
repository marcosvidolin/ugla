import { Component, OnInit, Input } from '@angular/core';
import { UglaService } from '../../ugla.service';

/**
 * Toolbar
 *
 * @example
 * <ugl-toolbar [title]="TITLE"></ugl-toolbar>
 */
@Component({
  selector: 'ugl-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  /**
   * Set title
   */
  @Input() title: string;

  /**
   * Receives the theme's name
   */
  public theme: string;

  /**
   * Receives the component's name
   * @param ugla: UglaService
   */
  constructor(private ugla: UglaService) {
    this.theme = ugla.theme;
  }
}
