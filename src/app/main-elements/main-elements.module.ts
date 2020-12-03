import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainElementsRoutingModule } from './main-elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';

@NgModule({
  declarations: [ElementsHomeComponent, PlaceholderComponent, TimesDirective, SegmentComponent],
  imports: [
    CommonModule,
    MainElementsRoutingModule,
    SharedModule
  ],

})
export class MainElementsModule { }