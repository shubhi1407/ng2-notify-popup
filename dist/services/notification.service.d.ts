import { ComponentInjectService } from './componentInject.service';
export declare class NotificationService {
    private compInject;
    constructor(compInject: ComponentInjectService);
    private defaultConfigVar;
    private activeNotificationCompRef;
    private cleartime;
    private clearhide;
    defaultConfig(configObject: Object): void;
    destroy(): void;
    show(notifictionText: string, notificationConfig?: Object): void;
    private setConfig(configObject, targetObject);
}
