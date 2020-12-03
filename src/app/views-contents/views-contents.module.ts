import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsContentsRoutingModule } from './views-contents-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [ViewsHomeComponent, StatisticsComponent, ItemListComponent],
  imports: [
    CommonModule,
    ViewsContentsRoutingModule,
    SharedModule
  ],
})
export class ViewsContentsModule { }
