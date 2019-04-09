import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { People } from '../../models';
import { uglaService } from '../../ugla.service';

/**
 * People Card
 *
 * @example
 * <lts-people-card [people]="header.people" (logoutAction)="logout()"></lts-people-card>
 *
 * @example
 * public people = new People('PEOPLE NAME', 'LOGIN', 'IMAGE URL');
 *
 * @example
 * ngOnInit() {
 *  this.header.people = this.people;
 * }
 */
@Component({
  selector: 'lts-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.scss']
})
export class PeopleCardComponent {

  /**
   * @ignore
   */
  public theme: string;

  /**
   * Object type People
   */
  @Input('people') public people: People;

  /**
   * Function logout
   */
  @Output() logoutAction = new EventEmitter();

  /**
   * Receives the component's name
   * @param ugla: uglaService
   */
  constructor(private ugla: uglaService) {
    this.theme = this.ugla.theme;
  }

  /**
   * Execute the function logout
   */
  logout() {
    this.logoutAction.emit(true);
  }
}
