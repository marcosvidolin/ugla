import { Component, OnInit} from '@angular/core';
import { Message, ToastService, NotificationCommand } from './toast.service';
import { remove } from 'lodash';

@Component({
  selector: 'ugl-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  messages: Message[] = [];

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.getEmitter().subscribe(notificationEvent => {

      if (notificationEvent.command === NotificationCommand.SET) {
        this.show(notificationEvent.notification);
      } else if (notificationEvent.command === NotificationCommand.CLOSE) {
        this.close(notificationEvent.notification.id);
      } else if (notificationEvent.command === NotificationCommand.CLEAR_ALL) {
        this.closeAll();
      }
    });
  }

  show(message: Message) {
    if (message.cleanOld) {
      this.closeAll();
    }
    const elementId = message.id || Math.random().toString(36).substring(3);
    this.messages.push(message);
    message.id = elementId;
  }

  close(i: string) {
    remove(this.messages, this.messages.find((not) => {
      not.triggerOnHidden();
      return (not.id === i);
    }));
  }

  closeAll() {
    this.messages = [];
  }
}
