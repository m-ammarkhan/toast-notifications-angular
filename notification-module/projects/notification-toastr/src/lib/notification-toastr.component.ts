import { Component, OnInit } from '@angular/core';
import { NotificationToastService } from './notification-toastr.service';
import { Notification } from './notification.model';

@Component({
  selector: 'notification-toastr',
  templateUrl: './notification-toastr.component.html',
  styleUrls: ['./notification-toastr.component.css']
})
export class NotificationToastrComponent implements OnInit {

  notifications: Notification[] = [];
  aboveFive: Notification[] = [];
  moreThanFive = false;
  hide=true;
  constructor(private notificationService: NotificationToastService) { }
  ngOnInit(): void {
    if (this.aboveFive.length == 0) {
      this.moreThanFive = false;
    }
    this.notificationService.getAlert().subscribe((toast: Notification) => {
      if (!toast) {
        this.notifications = [];
        return;
      }
      this.notifications.push(toast);
      if (this.notifications.length > 5) {
        this.moreThanFive = true;
        this.aboveFive.push(this.notifications[0]);
        this.notifications.splice(0, 1);
      }
      setTimeout(() => {       
        if (this.aboveFive.length > 0) {
          this.notifications.push(this.aboveFive[this.aboveFive.length - 1]);
          this.aboveFive.splice(this.aboveFive.length - 1, 1);
        }
        if (this.aboveFive.length == 0) {
          this.moreThanFive = false;
        }
        if(this.notifications.length>0 || this.aboveFive.length>0){
          this.notifications = this.notifications.filter(x => x !== toast);
          this.aboveFive = this.aboveFive.filter(x => x !== toast);
        }     
      }, toast.timeout);
    });
  }
  removeNotification(notification: Notification) {
    this.notifications = this.notifications.filter(x => x !== notification);
    if (this.aboveFive.length > 0) {
      this.notifications.push(this.aboveFive[this.aboveFive.length - 1]);
      this.aboveFive.splice(this.aboveFive.length - 1, 1);
    }

    if (this.aboveFive.length == 0) {
      this.moreThanFive = false;
    }
  }
}
