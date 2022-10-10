import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotificationToastrComponent } from './notification-toastr.component';
import { NotificationToastService } from './notification-toastr.service';
import * as i0 from "@angular/core";
export class NotificationToastrModule {
}
NotificationToastrModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: NotificationToastrModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NotificationToastrModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: NotificationToastrModule, declarations: [NotificationToastrComponent], imports: [BrowserModule], exports: [NotificationToastrComponent] });
NotificationToastrModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: NotificationToastrModule, providers: [
        NotificationToastService
    ], imports: [[
            BrowserModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: NotificationToastrModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NotificationToastrComponent
                    ],
                    imports: [
                        BrowserModule
                    ],
                    exports: [
                        NotificationToastrComponent
                    ],
                    providers: [
                        NotificationToastService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLXRvYXN0ci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9ub3RpZmljYXRpb24tdG9hc3RyL3NyYy9saWIvbm90aWZpY2F0aW9uLXRvYXN0ci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBbUJ6RSxNQUFNLE9BQU8sd0JBQXdCOztxSEFBeEIsd0JBQXdCO3NIQUF4Qix3QkFBd0IsaUJBYmpDLDJCQUEyQixhQUczQixhQUFhLGFBR2IsMkJBQTJCO3NIQU9sQix3QkFBd0IsYUFMekI7UUFDUix3QkFBd0I7S0FDekIsWUFSUTtZQUNQLGFBQWE7U0FDZDsyRkFTVSx3QkFBd0I7a0JBZnBDLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLDJCQUEyQjtxQkFDNUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7cUJBQ2Q7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLDJCQUEyQjtxQkFDNUI7b0JBQ0QsU0FBUyxFQUFDO3dCQUNSLHdCQUF3QjtxQkFDekI7aUJBRUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uVG9hc3RyQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZmljYXRpb24tdG9hc3RyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25Ub2FzdFNlcnZpY2UgfSBmcm9tICcuL25vdGlmaWNhdGlvbi10b2FzdHIuc2VydmljZSc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOb3RpZmljYXRpb25Ub2FzdHJDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdGlmaWNhdGlvblRvYXN0ckNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6W1xuICAgIE5vdGlmaWNhdGlvblRvYXN0U2VydmljZVxuICBdXG5cbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uVG9hc3RyTW9kdWxlIHsgfVxuIl19