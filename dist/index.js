import { ApplicationRef, Component, ComponentFactoryResolver, EventEmitter, Injectable, Injector, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

var NotificationComponent = (function () {
    function NotificationComponent() {
        this.destroyComponent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NotificationComponent.prototype.dismiss = function () {
        this.destroyComponent.emit(true);
    };
    return NotificationComponent;
}());
NotificationComponent.decorators = [
    { type: Component, args: [{
                selector: 'notify',
                template: "<div [@shrinkOut]=\"fade\" class=\"ngn {{'ngn-' + type}}\" [ngClass]=\"{'ngn-top': position=='top','ngn-bottom':position=='bottom','ngn-fixed':location=='body','ngn-absolute':location!='body','ngn-sticky':sticky==true}\">\n  <span class=\"ngn-message\">{{notifyText}}</span>\n    <span class=\"ngn-dismiss\" (click)=\"dismiss()\">\u00D7</span>\n</div>",
                styles: ["/* System notifications */ .ngn { color: #FFF; cursor: default; font-size: 1.3em; left: 0; opacity: 0; padding: 25px 80px; right: 0; display: block; text-align: center; user-select: none; z-index: 9999; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; } .ngn-component { position: absolute; } .ngn-top { top: 0; } .ngn-bottom { bottom: 0; } .ngn-fixed { position: fixed; } .ngn-absolute { position: absolute; } .ngn-dismiss { background-color: #333; border-radius: 15px; box-shadow: inset 2px 2px 7px 2px #000; color: #DDD; cursor: pointer; display: none; font-size: 1.25em; font-weight: bold; height: 30px; line-height: 30px; opacity: 0.2; position: absolute; right: 40px; text-shadow: 1px 1px 5px #000; top: 25px; width: 30px; } .ngn-sticky .ngn-dismiss { display: block; } .ngn-dismiss:hover { background-color: #000; } .ngn-dismiss:active { background-color: #666; } /* Reduce notification size for mobile */ @media only screen and (max-width: 480px) { .ngn { font-size: 1em; padding: 12px 25px; } .ngn-dismiss { font-size: 1em; height: 20px; line-height: 20px; right: 5px; top: 5px; width: 20px; } } /* Themes - Default - Pure */ .ngn-info { background-color: #0e90d2; } .ngn-error { background-color: #dd514c; } .ngn-success { background-color: #5eb95e; } .ngn-warn { background-color: #f37b1d; } .ngn-grimace { background-color: #8058a5; } /* Themes - Prime */ .ngn-prime.ngn-info { background-color: #0033cc; } .ngn-prime.ngn-error { background-color: #ff0000; } .ngn-prime.ngn-success { background-color: #00cc00; } .ngn-prime.ngn-warn { background-color: #ff9900; } .ngn-prime.ngn-grimace { background-color: #660099; } /* Themes - Pastel */ .ngn-pastel.ngn-info { background-color: #7EA7D8; } .ngn-pastel.ngn-error { background-color: #F6989D; } .ngn-pastel.ngn-success { background-color: #82CA9D; } .ngn-pastel.ngn-warn { background-color: #FDC68A; } .ngn-pastel.ngn-grimace { background-color: #A187BE; } /* Themes - Pitchy */ .ngn-pitchy.ngn-info { background-color: #003471; } .ngn-pitchy.ngn-error { background-color: #9E0B0F; } .ngn-pitchy.ngn-success { background-color: #007236; } .ngn-pitchy.ngn-warn { background-color: #A36209; } .ngn-pitchy.ngn-grimace { background-color: #440E62; } /*# sourceMappingURL=ng-notify.css.map */ "],
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
            },] },
];
/**
 * @nocollapse
 */
NotificationComponent.ctorParameters = function () { return []; };
NotificationComponent.propDecorators = {
    'position': [{ type: Input },],
    'duration': [{ type: Input },],
    'type': [{ type: Input },],
    'notifyText': [{ type: Input },],
    'fade': [{ type: Input },],
    'sticky': [{ type: Input },],
    'location': [{ type: Input },],
    'destroyComponent': [{ type: Output },],
};

var NotificationConfig = (function () {
    /**
     * @param {?} postion
     * @param {?} duration
     * @param {?} type
     * @param {?} location
     * @param {?} sticky
     * @param {?} notifyText
     */
    function NotificationConfig(postion, duration, type, location, sticky, notifyText) {
        this.position = postion;
        this.duration = duration;
        this.type = type;
        this.location = location;
        this.sticky = sticky;
        this.notifyText = notifyText;
    }
    return NotificationConfig;
}());

var ComponentInjectService = (function () {
    /**
     * @param {?} applicationRef
     * @param {?} componentFactoryResolver
     * @param {?} injector
     */
    function ComponentInjectService(applicationRef, componentFactoryResolver, injector) {
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    /**
     * Gets the root view container to inject the component to.
    
    \@returns {ComponentRef<any>}
    
    \@memberOf InjectionService
     * @return {?}
     */
    ComponentInjectService.prototype.getRootViewContainer = function () {
        if (this._container)
            return this._container;
        var /** @type {?} */ rootComponents = ((this.applicationRef))['_rootComponents'];
        if (rootComponents.length)
            return rootComponents[0];
        throw new Error('View Container not found! ngUpgrade needs to manually set this via setRootViewContainer.');
    };
    /**
     * Overrides the default root view container. This is useful for
    things like ngUpgrade that doesn't have a ApplicationRef root.
    
    \@param {any} container
    
    \@memberOf InjectionService
     * @param {?} container
     * @return {?}
     */
    ComponentInjectService.prototype.setRootViewContainer = function (container) {
        this._container = container;
    };
    /**
     * Gets the html element for a component ref.
    
    \@param {ComponentRef<any>} componentRef
    \@returns {HTMLElement}
    
    \@memberOf InjectionService
     * @param {?} componentRef
     * @return {?}
     */
    ComponentInjectService.prototype.getComponentRootNode = function (componentRef) {
        return (((componentRef.hostView)).rootNodes[0]);
    };
    /**
     * Gets the root component container html element.
    
    \@returns {HTMLElement}
    
    \@memberOf InjectionService
     * @return {?}
     */
    ComponentInjectService.prototype.getRootViewContainerNode = function () {
        return this.getComponentRootNode(this.getRootViewContainer());
    };
    /**
     * Projects the inputs onto the component
    
    \@param {ComponentRef<any>} component
    \@param {*} options
    \@returns {ComponentRef<any>}
    
    \@memberOf InjectionService
     * @param {?} component
     * @param {?} options
     * @return {?}
     */
    ComponentInjectService.prototype.projectComponentInputs = function (component, options) {
        if (options) {
            var /** @type {?} */ props = Object.getOwnPropertyNames(options);
            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                var prop = props_1[_i];
                component.instance[prop] = options[prop];
            }
        }
        return component;
    };
    /**
     * Appends a component to a adjacent location
    
    \@template T
    \@param {Type<T>} componentClass
    \@param {*} [options={}]
    \@param {Element} [location=this.getRootViewContainerNode()]
    \@returns {ComponentRef<any>}
    
    \@memberOf InjectionService
     * @template T
     * @param {?} componentClass
     * @param {?=} options
     * @param {?=} location
     * @return {?}
     */
    ComponentInjectService.prototype.appendComponentToBody = function (componentClass, options, location) {
        if (options === void 0) { options = {}; }
        return this.appendComponent(componentClass, options, this.getRootViewContainerNode());
    };
    /**
     * @template T
     * @param {?} componentClass
     * @param {?=} options
     * @param {?=} location
     * @return {?}
     */
    ComponentInjectService.prototype.appendComponent = function (componentClass, options, location) {
        if (options === void 0) { options = {}; }
        var /** @type {?} */ componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
        var /** @type {?} */ componentRef = componentFactory.create(this.injector);
        var /** @type {?} */ appRef = this.applicationRef;
        var /** @type {?} */ componentRootNode = this.getComponentRootNode(componentRef);
        // project the options passed to the component instance
        this.projectComponentInputs(componentRef, options);
        // ApplicationRef's attachView and detachView methods are in Angular ^2.2.1 but not before.
        // The `else` clause here can be removed once 2.2.1 is released.
        if (appRef['attachView']) {
            appRef.attachView(componentRef.hostView);
            componentRef.onDestroy(function () {
                appRef.detachView(componentRef.hostView);
            });
        }
        else {
            // When creating a component outside of a ViewContainer, we need to manually register
            // its ChangeDetector with the application. This API is unfortunately not published
            // in Angular <= 2.2.0. The change detector must also be deregistered when the component
            // is destroyed to prevent memory leaks.
            var /** @type {?} */ changeDetectorRef_1 = componentRef.changeDetectorRef;
            appRef.registerChangeDetector(changeDetectorRef_1);
            componentRef.onDestroy(function () {
                appRef.unregisterChangeDetector(changeDetectorRef_1);
                // Normally the ViewContainer will remove the component's nodes from the DOM.
                // Without a ViewContainer, we need to manually remove the nodes.
                if (componentRootNode.parentNode) {
                    componentRootNode.parentNode.removeChild(componentRootNode);
                }
            });
        }
        location.appendChild(componentRootNode);
        return componentRef;
    };
    /**
     * @param {?} compRef
     * @return {?}
     */
    ComponentInjectService.prototype.destroyComponent = function (compRef) {
        this.applicationRef.detachView(compRef.hostView);
        compRef.destroy();
    };
    return ComponentInjectService;
}());
ComponentInjectService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
ComponentInjectService.ctorParameters = function () { return [
    { type: ApplicationRef, },
    { type: ComponentFactoryResolver, },
    { type: Injector, },
]; };

var NotificationService = (function () {
    /**
     * @param {?} compInject
     */
    function NotificationService(compInject) {
        this.compInject = compInject;
        this.defaultConfigVar = new NotificationConfig('bottom', 3000, 'error', 'body', false, '');
    }
    /**
     * @param {?} configObject
     * @return {?}
     */
    NotificationService.prototype.defaultConfig = function (configObject) {
        this.setConfig(configObject, this.defaultConfigVar);
    };
    /**
     * @return {?}
     */
    NotificationService.prototype.destroy = function () {
        clearTimeout(this.cleartime);
        clearTimeout(this.clearhide);
        if (this.activeNotificationCompRef) {
            this.compInject.destroyComponent(this.activeNotificationCompRef);
            this.activeNotificationCompRef = null;
        }
    };
    /**
     * @param {?} notifictionText
     * @param {?=} notificationConfig
     * @return {?}
     */
    NotificationService.prototype.show = function (notifictionText, notificationConfig) {
        var _this = this;
        this.destroy();
        var /** @type {?} */ config = new NotificationConfig(this.defaultConfigVar.position, this.defaultConfigVar.duration, this.defaultConfigVar.type, this.defaultConfigVar.location, this.defaultConfigVar.sticky, notifictionText);
        if (notificationConfig != undefined && notificationConfig != null)
            this.setConfig(notificationConfig, config);
        if (config.location == 'body')
            this.activeNotificationCompRef = this.compInject.appendComponentToBody(NotificationComponent, config, document.querySelector('body'));
        else
            this.activeNotificationCompRef = this.compInject.appendComponent(NotificationComponent, config, document.querySelector(config.location));
        this.activeNotificationCompRef.instance.fade = 'show';
        if (!this.activeNotificationCompRef.instance.sticky) {
            this.cleartime = window.setTimeout(function () {
                _this.activeNotificationCompRef.instance.fade = 'hide';
                _this.clearhide = window.setTimeout(function () {
                    _this.destroy();
                }, 700);
            }, config.duration);
        }
        else
            this.activeNotificationCompRef.instance.destroyComponent.subscribe(function (value) {
                _this.activeNotificationCompRef.instance.fade = 'hide';
                _this.clearhide = window.setTimeout(function () {
                    _this.destroy();
                }, 700);
            });
    };
    /**
     * @param {?} configObject
     * @param {?} targetObject
     * @return {?}
     */
    NotificationService.prototype.setConfig = function (configObject, targetObject) {
        var /** @type {?} */ props = Object.getOwnPropertyNames(configObject);
        for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
            var prop = props_1[_i];
            ((targetObject))[prop] = ((configObject))[prop];
        }
    };
    return NotificationService;
}());
NotificationService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
NotificationService.ctorParameters = function () { return [
    { type: ComponentInjectService, },
]; };

var NgNotifyPopup = (function () {
    function NgNotifyPopup() {
    }
    /**
     * @return {?}
     */
    NgNotifyPopup.forRoot = function () {
        return {
            ngModule: NgNotifyPopup,
            providers: [NotificationService, ComponentInjectService]
        };
    };
    return NgNotifyPopup;
}());
NgNotifyPopup.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule, BrowserAnimationsModule
                ],
                declarations: [
                    NotificationComponent
                ],
                providers: [ComponentInjectService],
                entryComponents: [NotificationComponent]
            },] },
];
/**
 * @nocollapse
 */
NgNotifyPopup.ctorParameters = function () { return []; };

export { NgNotifyPopup, NotificationService };
