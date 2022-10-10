import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotificationToastrComponent, NotificationToastrModule} from 'projects/notification-toastr/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotificationToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
