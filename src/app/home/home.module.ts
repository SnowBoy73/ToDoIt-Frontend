import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { StockExchangeRoutingModule } from './stock-exchange-routing.module';
import {HomeComponent} from './home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // StockExchangeRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    SharedModule,
  ]
})
export class HomeModule { }
