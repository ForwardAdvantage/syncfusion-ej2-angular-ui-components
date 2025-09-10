import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RibbonItemDirective, RibbonItemsDirective } from './items.directive';
import { RibbonCollectionDirective, RibbonCollectionsDirective } from './collections.directive';
import { RibbonGroupDirective, RibbonGroupsDirective } from './groups.directive';
import { RibbonTabDirective, RibbonTabsDirective } from './tabs.directive';
import { RibbonContextualTabDirective, RibbonContextualTabsDirective } from './contextualtabs.directive';
import { RibbonComponent } from './ribbon.component';

/**
 * NgModule definition for the Ribbon component.
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        RibbonComponent,
        RibbonItemDirective,
        RibbonItemsDirective,
        RibbonCollectionDirective,
        RibbonCollectionsDirective,
        RibbonGroupDirective,
        RibbonGroupsDirective,
        RibbonTabDirective,
        RibbonTabsDirective,
        RibbonContextualTabDirective,
        RibbonContextualTabsDirective
    ],
    exports: [
        RibbonComponent,
        RibbonItemDirective,
        RibbonItemsDirective,
        RibbonCollectionDirective,
        RibbonCollectionsDirective,
        RibbonGroupDirective,
        RibbonGroupsDirective,
        RibbonTabDirective,
        RibbonTabsDirective,
        RibbonContextualTabDirective,
        RibbonContextualTabsDirective
    ]
})
export class RibbonModule { }