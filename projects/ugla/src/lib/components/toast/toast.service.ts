import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject } from 'rxjs';

const defaultTimeout = 3000;

export class Message {
  id: string;
  content: string;
  title: string;
  type: string;
  dismissed = false;
  timeout: number;
  cleanOld: boolean;
  /** triggered when toast is active */
  onShown: Observable<any>;
  /** triggered when toast is destroyed */
  onHidden: Observable<any>;

  private _afterShow = new Subject<any>();
  private _afterHidden = new Subject<any>();

  constructor(title, content, type?, timeout?, cleanOld?) {
    this.title = title;
    this.content = content;
    this.type = type || 'info';
    this.dismissed = false;
    this.timeout = timeout || defaultTimeout;
    this.cleanOld = cleanOld || true;
    this.onShown = this._afterShow.asObservable();
    this.onHidden = this._afterHidden.asObservable();
  }

  triggerOnShow(value) {
    this._afterShow.next(value);
    this._afterShow.complete();
  }

  triggerOnHidden() {
    this._afterHidden.next();
    this._afterHidden.complete();
  }
}

export enum NotificationCommand {
  CLEAR_ALL = 'clearAll',
  CLOSE = 'close',
  SET = 'set'
}

export interface ToastEvent {
  command: NotificationCommand;
  notification?: Message;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private emitter = new Subject<ToastEvent>();

  constructor(private ngZone: NgZone) {}

  /**
   * Add a {@link Message} to notifications.
   * @param title
   * @param content
   * @param type Is optional. Available options: 'success', 'error', 'warning', 'info'
   * @param timeout time in milliseconds. Default: error notifications hasn't timeout
   */
  setToastMessage(title, content, type?, timeout?) {
    return this.ngZone.run(() => {
      const message =  new Message(title, content, type || 'info', timeout);
      this.emitter.next({ command: NotificationCommand.SET, notification: message });
      return message;
    });
  }

  // closes a toast message
  dismissToastMessage(message: Message) {
    return this.ngZone.run(() => {
      this.emitter.next({ command: NotificationCommand.CLOSE, notification: message });
      return message;
    });
  }

  // closes all the toast messages
  dismissAllToastMessages() {
    this.ngZone.run(() => {
      this.emitter.next({ command: NotificationCommand.CLEAR_ALL });
    });
  }

  // shares the Subject emitter
  getEmitter() {
    return this.emitter;
  }
}
