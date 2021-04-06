import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CommonModule} from '@angular/common';
import {AddEditComponent} from './add-edit/add-edit.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'add-edit', component: AddEditComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
