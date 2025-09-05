import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['accessibility', 'content', 'coordinateUnits', 'description', 'horizontalAlignment', 'region', 'verticalAlignment', 'x', 'xAxisName', 'y', 'yAxisName'];
let outputs: string[] = [];
/**
 * Annotation Directive
 * ```html
 * <e-annotations><e-annotation></e-annotation><e-annotations>
 * ```
 */
@Directive({
    selector: 'e-annotations>e-annotation',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class AnnotationDirective extends ComplexBase<AnnotationDirective> {
    public directivePropList: any;
	


    /** 
     * Options to improve accessibility for chart annotation elements.
     */
    public accessibility: any;
    /** 
     * Specifies the coordinate units of the annotation. 
     * The options are: 
     * * Pixel - Renders the annotation based on x and y pixel values. 
     * * Point - Renders the annotation based on x and y axis values.
     * @default 'Pixel'
     */
    public coordinateUnits: any;
    /** 
     * A description for the annotation that provides additional information about its content for screen readers.
     * @default null
     * @deprecated 
     */
    public description: any;
    /** 
     * Specifies the alignment of the annotation. 
     * The options are: 
     * * Near - Aligns the annotation element to the left side. 
     * * Far - Aligns the annotation element to the right side. 
     * * Center - Aligns the annotation element to the midpoint.
     * @default 'Center'
     * @deprecated 
     */
    public horizontalAlignment: any;
    /** 
     * Specifies the regions of the annotation. 
     * The options are: 
     * * Chart - Renders the annotation based on chart coordinates. 
     * * Series - Renders the annotation based on series coordinates.
     * @default 'Chart'
     */
    public region: any;
    /** 
     * Specifies the position of the annotation. 
     * The options are 
     * * Top - Aligns the annotation element to the top side. 
     * * Bottom - Aligns the annotation element to the bottom side. 
     * * Middle - Aligns the annotation element to the midpoint.
     * @default 'Middle'
     * @deprecated 
     */
    public verticalAlignment: any;
    /** 
     * If `coordinateUnit` is set to `Pixel`, x specifies the pixel value. 
     * If `coordinateUnit` is set to `Point`, x specifies the axis value.
     * @default '0'
     * @asptype object
     */
    public x: any;
    /** 
     * The name of the horizontal axis associated with the annotation. 
     * Requires the `axes` of the chart.
     * @default null
     */
    public xAxisName: any;
    /** 
     * If `coordinateUnit` is set to `Pixel`, y specifies the pixel value. 
     * If `coordinateUnit` is set to `Point`, y specifies the axis value.
     * @default '0'
     */
    public y: any;
    /** 
     * The name of the vertical axis associated with the annotation. 
     * Requires the `axes` of the chart.
     * @default null
     */
    public yAxisName: any;
    /** 
     * The content of the annotation, which also accepts the ID of the custom element.
     * @default null
     */
    @ContentChild('content')
    @Template()
    public content: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Annotation Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-chart>e-annotations',
    queries: {
        children: new ContentChildren(AnnotationDirective)
    },
})
export class AnnotationsDirective extends ArrayBase<AnnotationsDirective> {
    constructor() {
        super('annotations');
    }
}