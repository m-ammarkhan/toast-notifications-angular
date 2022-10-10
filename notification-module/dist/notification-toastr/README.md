# NotificationToastr

This library was generated with [Angular CLI] (https://github.com/angular/angular-cli) version 12.2.0.

## To use this library

Run `npm i notification-toastr`

Now In app.module.ts, add `NotificationToastrModule` to Imports.

After that, In app.component.html, add `<notification-toastr></notification-toastr>`.

## Now to display it on any event

Add `NotificationToastService` type parameter in your constructor, such as:

	constructor(private notificationService: NotificationToastService){}

And call any provided function with two parameters (1st is for Notifcation message, 2nd for Notification Title), such as:

	this.notificationService.sendSuccess("Productuct Added!","Success");

	this.notificationService.sendError("Attempt Unsuccessfull!","Not Added");

	this.notificationService.sendInfo("Attempt Unsuccessfull Try Again!","Not Added");

	this.notificationService.sendWarning("You are doing something wrong!","Not Added");

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
