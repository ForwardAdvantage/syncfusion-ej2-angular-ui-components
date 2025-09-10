import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';

import { InitialShapeSelectionsDirective } from './initialshapeselection.directive';
import { MarkersDirective } from './markersettings.directive';
import { BubblesDirective } from './bubblesettings.directive';
import { NavigationLinesDirective } from './navigationlinesettings.directive';

let input: string[] = ['animationDuration', 'bubbleSettings', 'dataLabelSettings', 'dataSource', 'geometryType', 'highlightSettings', 'initialShapeSelection', 'markerClusterSettings', 'markerSettings', 'navigationLineSettings', 'polygonSettings', 'query', 'selectionSettings', 'shapeData', 'shapeDataPath', 'shapePropertyPath', 'shapeSettings', 'toggleLegendSettings', 'tooltipSettings', 'type', 'urlTemplate', 'visible'];
let outputs: string[] = [];
/**
 * Represents the directive to define the layer of the maps.
 * ```html
 * <e-layers>
 * <e-layer></e-layer>
 * </e-layers>
 * ```
 */
@Directive({
    selector: 'e-layers>e-layer',
    inputs: input,
    outputs: outputs,    
    queries: {
        childInitialShapeSelection: new ContentChild(InitialShapeSelectionsDirective), 
        childMarkerSettings: new ContentChild(MarkersDirective), 
        childBubbleSettings: new ContentChild(BubblesDirective), 
        childNavigationLineSettings: new ContentChild(NavigationLinesDirective)
    }
})
export class LayerDirective extends ComplexBase<LayerDirective> {
    public directivePropList: any;
	
    public childInitialShapeSelection: any;
    public childMarkerSettings: any;
    public childBubbleSettings: any;
    public childNavigationLineSettings: any;
    public tags: string[] = ['initialShapeSelection', 'markerSettings', 'bubbleSettings', 'navigationLineSettings'];
    /** 
     * Gets or sets the type of the layer in maps. There are two types: Layer and SubLayer.
     * @default Layer
     */
    public type: any;
    /** 
     * Gets or sets the duration of the animation of layers when the zooming is performed in maps.
     * @default 0
     */
    public animationDuration: any;
    /** 
     * Gets or sets the options for customizing the bubbles in maps.
     */
    public bubbleSettings: any;
    /** 
     * Gets or sets the options for customizing the data labels in maps.
     */
    public dataLabelSettings: any;
    /** 
     * Gets or sets the data source for the layer. 
     * The data bound to the shapes using data source can be used to display the tooltip, marker, and bubble.
     * @isobservable true
     * @default []
     */
    public dataSource: any;
    /** 
     * Gets or sets the geometry type for the layer in maps. There are two types: Geographic and Normal. 
     * - Geographic type renders the shape maps with geographical coordinate system. 
     * - Normal type renders the shape maps using default coordinate system.
     * @default Geographic
     */
    public geometryType: any;
    /** 
     * Gets or sets the options for customizing the shapes when the mouse hovers over maps.
     */
    public highlightSettings: any;
    /** 
     * Gets or sets the settings for the shapes to be selected when the maps rendering initially. 
     * The initial selection of shapes will be performed only when the selection functionality of layer is enabled.
     */
    public initialShapeSelection: any;
    /** 
     * Gets or sets the options for customizing the cluster of markers in maps.
     */
    public markerClusterSettings: any;
    /** 
     * Gets or sets the options for customizing the markers in maps.
     */
    public markerSettings: any;
    /** 
     * Gets or sets the options for customizing the navigation lines in maps.
     */
    public navigationLineSettings: any;
    /** 
     * Gets or sets the properties of the polygon shapes that will be rendered on a map layer. 
     * The selection and highlight settings for polygon shapes can also be defined.
     */
    public polygonSettings: any;
    /** 
     * Gets or sets the query to select particular data from the layer data source. 
     * This property is applicable only when the data source is created by data manager.
     * @default null
     */
    public query: any;
    /** 
     * Gets or sets the options for customizing the shapes when clicking on the shapes in maps.
     */
    public selectionSettings: any;
    /** 
     * Gets or sets the data for the maps to render. 
     * The data is normally JSON object with GeoJSON format that defines the shapes and geometries of the map.
     * @isobservable true
     * @default null
     */
    public shapeData: any;
    /** 
     * Gets or sets the field name from the GeoJSON data to map the shape to the data defined in the layer data source.
     * @default 'name'
     */
    public shapeDataPath: any;
    /** 
     * Gets or sets the field name from the data source to map the shape to the data defined in the layer data source.
     * @default 'name'
     */
    public shapePropertyPath: any;
    /** 
     * Gets or sets the options to customize the shape of the maps.
     */
    public shapeSettings: any;
    /** 
     * Gets or sets the options for customizing the toggle state of shapes when selecting the legend in maps.
     */
    public toggleLegendSettings: any;
    /** 
     * Gets or sets the options for customizing the tooltip of the layers in maps.
     */
    public tooltipSettings: any;
    /** 
     * Gets or sets the URL of the online map providers. 
     * The online map providers will be rendered only when the shape data is not set and layer type is set with default value.
     * @default ''
     */
    public urlTemplate: any;
    /** 
     * Enables or disables the visibility of the layers in maps.
     * @default true
     */
    public visible: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Layer Array Directive
 * @private
 */
@Directive({
    selector: 'ej-maps>e-layers',
    queries: {
        children: new ContentChildren(LayerDirective)
    },
})
export class LayersDirective extends ArrayBase<LayersDirective> {
    constructor() {
        super('layers');
    }
}