import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['border', 'color', 'dashArray', 'end', 'horizontalAlignment', 'imageUrl', 'isRepeat', 'isSegmented', 'opacity', 'repeatEvery', 'repeatUntil', 'rotation', 'segmentAxisName', 'segmentEnd', 'segmentStart', 'size', 'sizeType', 'start', 'startFromAxis', 'text', 'textStyle', 'verticalAlignment', 'visible', 'zIndex'];
let outputs: string[] = [];
/**
 * StripLine Directive
 * ```html
 * <e-axis>
 * <e-striplines>
 * <e-stripline></e-stripline>
 * </e-striplines>
 * </e-axis>
 * ```
 */
@Directive({
    selector: 'e-axis>e-striplines>e-stripline',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class StripLineDirective extends ComplexBase<StripLineDirective> {
    public directivePropList: any;
	


    /** 
     * The `border` property allows customization of the border for the strip line. 
     * It includes options to set the color and width of the border.
     */
    public border: any;
    /** 
     * The `color` property specifies the color of the strip line.
     * @default '#808080'
     */
    public color: any;
    /** 
     * Specifies the pattern of dashes and gaps used to render the strip line.
     * @default null
     * @aspdefaultvalueignore 
     */
    public dashArray: any;
    /** 
     * Specifies the ending value of the strip line.
     * @default null
     * @aspdefaultvalueignore 
     */
    public end: any;
    /** 
     * Defines the position of the strip line text horizontally. 
     * Available options are: 
     * * Start: Places the strip line text at the start. 
     * * Middle: Places the strip line text in the middle. 
     * * End: Places the strip line text at the end.
     * @default 'Middle'
     */
    public horizontalAlignment: any;
    /** 
     * Specifies the URL of the background image for the strip line. The image will be displayed as the background.
     * @default ''
     */
    public imageUrl: any;
    /** 
     * Specifies whether the strip line is repeated at regular intervals along the axis.
     * @default false
     * @aspdefaultvalueignore 
     */
    public isRepeat: any;
    /** 
     * Specifies whether the strip line is segmented.
     * @default false
     * @aspdefaultvalueignore 
     */
    public isSegmented: any;
    /** 
     * Specifies the opacity for the strip line.
     * @default 1
     */
    public opacity: any;
    /** 
     * Specifies the interval at which the strip line is repeated.
     * @default null
     * @aspdefaultvalueignore 
     */
    public repeatEvery: any;
    /** 
     * Specifies the maximum value of the interval at which the strip line is repeated.
     * @default null
     * @aspdefaultvalueignore 
     */
    public repeatUntil: any;
    /** 
     * Defines the degree of rotation applied to the text on the strip line.
     * @default null
     * @aspdefaultvalueignore 
     */
    public rotation: any;
    /** 
     * The name of the axis where the strip line segment is applied.
     * @default null
     * @aspdefaultvalueignore 
     */
    public segmentAxisName: any;
    /** 
     * Specifies where a new segment of the strip line on the axis ends.
     * @default null
     * @aspdefaultvalueignore 
     */
    public segmentEnd: any;
    /** 
     * Specifies where a new segment of the strip line on the axis begins.
     * @default null
     * @aspdefaultvalueignore 
     */
    public segmentStart: any;
    /** 
     * Specifies the size of the strip line when starting from the origin.
     * @default null
     * @aspdefaultvalueignore 
     */
    public size: any;
    /** 
     * The `sizeType` property specifies how the size of the strip line is determined.
     * @default Auto
     */
    public sizeType: any;
    /** 
     * Specifies the starting value of the strip line.
     * @default null
     * @aspdefaultvalueignore 
     */
    public start: any;
    /** 
     * If set to true, the strip line is rendered from the axis origin.
     * @default false
     */
    public startFromAxis: any;
    /** 
     * Defines the text to be displayed on the strip line.
     * @default ''
     */
    public text: any;
    /** 
     * The `textStyle` property enables customization of the text appearance on the strip line.
     */
    public textStyle: any;
    /** 
     * Defines the position of the strip line text vertically. 
     * Available options are: 
     * * Start: Places the strip line text at the start. 
     * * Middle: Places the strip line text in the middle. 
     * * End: Places the strip line text at the end.
     * @default 'Middle'
     */
    public verticalAlignment: any;
    /** 
     * If set to true, the strip line on the axis will render.
     * @default true
     */
    public visible: any;
    /** 
     * Specifies the order of the strip line. 
     * The options are: 
     * * Behind: Places the strip line behind the series elements. 
     * * Over: Places the strip line over the series elements.
     * @default 'Behind'
     */
    public zIndex: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * StripLine Array Directive
 * @private
 */
@Directive({
    selector: 'e-axis>e-striplines',
    queries: {
        children: new ContentChildren(StripLineDirective)
    },
})
export class StripLinesDirective extends ArrayBase<StripLinesDirective> {
    constructor() {
        super('striplines');
    }
}