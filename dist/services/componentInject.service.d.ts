import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Injector, Type } from '@angular/core';
export declare class ComponentInjectService {
    private applicationRef;
    private componentFactoryResolver;
    private injector;
    private _container;
    constructor(applicationRef: ApplicationRef, componentFactoryResolver: ComponentFactoryResolver, injector: Injector);
    /**
     * Gets the root view container to inject the component to.
     *
     * @returns {ComponentRef<any>}
     *
     * @memberOf InjectionService
     */
    getRootViewContainer(): ComponentRef<any>;
    /**
     * Overrides the default root view container. This is useful for
     * things like ngUpgrade that doesn't have a ApplicationRef root.
     *
     * @param {any} container
     *
     * @memberOf InjectionService
     */
    setRootViewContainer(container: ComponentRef<any>): void;
    /**
     * Gets the html element for a component ref.
     *
     * @param {ComponentRef<any>} componentRef
     * @returns {HTMLElement}
     *
     * @memberOf InjectionService
     */
    getComponentRootNode(componentRef: ComponentRef<any>): HTMLElement;
    /**
     * Gets the root component container html element.
     *
     * @returns {HTMLElement}
     *
     * @memberOf InjectionService
     */
    getRootViewContainerNode(): HTMLElement;
    /**
     * Projects the inputs onto the component
     *
     * @param {ComponentRef<any>} component
     * @param {*} options
     * @returns {ComponentRef<any>}
     *
     * @memberOf InjectionService
     */
    projectComponentInputs(component: ComponentRef<any>, options: any): ComponentRef<any>;
    /**
     * Appends a component to a adjacent location
     *
     * @template T
     * @param {Type<T>} componentClass
     * @param {*} [options={}]
     * @param {Element} [location=this.getRootViewContainerNode()]
     * @returns {ComponentRef<any>}
     *
     * @memberOf InjectionService
     */
    appendComponentToBody<T>(componentClass: Type<T>, options: any, location: Element): ComponentRef<any>;
    appendComponent<T>(componentClass: Type<T>, options: any, location: Element): ComponentRef<any>;
    destroyComponent(compRef: ComponentRef<any>): void;
}
