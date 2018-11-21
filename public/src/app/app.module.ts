import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListingComponent } from './products-listing/products-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddformComponent } from './addform/addform.component';
import { EditformComponent } from './editform/editform.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListingComponent,
    ProductDetailsComponent,
    AddformComponent,
    EditformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxCurrencyModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

