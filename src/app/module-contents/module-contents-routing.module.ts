import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModHomeComponent } from './mod-home/mod-home.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  { path: '',
   component:ModHomeComponent,
   children: [{path: 'modal', component: ModalComponent}]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleContentsRoutingModule { }
