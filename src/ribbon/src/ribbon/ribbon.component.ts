import { Component, ElementRef, ViewContainerRef, Renderer2, Injector, ChangeDetectionStrategy, QueryList, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, IComponentBase, applyMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { Ribbon } from '@syncfusion/ej2-ribbon';
import { Template } from '@syncfusion/ej2-angular-base';
import { RibbonTabsDirective } from './tabs.directive';
import { RibbonContextualTabsDirective } from './contextualtabs.directive';

export const inputs: string[] = ['activeLayout','backStageMenu','contextualTabs','cssClass','enableKeyTips','enablePersistence','enableRtl','fileMenu','helpPaneTemplate','hideLayoutSwitcher','isMinimized','launcherIconCss','layoutSwitcherKeyTip','locale','selectedTab','tabAnimation','tabs','width'];
export const outputs: string[] = ['created','launcherIconClick','overflowPopupClose','overflowPopupOpen','ribbonCollapsing','ribbonExpanding','ribbonLayoutSwitched','tabSelected','tabSelecting'];
export const twoWays: string[] = [''];

/**
 * Represents the Essential JS 2 Angular Ribbon Component.
 * ```html
 * <ejs-ribbon></ejs-ribbon>
 * ```
 */
@Component({
    selector: 'ejs-ribbon',
    inputs: inputs,
    outputs: outputs,
    template: `<ng-content select='div'></ng-content>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childTabs: new ContentChild(RibbonTabsDirective), 
        childContextualTabs: new ContentChild(RibbonContextualTabsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class RibbonComponent extends Ribbon implements IComponentBase {
    public containerContext : any;
    public tagObjects: any;
	created: any;
	launcherIconClick: any;
	overflowPopupClose: any;
	overflowPopupOpen: any;
	ribbonCollapsing: any;
	ribbonExpanding: any;
	ribbonLayoutSwitched: any;
	tabSelected: any;
	public tabSelecting: any;
    public childTabs: QueryList<RibbonTabsDirective>;
    public childContextualTabs: QueryList<RibbonContextualTabsDirective>;
    public tags: string[] = ['tabs', 'contextualTabs'];
    /** 
     * Specifies the template content for the help pane of ribbon. 
     * The help pane appears on the right side of the ribbon header row.
     * @default ''
     * @angulartype string | object | HTMLElement
     * @reacttype string | function | JSX.Element | HTMLElement
     * @vuetype string | function | HTMLElement
     * @asptype string
     */
    @ContentChild('helpPaneTemplate')
    @Template()
    public helpPaneTemplate: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('RibbonRibbonButton');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RibbonRibbonDropDown');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RibbonRibbonSplitButton');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RibbonRibbonCheckBox');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RibbonRibbonColorPicker');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RibbonRibbonComboBox');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RibbonRibbonGroupButton');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RibbonRibbonFileMenu');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RibbonRibbonBackstage');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RibbonRibbonKeyTip');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RibbonRibbonContextualTab');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('RibbonRibbonGallery');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext  = new ComponentBase();
    }

    public ngOnInit() {
        this.containerContext.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.containerContext.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.containerContext.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        this.tagObjects[0].instance = this.childTabs;
        if (this.childContextualTabs) {
                    this.tagObjects[1].instance = this.childContextualTabs as any;
                }
        this.containerContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

