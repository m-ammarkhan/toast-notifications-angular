import { OnInit } from '@angular/core';
import { NotificationToastService } from './notification-toastr.service';
import { Notification } from './notification.model';
import * as i0 from "@angular/core";
export declare class NotificationToastrComponent implements OnInit {
    private notificationService;
    notifications: Notification[];
    aboveFive: Notification[];
    moreThanFive: boolean;
    hide: boolean;
    constructor(notificationService: NotificationToastService);
    ngOnInit(): void;
    removeNotification(notification: Notification): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationToastrComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationToastrComponent, "notification-toastr", never, {}, {}, never, never>;
}
