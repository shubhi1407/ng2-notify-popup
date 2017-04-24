import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification-component';
import {  NotificationService} from './services/notification.service';
import {  ComponentInjectService} from './services/componentInject.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



export * from './services/notification.service';

@NgModule({
    imports: [
        CommonModule, BrowserAnimationsModule
    ],
    declarations: [
        NotificationComponent
    ],
    providers: [ComponentInjectService],
    entryComponents: [NotificationComponent]
})
export class NgNotifyPopup {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgNotifyPopup,
            providers: [NotificationService, ComponentInjectService]
        };
    }
}
