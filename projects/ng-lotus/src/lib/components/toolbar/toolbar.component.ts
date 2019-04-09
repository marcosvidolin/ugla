import { Component, OnInit, Input } from '@angular/core';
import { uglaService } from '../../ugla.service';

/**
 * Toolbar
 *
 * @example
 * <lts-toolbar [title]="TITLE"></lts-toolbar>
 */
@Component({
  selector: 'lts-toolbar',
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
   * @param ugla: uglaService
   */
  constructor(private ugla: uglaService) {
    this.theme = ugla.theme;
  }
}
