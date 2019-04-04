import { Component, OnInit, Input } from '@angular/core';
import { LotusService } from '../../lotus.service';

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
   * @param lotus: LotusService
   */
  constructor(private lotus: LotusService) {
    this.theme = lotus.theme;
  }
}
