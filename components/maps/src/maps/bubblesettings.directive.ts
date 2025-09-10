import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColorMappingsDirective } from './colormapping.directive';

let input: string[] = ['animationDelay', 'animationDuration', 'border', 'bubbleType', 'colorMapping', 'colorValuePath', 'dataSource', 'fill', 'highlightSettings', 'maxRadius', 'minRadius', 'opacity', 'query', 'selectionSettings', 'tooltipSettings', 'valuePath', 'visible'];
let outputs: string[] = [];
/**
 * Represents the directive to define the bubbles in the maps.
 * ```html
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * ```
 */
@Directive({
    selector: 'e-layer>e-bubbleSettings>e-bubbleSetting',
    inputs: input,
    outputs: outputs,    
    queries: {
        childColorMapping: new ContentChild(ColorMappingsDirective)
    }
})
export class BubbleDirective extends ComplexBase<BubbleDirective> {
    public directivePropList: any;
	
    public childColorMapping: any;
    public tags: string[] = ['colorMapping'];
    /** 
     * Gets or sets the delay in animation for the bubbles in maps.
     * @default 0
     */
    public animationDelay: any;
    /** 
     * Gets or sets the duration for the animation of the bubbles in maps.
     * @default 1000
     */
    public animationDuration: any;
    /** 
     * Gets or sets the options to customize the style properties of the border for the bubbles in maps.
     */
    public border: any;
    /** 
     * Gets or sets the type of the bubble in maps.
     * @default Circle
     */
    public bubbleType: any;
    /** 
     * Gets or sets the color-mapping for the bubbles in maps.
     * @default []
     */
    public colorMapping: any;
    /** 
     * Gets or sets the field name from the data source of bubble settings to set the color for each bubble in maps.
     * @default null
     */
    public colorValuePath: any;
    /** 
     * Gets or sets the data source for the bubble. 
     * The data source must contain the size value of the bubble that can be bound to the bubble 
     * of the maps using the `valuePath` property in the `bubbleSettings`. 
     * The data source can contain data such as color and other informations that can be bound to the bubble and tooltip of the bubble.
     * @isobservable true
     * @default []
     */
    public dataSource: any;
    /** 
     * Gets or sets the color for the bubbles in maps.
     * @default ''
     */
    public fill: any;
    /** 
     * Gets or sets the options to customize the highlight of the bubbles in maps.
     */
    public highlightSettings: any;
    /** 
     * Gets or sets the maximum radius for the bubbles in maps.
     * @default 20
     */
    public maxRadius: any;
    /** 
     * Gets or sets the minimum radius for the bubbles in maps.
     * @default 10
     */
    public minRadius: any;
    /** 
     * Gets or sets the opacity of the bubbles in maps.
     * @default 1
     */
    public opacity: any;
    /** 
     * Gets or sets the query to select particular data from the bubble data source. 
     * This property is applicable only when the data source is created by data manager.
     * @default null
     */
    public query: any;
    /** 
     * Gets or sets the options to customize the selection of the bubbles in maps.
     */
    public selectionSettings: any;
    /** 
     * Gets or sets the options to customize the tooltip of the bubbles in maps.
     */
    public tooltipSettings: any;
    /** 
     * Gets or sets the field name from the data source of bubble settings based on which the bubbles are rendered on the maps.
     * @default null
     */
    public valuePath: any;
    /** 
     * Enables or disables the visibility of the bubbles in maps.
     * @default false
     */
    public visible: any;
    @ContentChild('tooltipSettingsTemplate')
    @Template()
    public tooltipSettings_template: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Bubble Array Directive
 * @private
 */
@Directive({
    selector: 'e-layer>e-bubbleSettings',
    queries: {
        children: new ContentChildren(BubbleDirective)
    },
})
export class BubblesDirective extends ArrayBase<BubblesDirective> {
    constructor() {
        super('bubblesettings');
    }
}