import { Observable, Subject } from 'rxjs';
import { Notification } from './notification.model';
import * as i0 from "@angular/core";
export declare class NotificationToastService {
    notifications: Notification[];
    subject: Subject<Notification>;
    notification: Notification;
    constructor();
    getAlert(): Observable<any>;
    sendSuccess(message: string, title: string): void;
    sendError(message: string, title: string): void;
    sendInfo(message: string, title: string): void;
    sendWarning(message: string, title: string): void;
    clear(): void;
    hideNotification(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationToastService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NotificationToastService>;
}
