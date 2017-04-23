export class NotificationConfig {
    position: string;
    duration: number;
    type: string;
    location: string;
    notifyText: string;
    constructor(postion: string, duration: number, type: string, location: string, notifyText: string) {
        this.position = postion;
        this.duration = duration;
        this.type = type;
        this.location = location;
        this.notifyText = notifyText;
    }
}
