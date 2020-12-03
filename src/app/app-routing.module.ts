import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'views', loadChildren: ()=> import('./views-contents/views-contents.module').then(m => m.ViewsContentsModule)},
  {path: 'elements', loadChildren: ()=> import('./main-elements/main-elements.module').then(m => m.MainElementsModule)},
  {path: 'collections', loadChildren: ()=> import('./collections/collections.module').then(m => m.CollectionsModule)},
  {path: 'modules', loadChildren: ()=> import('./module-contents/module-contents.module').then(m => m.ModuleContentsModule)},
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
