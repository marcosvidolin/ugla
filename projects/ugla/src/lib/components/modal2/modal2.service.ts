import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Modal2Service {
  private modalEventEmitter = new Subject();

  constructor() { }

  open() {}

  close() {}

  instance() {}
}
