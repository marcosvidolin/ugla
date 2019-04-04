import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { Header } from '../../models';
import { LotusService } from '../../lotus.service';

/**
 * Header component
 *
 * # Example
 *
 ```html
 <lts-header [header]="header" (logoutAction)="logout($event)">
  <another-component></another-component>
 </lts-header>
 ```
 ```typescript
  import { Header, People, Menu, MenuItem, Select, Options } from '@ciandt_it/cit-lotus';

  public header = new Header('BRAND NAME');
  public people = new People('PEOPLE NAME', 'LOGIN\@ciandt.com', 'IMAGE URL');

  public menu = new Menu([
    new MenuItem('Home Page', '/', true),
    new MenuItem('Content', '/content', false),
    new MenuItem('Menu Hidden in mobile', '/no-mobile', true),
  ]);

  ngOnInit() {
    this.header.people = this.people;
    this.header.menu = this.menu;
    this.contentType = ContentTypes.FLUID;
  }
 ```
 */
@Component({
  selector: 'lts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * Object type Header
   */
  @Input('header') header: Header;

  /**
   * Function logout
   */
  @Output() logoutAction = new EventEmitter();

  /**
   * Identify menu is open
   */
  public open: boolean;

  /**
   * @ignore
   */
  private theme: string;

  /**
   * @ignore
   */
  private hasShadow: boolean;

  /**
   * Classes of the header component
   */
  public classes: string;

  /**
   * Receives the component's name
   * @param lotus: LotusService
   * @param changeDetector: ChangeDetectorRef
   */
  constructor(private lotus: LotusService,
              private changeDetector: ChangeDetectorRef) {
    this.theme = lotus.theme;
    this.setClasses(lotus.headerShadow);
  }

  /**
   * Set the header classes
   * @param shadow
   */
  private setClasses(shadow: boolean) {
    this.hasShadow = shadow;
    this.classes = `${this.theme} ${this.hasShadow ? '' : 'no-shadow'}`;
  }

  /**
   * Function click
   *
   * Open / Close menu
   */
  toggleMenu() {
    this.open = !(this.open);
  }

  /**
   * Function logout
   */
  logout() {
    this.logoutAction.emit(true);
  }

  /**
   * Set initial configurations
   */
  ngOnInit() {
    this.open = false;
    const current = location.pathname.charAt(0) === '/' ? location.pathname.substr(1) : location.pathname;

    if (this.header.menu) {
      for (const item of this.header.menu.items) {
        const url = item.url.charAt(0) === '/' ? item.url.substr(1) : item.url;
        item.active = url === current;
      }
    }

    this.lotus.changedHeaderShadow.subscribe((hasShadow: boolean) => {
      this.setClasses(hasShadow);
      this.changeDetector.detectChanges();
    });
  }
}
