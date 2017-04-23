import { Component, Input} from '@angular/core';
import {  trigger, state, style, animate, transition} from '@angular/animations';
@Component({
    selector: 'notify',
    template: `<div [@shrinkOut]="fade" class="ngn {{'ngn-' + type}}" [ngClass]="{'ngn-top': position=='top','ngn-bottom':position=='bottom','ngn-fixed':location=='body','ngn-absolute':location!='body'}">
  <span class="ngn-message">{{notifyText}}</span>
</div>`,
    styleUrls: ['styles/ng2-notify-popup.css'],
    animations: [
        trigger('shrinkOut', [
            state('show', style({
                opacity: 1
            })),
            state('hide', style({
                opacity: 0
            })),
            transition('show => hide', animate('700ms ease-out')),
            transition('* => show', animate('700ms ease-out'))
        ])
    ]
})

export class NotificationComponent {
    @Input() position: string;
    @Input() duration: number;
    @Input() type: string;
    @Input() notifyText: string;
    @Input() fade: string;

}
