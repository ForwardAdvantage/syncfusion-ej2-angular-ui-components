import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['author', 'id', 'isForwarded', 'isPinned', 'replyTo', 'status', 'text', 'timeStamp', 'timeStampFormat'];
let outputs: string[] = [];
/**
 * Represents the Essential JS 2 Angular ChatUI Component.
 * ```html
 * <ejs-chatui> 
 *   <e-messages>
 *     <e-message>
 *     </e-message>
 *    </e-messages>
 * </ejs-chatui>
 * ```
 */
@Directive({
    selector: 'ejs-chatui>e-messages>e-message',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class MessageDirective extends ComplexBase<MessageDirective> {
    public directivePropList: any;
	


    /** 
     * Specifies the author of the message in the Chat UI component. 
     * This property references a `UserModel` object that contains details about the user who sent the message.
     * @default null
     */
    public author: any;
    /** 
     * Specifies the unique identifier for each message sent in the Chat UI component. 
     * Represents a string that uniquely identifies a message for tracking and managing individual messages within the chat.
     * @default '''
     */
    public id: any;
    /** 
     * Specifies whether the message has been forwarded. 
     * When set to true, the message is visually marked as forwarded.
     * @default false
     */
    public isForwarded: any;
    /** 
     * Specifies whether the message is pinned. 
     * When set to true, the message will be visually highlighted and can be displayed in a pinned messages section.
     * @default false
     */
    public isPinned: any;
    /** 
     * Specifies the reference to the original message when this message is a reply. 
     * Contains the MessageModel of the message being replied to.
     * @default null
     */
    public replyTo: any;
    /** 
     * Specifies the status of the message in the Chat UI component. 
     * Represents the current status of the message, such as sent, received, or read. It helps in tracking the messages within the chat component.
     * @default null
     */
    public status: any;
    /** 
     * Represents the content of the message sent by a user in the Chat UI component.
     * @default ''
     */
    public text: any;
    /** 
     * Specifies the timestamp of when the message was sent. 
     * This property holds a `Date` object that represents the exact time the message was created, providing context to the conversation flow.
     * @default ''
     */
    public timeStamp: any;
    /** 
     * Specifies the format of the timestamp for displaying the message's sending time. 
     * By default, the format is set based on the culture of the application. 
     * You can customize the format using a specific pattern, such as "'dd/MM/yyyy hh:mm'" in string format.
     * @default ''
     */
    public timeStampFormat: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Message Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-chatui>e-messages',
    queries: {
        children: new ContentChildren(MessageDirective)
    },
})
export class MessagesDirective extends ArrayBase<MessagesDirective> {
    constructor() {
        super('messages');
    }
}