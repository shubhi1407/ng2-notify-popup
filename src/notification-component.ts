import { Component, Input, Output, EventEmitter} from '@angular/core';
import {  trigger, state, style, animate, transition} from '@angular/animations';
@Component({
    selector: 'notify',
    template: `<div [@shrinkOut]="fade" class="ngn {{'ngn-' + type}}" [ngClass]="{'ngn-top': position=='top','ngn-bottom':position=='bottom','ngn-fixed':location=='body','ngn-absolute':location!='body','ngn-sticky':sticky==true}">
  <span class="ngn-message">{{notifyText}}</span>
    <span class="ngn-dismiss" (click)="dismiss()">×</span>
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
    @Input() sticky: boolean;
    @Output() destroyComponent = new EventEmitter<boolean>();
    public dismiss(): void {
        this.destroyComponent.emit(true);
    }

}
