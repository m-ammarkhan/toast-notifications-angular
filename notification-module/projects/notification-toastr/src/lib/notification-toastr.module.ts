import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotificationToastrComponent } from './notification-toastr.component';
import { NotificationToastService } from './notification-toastr.service';



@NgModule({
  declarations: [
    NotificationToastrComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    NotificationToastrComponent
  ],
  providers:[
    NotificationToastService
  ]

})
export class NotificationToastrModule { }
