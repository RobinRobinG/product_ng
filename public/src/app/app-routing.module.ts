import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListingComponent } from './products-listing/products-listing.component';
import { AddformComponent } from './addform/addform.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EditformComponent } from './editform/editform.component';

const routes: Routes = [
  { path: '', component: ProductsListingComponent },
  { path: 'add', component: AddformComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'products/edit/:id', component: EditformComponent },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
