import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.css']
})
export class ProductsListingComponent implements OnInit {
  products: any;
  constructor(  private _http: HttpService,
                private navigator: Router
              ) {
                console.log('hitting show all constructor!');
              }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    const obs = this._http.showall();
    obs.subscribe(data => {
      this.products = data['data'];
      console.log(this.products);
    });
  }


}
