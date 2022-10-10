import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification } from './notification.model';
import * as i0 from "@angular/core";
export class NotificationToastService {
    constructor() {
        this.notifications = [];
        this.subject = new Subject();
        this.notification = new Notification("", "", "", false, 4000);
    }
    getAlert() {
        return this.subject.asObservable();
    }
    sendSuccess(message, title) {
        this.notification = new Notification("", "", "", false, 4000);
        this.notification.title = title;
        this.notification.type = "success";
        this.notification.msg = message;
        this.notification.show = true;
        this.subject.next(this.notification);
    }
    sendError(message, title) {
        this.notification = new Notification("", "", "", false, 4000);
        this.notification.title = title;
        this.notification.type = "error";
        this.notification.msg = message;
        this.notification.show = true;
        this.subject.next(this.notification);
    }
    sendInfo(message, title) {
        this.notification = new Notification("", "", "", false, 90000);
        this.notification.title = title;
        this.notification.type = "info";
        this.notification.msg = message;
        this.notification.show = true;
        this.subject.next(this.notification);
    }
    sendWarning(message, title) {
        this.notification = new Notification("", "", "", false, 4000);
        this.notification.title = title;
        this.notification.type = "warning";
        this.notification.msg = message;
        this.notification.show = true;
        this.subject.next(this.notification);
    }
    clear() {
        this.subject.next();
    }
    hideNotification() {
        return this.notification.show = false;
    }
}
NotificationToastService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: NotificationToastService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NotificationToastService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: NotificationToastService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: NotificationToastService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLXRvYXN0ci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbm90aWZpY2F0aW9uLXRvYXN0ci9zcmMvbGliL25vdGlmaWNhdGlvbi10b2FzdHIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU9wRCxNQUFNLE9BQU8sd0JBQXdCO0lBTW5DO1FBSkEsa0JBQWEsR0FBbUIsRUFBRSxDQUFDO1FBQzVCLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBZ0IsQ0FBQztRQUU3QyxpQkFBWSxHQUFHLElBQUksWUFBWSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRWpCLFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUNELFdBQVcsQ0FBQyxPQUFlLEVBQUUsS0FBYTtRQUV4QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQWUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxTQUFTLENBQUMsT0FBZSxFQUFFLEtBQWE7UUFFdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFlLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsUUFBUSxDQUFDLE9BQWUsRUFBRSxLQUFhO1FBRXJDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBZSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNELFdBQVcsQ0FBQyxPQUFlLEVBQUUsS0FBYTtRQUV4QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQWUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQzs7cUhBckRVLHdCQUF3Qjt5SEFBeEIsd0JBQXdCLGNBSnZCLE1BQU07MkZBSVAsd0JBQXdCO2tCQUxwQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vbm90aWZpY2F0aW9uLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5cblxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblRvYXN0U2VydmljZSB7XG5cbiAgbm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uW10gPSBbXTtcbiAgcHVibGljIHN1YmplY3QgPSBuZXcgU3ViamVjdDxOb3RpZmljYXRpb24+KCk7XG5cbiAgbm90aWZpY2F0aW9uID0gbmV3IE5vdGlmaWNhdGlvbihcIlwiLCBcIlwiLCBcIlwiLCBmYWxzZSwgNDAwMCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0QWxlcnQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIHNlbmRTdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU6IHN0cmluZykge1xuXG4gICAgdGhpcy5ub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKFwiXCIsIFwiXCIsIFwiXCIsIGZhbHNlLCA0MDAwKTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbi50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMubm90aWZpY2F0aW9uLnR5cGUgPSBcInN1Y2Nlc3NcIjtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbi5tc2cgPSBtZXNzYWdlO1xuICAgIHRoaXMubm90aWZpY2F0aW9uLnNob3cgPSB0cnVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KDxOb3RpZmljYXRpb24+dGhpcy5ub3RpZmljYXRpb24pO1xuICB9XG4gIHNlbmRFcnJvcihtZXNzYWdlOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpIHtcblxuICAgIHRoaXMubm90aWZpY2F0aW9uID0gbmV3IE5vdGlmaWNhdGlvbihcIlwiLCBcIlwiLCBcIlwiLCBmYWxzZSwgNDAwMCk7XG4gICAgdGhpcy5ub3RpZmljYXRpb24udGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbi50eXBlID0gXCJlcnJvclwiO1xuICAgIHRoaXMubm90aWZpY2F0aW9uLm1zZyA9IG1lc3NhZ2U7XG4gICAgdGhpcy5ub3RpZmljYXRpb24uc2hvdyA9IHRydWU7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoPE5vdGlmaWNhdGlvbj50aGlzLm5vdGlmaWNhdGlvbik7XG4gIH1cbiAgc2VuZEluZm8obWVzc2FnZTogc3RyaW5nLCB0aXRsZTogc3RyaW5nKSB7XG5cbiAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24oXCJcIiwgXCJcIiwgXCJcIiwgZmFsc2UsIDkwMDAwKTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbi50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMubm90aWZpY2F0aW9uLnR5cGUgPSBcImluZm9cIjtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbi5tc2cgPSBtZXNzYWdlO1xuICAgIHRoaXMubm90aWZpY2F0aW9uLnNob3cgPSB0cnVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KDxOb3RpZmljYXRpb24+dGhpcy5ub3RpZmljYXRpb24pO1xuICB9XG4gIHNlbmRXYXJuaW5nKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU6IHN0cmluZykge1xuXG4gICAgdGhpcy5ub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKFwiXCIsIFwiXCIsIFwiXCIsIGZhbHNlLCA0MDAwKTtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbi50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMubm90aWZpY2F0aW9uLnR5cGUgPSBcIndhcm5pbmdcIjtcbiAgICB0aGlzLm5vdGlmaWNhdGlvbi5tc2cgPSBtZXNzYWdlO1xuICAgIHRoaXMubm90aWZpY2F0aW9uLnNob3cgPSB0cnVlO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KDxOb3RpZmljYXRpb24+dGhpcy5ub3RpZmljYXRpb24pO1xuICB9XG4gIGNsZWFyKCkge1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KCk7XG4gIH1cblxuICBoaWRlTm90aWZpY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vdGlmaWNhdGlvbi5zaG93ID0gZmFsc2U7XG4gIH1cblxuXG59Il19