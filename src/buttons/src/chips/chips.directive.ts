import { Directive, ViewContainerRef, ContentChildren, ContentChild } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import { Template } from '@syncfusion/ej2-angular-base';


let input: string[] = ['avatarIconCss', 'avatarText', 'cssClass', 'enabled', 'htmlAttributes', 'leadingIconCss', 'leadingIconUrl', 'template', 'text', 'trailingIconCss', 'trailingIconUrl', 'value'];
let outputs: string[] = [];
/**
 * `e-chip` directive represent a chip of the Angular ChipList.
 * ```html
 * <ejs-chiplist > 
 *   <e-chips>
 *    <e-chip text='chip1'></e-chip>
 *    <e-chip text='chip2'></e-chip>
 *   </e-chips>
 * </ejs-chiplist>
 * ```
 */
@Directive({
    selector: 'e-chips>e-chip',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class ChipDirective extends ComplexBase<ChipDirective> {
    public directivePropList: any;
	


    /** 
     * Specifies the icon CSS class for the avatar in the chip.
     * @default ''
     */
    public avatarIconCss: any;
    /** 
     * Specifies the customized text value for the avatar in the chip.
     * @default ''
     */
    public avatarText: any;
    /** 
     * Specifies the custom classes to be added to the chip element used to customize the ChipList component.
     * @default ''
     */
    public cssClass: any;
    /** 
     * Specifies a value that indicates whether the chip component is enabled or not.
     * @default true
     */
    public enabled: any;
    /** 
     * Specifies the additional HTML attributes, such as title, styles, class, id, and name, in a key-value pair format 
     * and appended to the chip item element of the Chip component. If both the property and equivalent HTML attributes are configured, 
     * then the component overrides the property value with the HTML attributes.
     * @default {}
     */
    public htmlAttributes: any;
    /** 
     * Specifies the leading icon CSS class for the chip.
     * @default ''
     */
    public leadingIconCss: any;
    /** 
     * Specifies the leading icon url for the chip.
     * @default ''
     */
    public leadingIconUrl: any;
    /** 
     * Specifies the text content for the chip.
     * @default ''
     */
    public text: any;
    /** 
     * Specifies the trailing icon CSS class for the chip.
     * @default ''
     */
    public trailingIconCss: any;
    /** 
     * Specifies the trailing icon url for the chip.
     * @default ''
     */
    public trailingIconUrl: any;
    /** 
     * Defines the value of the chip.
     * @default ''
     */
    public value: any;
    /** 
     * Specifies the template content to be rendered for each individual chip item. This template allows for the rendering of custom HTML elements, such as anchor tags, SVG icons, or other components, within each chip item.
     * @default null
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    @ContentChild('template')
    @Template()
    public template: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Chip Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-chiplist>e-chips',
    queries: {
        children: new ContentChildren(ChipDirective)
    },
})
export class ChipsDirective extends ArrayBase<ChipsDirective> {
    constructor() {
        super('chips');
    }
}