import { Menu } from './../../models/menu';
import { People } from './../../models/people';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ugl-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  @Input() people: People;
  @Input() menu: Menu;
  @Input() textLogout = 'Logout';
  @Input() iconLogout = 'power_settings_new';
  @Input() iconLinks = 'keyboard_arrow_right';
  @Input() altPhoto = 'foto';

  @Output() logoutAction = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  logout() {
    this.logoutAction.emit();
  }

}
