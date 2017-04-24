export class NotificationConfig {
    position: string;
    duration: number;
    type: string;
    location: string;
    sticky: boolean;
    notifyText: string;
    constructor(postion: string, duration: number, type: string, location: string, sticky: boolean, notifyText: string) {
        this.position = postion;
        this.duration = duration;
        this.type = type;
        this.location = location;
        this.sticky = sticky;
        this.notifyText = notifyText;
    }
}
