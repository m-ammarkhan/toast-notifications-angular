import { Component } from '@angular/core';
import { NotificationToastService } from 'projects/notification-toastr/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notification-module';
  constructor(private notificationService:NotificationToastService){}
  on(){
    this.notificationService.sendSuccess("By","Ammar");
  }
  oni(){
    this.notificationService.sendInfo("By","Ammar");
  }
  onw(){
    this.notificationService.sendWarning("By","Ammar");
  }
  one(){
    this.notificationService.sendError("By","Ammar");
  }
}
