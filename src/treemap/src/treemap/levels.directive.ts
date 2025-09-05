import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColorMappingsDirective } from './colormapping.directive';

let input: string[] = ['autoFill', 'border', 'colorMapping', 'fill', 'groupGap', 'groupPadding', 'groupPath', 'headerAlignment', 'headerFormat', 'headerHeight', 'headerStyle', 'headerTemplate', 'opacity', 'showHeader', 'templatePosition'];
let outputs: string[] = [];
/**
 * Represents the directive to configure and render level leaf items in the treemap.
 * ```html
 * <e-levels>
 * <e-level></e-level>
 * </e-levels>
 * ```
 */
@Directive({
    selector: 'e-levels>e-level',
    inputs: input,
    outputs: outputs,    
    queries: {
        childColorMapping: new ContentChild(ColorMappingsDirective)
    }
})
export class LevelDirective extends ComplexBase<LevelDirective> {
    public directivePropList: any;
	
    public childColorMapping: any;
    public tags: string[] = ['colorMapping'];
    /** 
     * Enables or disables the automatic filling of the colors from the palette in the items of the treemap.
     * @default false
     */
    public autoFill: any;
    /** 
     * Sets and gets the options for customizing the color and width of the border of 
     * the level leaf items of the treemap.
     */
    public border: any;
    /** 
     * Sets and gets the options for customizing the color-mapping of the level leaf items in the treemap.
     */
    public colorMapping: any;
    /** 
     * Sets and gets the fill color of the level leaf item in the treemap.
     * @default null
     */
    public fill: any;
    /** 
     * Sets and gets the gap between the level leaf items in the treemap.
     * @default 0
     */
    public groupGap: any;
    /** 
     * Sets and gets the padding of level leaf items in the treemap.
     * @default 10
     */
    public groupPadding: any;
    /** 
     * Sets and gets the value path from the data source in the treemap to render the item.
     * @default null
     */
    public groupPath: any;
    /** 
     * Sets and gets the alignment of the header of the treemap.
     * @default 'Near'
     */
    public headerAlignment: any;
    /** 
     * Sets and gets the string to format the header label of the level leaf items in the treemap.
     * @default null
     */
    public headerFormat: any;
    /** 
     * Sets and gets the height of header in the treemap.
     * @default 20
     */
    public headerHeight: any;
    /** 
     * Sets and gets the options for customizing the text style of header label of the level leaf item.
     */
    public headerStyle: any;
    /** 
     * Sets and gets the opacity in the level leaf item of the treemap.
     * @default 1
     */
    public opacity: any;
    /** 
     * Shows or hides the header in level leaf item of the treemap.
     * @default true
     */
    public showHeader: any;
    /** 
     * Sets and gets the options for customizing the template position of the treemap.
     * @default 'TopLeft'
     */
    public templatePosition: any;
    /** 
     * Sets and gets the template for header in the treemap.
     * @default null
     * @asptype string
     */
    @ContentChild('headerTemplate')
    @Template()
    public headerTemplate: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Level Array Directive
 * @private
 */
@Directive({
    selector: 'ej-treemap>e-levels',
    queries: {
        children: new ContentChildren(LevelDirective)
    },
})
export class LevelsDirective extends ArrayBase<LevelsDirective> {
    constructor() {
        super('levels');
    }
}