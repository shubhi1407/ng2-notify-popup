import { EventEmitter } from '@angular/core';
export declare class NotificationComponent {
    position: string;
    duration: number;
    type: string;
    notifyText: string;
    fade: string;
    sticky: boolean;
    destroyComponent: EventEmitter<boolean>;
    dismiss(): void;
}
