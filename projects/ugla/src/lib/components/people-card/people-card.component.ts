import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { People } from '../../models';
import { UglaService } from '../../ugla.service';

/**
 * People Card
 *
 * @example
 * <ugl-people-card [people]="header.people" (logoutAction)="logout()"></ugl-people-card>
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
  selector: 'ugl-people-card',
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
   * @param ugla: UglaService
   */
  constructor(private ugla: UglaService) {
    this.theme = this.ugla.theme;
  }

  /**
   * Execute the function logout
   */
  logout() {
    this.logoutAction.emit(true);
  }
}
