import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, QueryList, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { HeatMap } from '@syncfusion/ej2-heatmap';



export const inputs: string[] = ['allowSelection','backgroundColor','cellSettings','dataSource','dataSourceSettings','enableMultiSelect','enablePersistence','enableRtl','height','legendSettings','locale','margin','paletteSettings','renderingMode','showTooltip','theme','titleSettings','tooltipSettings','width','xAxis','yAxis'];
export const outputs: string[] = ['cellClick','cellDoubleClick','cellRender','cellSelected','created','legendRender','load','loaded','resized','tooltipRender'];
export const twoWays: string[] = [''];

/**
 * Represents the Angular HeatMap component. 
 * This is used to customize the properties of the heatmap in order to visualize two-dimensional data, with values represented by gradient or solid color variations.
 * ```html
 * <ejs-heatmap></ejs-heatmap>
 * ```
 */
@Component({
    selector: 'ejs-heatmap',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        
    }
})
@ComponentMixins([ComponentBase])
export class HeatMapComponent extends HeatMap implements IComponentBase {
    public context : any;
    public tagObjects: any;
	cellClick: any;
	cellDoubleClick: any;
	cellRender: any;
	cellSelected: any;
	created: any;
	legendRender: any;
	load: any;
	loaded: any;
	resized: any;
	public tooltipRender: any;

    public tags: string[] = [''];

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
                let mod = this.injector.get('HeatMapLegend');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('HeatMapTooltip');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }
        try {
                let mod = this.injector.get('HeatMapAdaptor');
                if(this.injectedModules.indexOf(mod) === -1) {
                    this.injectedModules.push(mod)
                }
            } catch { }

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context  = new ComponentBase();
    }

    public ngOnInit() {
        this.context.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.context.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.context.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        
        this.context.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

