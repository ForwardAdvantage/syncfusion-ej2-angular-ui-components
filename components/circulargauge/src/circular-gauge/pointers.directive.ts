import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['animation', 'border', 'cap', 'color', 'description', 'enableDrag', 'imageUrl', 'linearGradient', 'markerHeight', 'markerShape', 'markerWidth', 'needleEndWidth', 'needleStartWidth', 'needleTail', 'offset', 'pointerWidth', 'position', 'radialGradient', 'radius', 'roundedCornerRadius', 'text', 'textStyle', 'type', 'value'];
let outputs: string[] = [];
/**
 * Represents the directive to render and customize the pointers in an axis of circular gauge.
 * ```html
 * <e-pointers><e-pointer></e-pointer></e-pointers>
 * ```
 */
@Directive({
    selector: 'e-pointers>e-pointer',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class PointerDirective extends ComplexBase<PointerDirective> {
    public directivePropList: any;
	


    /** 
     * Sets and gets the type of pointer for an axis in Circular gauge.
     * @default Needle
     */
    public type: any;
    /** 
     * Sets and gets the options for the animation of the pointers that propagate while rendering the axis and updating the pointer value in the circular gauge.
     */
    public animation: any;
    /** 
     * Sets and gets the options to customize the style properties of the border for the needle pointer in an axis.
     */
    public border: any;
    /** 
     * Sets and gets the options to customize the cap element of the needle pointer in an axis.
     */
    public cap: any;
    /** 
     * Sets and gets the color of the pointer in an axis.
     * @default null
     */
    public color: any;
    /** 
     * Sets and gets the information about pointer for assistive technology.
     * @default null
     */
    public description: any;
    /** 
     * Enables and disables drag movement of the pointer in the circular gauge.
     * @default false
     */
    public enableDrag: any;
    /** 
     * Sets and gets the URL for the image that is to be displayed as pointer. 
     * It requires marker shape value to be `Image`.
     * @default null
     */
    public imageUrl: any;
    /** 
     * Sets and gets the properties to render a linear gradient for the pointer. 
     * If both linear and radial gradient is set, then the linear gradient will be rendered in the pointer.
     * @default null
     */
    public linearGradient: any;
    /** 
     * Sets and gets the height of the marker pointer in an axis.
     * @default 5
     */
    public markerHeight: any;
    /** 
     * Sets and gets the shape of the marker pointer in an axis.
     * @default Circle
     */
    public markerShape: any;
    /** 
     * Sets and gets the width of the marker pointer in an axis.
     * @default 5
     */
    public markerWidth: any;
    /** 
     * Sets or gets the width at the ending edge of the needle pointer in an axis.
     * @default null
     */
    public needleEndWidth: any;
    /** 
     * Sets or gets the width at the starting edge of the needle pointer in an axis.
     * @default null
     */
    public needleStartWidth: any;
    /** 
     * Sets and gets the options to customize the tail element of the needle pointer in an axis.
     */
    public needleTail: any;
    /** 
     * Sets and gets the offset value of pointer from scale.
     * @default '0'
     */
    public offset: any;
    /** 
     * Sets and gets the width of the pointer in axis.
     * @default 20
     */
    public pointerWidth: any;
    /** 
     * Sets and gets the position of pointer for an axis.
     * @default Auto
     */
    public position: any;
    /** 
     * Sets and gets the properties to render a radial gradient for pointer.
     * @default null
     */
    public radialGradient: any;
    /** 
     * Sets and gets the radius of pointer for marker and range type pointer and fix length of pointer for needle pointer.
     * @default null
     */
    public radius: any;
    /** 
     * Sets and gets the corner radius for pointer in axis.
     * @default 0
     */
    public roundedCornerRadius: any;
    /** 
     * Sets and gets the text for the marker pointer. To render the text in the marker pointer, the marker shape must be set as `Text`.
     * @default ''
     */
    public text: any;
    /** 
     * Sets and gets the style of text in marker pointer of an axis.
     */
    public textStyle: any;
    /** 
     * Sets and gets the value of the pointer in circular gauge.
     * @aspdefaultvalueignore 
     * @default null
     */
    public value: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Pointer Array Directive
 * @private
 */
@Directive({
    selector: 'ej-circulargauge>e-axes>e-axis>e-pointers',
    queries: {
        children: new ContentChildren(PointerDirective)
    },
})
export class PointersDirective extends ArrayBase<PointersDirective> {
    constructor() {
        super('pointers');
    }
}