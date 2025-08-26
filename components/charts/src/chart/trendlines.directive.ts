import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['accessibility', 'animation', 'backwardForecast', 'dashArray', 'enableTooltip', 'fill', 'forwardForecast', 'intercept', 'legendShape', 'marker', 'name', 'period', 'polynomialOrder', 'type', 'visible', 'width'];
let outputs: string[] = [];
/**
 * Series Directive
 * ```html
 * <e-series-collection>
 * <e-series>
 * <e-trendlines>
 * <e-trendline>
 * </e-trendline>
 * </e-trendlines>
 * </e-series-collection>
 * ```
 */
@Directive({
    selector: 'e-series>e-trendlines>e-trendline',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class TrendlineDirective extends ComplexBase<TrendlineDirective> {
    public directivePropList: any;
	


    /** 
     * Defines the type of trendline used in the series. 
     * Available types are: 
     * * Linear - A straight line that shows the general direction of data. 
     * * Exponential - A curve that fits data with exponential growth or decay. 
     * * Polynomial - A curve that fits data with a polynomial function. 
     * * Power - A curve that represents data with a power function. 
     * * Logarithmic - A curve that fits data with a logarithmic scale. 
     * * MovingAverage - A trendline that smoothens data using a moving average calculation.
     * @default 'Linear'
     */
    public type: any;
    /** 
     * Options to improve accessibility for chart trendline elements.
     */
    public accessibility: any;
    /** 
     * Options to customize the animation for trendlines.
     */
    public animation: any;
    /** 
     * Defines the period by which the trend is to be backward forecasted.
     * @default 0
     */
    public backwardForecast: any;
    /** 
     * Configures the pattern of dashes and gaps in the trendline stroke using the `dashArray` property.
     * @default ''
     */
    public dashArray: any;
    /** 
     * Enables or disables the tooltip for the trendline using the `enableTooltip` property. By default, it is set to true.
     * @default true
     */
    public enableTooltip: any;
    /** 
     * The fill color for the trendline, which accepts values in hex or rgba as valid CSS color strings.
     * @default ''
     */
    public fill: any;
    /** 
     * Defines the period by which the trend must be forward forecasted.
     * @default 0
     */
    public forwardForecast: any;
    /** 
     * Specifies the intercept value of the trendline.
     * @default null
     * @aspdefaultvalueignore 
     */
    public intercept: any;
    /** 
     * The `legendShape` property defines the shape used to represent the trendline in the chart legend.
     * @default 'SeriesType'
     */
    public legendShape: any;
    /** 
     * Options for customizing the markers for trendlines, including shape, size, color, and other visual aspects.
     * @deprecated 
     */
    public marker: any;
    /** 
     * The `name` property is used to assign a descriptive name to the trendline, which will be displayed in the chart as a legend.
     * @default ''
     */
    public name: any;
    /** 
     * Defines the period, the price changes over which will be considered to predict the moving average trendline.
     * @default 2
     */
    public period: any;
    /** 
     * Defines the polynomial order of the polynomial trendline.
     * @default 2
     */
    public polynomialOrder: any;
    /** 
     * The `visible` property controls the display of the trendline. If set to true, the trendline will be rendered on the chart. If set to false, the trendline will be hidden.
     * @default true
     */
    public visible: any;
    /** 
     * Defines the width of the trendline.
     * @default 1
     */
    public width: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Trendline Array Directive
 * @private
 */
@Directive({
    selector: 'e-series>e-trendlines',
    queries: {
        children: new ContentChildren(TrendlineDirective)
    },
})
export class TrendlinesDirective extends ArrayBase<TrendlinesDirective> {
    constructor() {
        super('trendlines');
    }
}