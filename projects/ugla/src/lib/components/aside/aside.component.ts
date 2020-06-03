import { Subject } from 'rxjs';
import { Menu } from './../../models/menu';
import { People } from './../../models/people';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AsideItem } from './../../models/aside-item';

@Component({
  selector: 'ugl-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  @Input() people: People;
  @Input() menu: AsideItem[];
  @Input() textLogout = 'Logout';
  @Input() iconLogout = 'power_settings_new';
  @Input() iconLinks = ['keyboard_arrow_right', 'keyboard_arrow_down', 'keyboard_arrow_up'];
  @Input() altPhoto = 'foto';

  @Output() logoutAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    const path = location.pathname;
    this.menu.forEach((item, index) => {
      if (item.submenu) {
        item.submenu.forEach(subitem => {
          if (subitem.url === path) {
            item.open = true;
          }
        });
      }
    });
  }

  logout() {
    this.logoutAction.emit();
  }

  toogleSubmenu(index: string) {
    this.menu[index].open = !this.menu[index].open;
  }

  getIcon(index: string, subindex?: string) {
    let hasSubmenu = this.menu[index].submenu !== null;

    if (subindex !== undefined) {
      hasSubmenu = this.menu[index].submenu[subindex].submenu !== null;
    }

    let open = false;

    if (!this.menu[index].hasOwnProperty('open')) {
      this.menu[index].open = false;
      open = false;
    } else {
      open = this.menu[index].open;
    }

    if (!hasSubmenu) {
      return this.iconLinks[0];
    } else if (!open) {
      return this.iconLinks[1];
    } else {
      return this.iconLinks[2];
    }
  }
}
