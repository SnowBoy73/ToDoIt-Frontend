import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {AddEditComponent} from './add-edit/add-edit.component';
import {DialogBoxComponent} from './dialog-box/dialog-box.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add-edit', component: AddEditComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full' },

  {path: 'dialog-box', component: DialogBoxComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
