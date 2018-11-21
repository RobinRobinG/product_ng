import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  productId: Number;
  errors: any;

  constructor(  private _http: HttpService,
                private navigator: Router,
                private _route: ActivatedRoute
              ) {
                console.log('hitting product details constructor!');
               }

  ngOnInit() {
    this.product = {
      name: '',
      price: 0,
      qty: 0,
    };
    this._route.params.subscribe((params: Params) => {
      this.productId = params['id'];
      this.getProduct(this.productId);
    });
  }

  getProduct(id) {
    const obs = this._http.show(id);
    obs.subscribe(data => {
      this.product = data['data'];
      console.log(this.product);
    });
  }

  deleteProduct(id) {
    if (this.product.qty === 0) {
      console.log('delete pet!!!!!!!');
      this._http.delete(id).subscribe(data => data['data']);
      this.navigator.navigateByUrl('/');
    } else {
      this.errors = {message: 'You can only delete a product when qty is 0!', _message: 'Validation Error'};
      console.log(this.errors);
      return;
    }
  }

}



