import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Notification } from './notification.model';

@Injectable({
  providedIn: 'root'
})


export class NotificationToastService {

  notifications: Notification[] = [];
  public subject = new Subject<Notification>();

  notification = new Notification("", "", "", false, 4000);
  constructor() { }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }
  sendSuccess(message: string, title: string) {

    this.notification = new Notification("", "", "", false, 4000);
    this.notification.title = title;
    this.notification.type = "success";
    this.notification.msg = message;
    this.notification.show = true;
    this.subject.next(<Notification>this.notification);
  }
  sendError(message: string, title: string) {

    this.notification = new Notification("", "", "", false, 4000);
    this.notification.title = title;
    this.notification.type = "error";
    this.notification.msg = message;
    this.notification.show = true;
    this.subject.next(<Notification>this.notification);
  }
  sendInfo(message: string, title: string) {

    this.notification = new Notification("", "", "", false, 90000);
    this.notification.title = title;
    this.notification.type = "info";
    this.notification.msg = message;
    this.notification.show = true;
    this.subject.next(<Notification>this.notification);
  }
  sendWarning(message: string, title: string) {

    this.notification = new Notification("", "", "", false, 4000);
    this.notification.title = title;
    this.notification.type = "warning";
    this.notification.msg = message;
    this.notification.show = true;
    this.subject.next(<Notification>this.notification);
  }
  clear() {
    this.subject.next();
  }

  hideNotification() {
    return this.notification.show = false;
  }


}