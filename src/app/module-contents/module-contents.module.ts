import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ModuleContentsRoutingModule } from './module-contents-routing.module';
import { ModHomeComponent } from './mod-home/mod-home.component';
import { ModalComponent } from './modal/modal.component';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [ModHomeComponent, ModalComponent, AccordionComponent],
  imports: [
    CommonModule,
    ModuleContentsRoutingModule,
    SharedModule
  ],
  exports:[]
})
export class ModuleContentsModule { }
