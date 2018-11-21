import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  product: any;
  editProductForm: NgForm;
  productId: Number;
  errors: any;
  constructor(  private _http: HttpService,
                private navigator: Router,
                private _route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.product = {};
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

  onProductEditSubmit() {
    this._http.update(this.product._id, this.product).subscribe(data => {
      if (data['error']) {
        this.errors = data['error'];
        console.log('Error! ', data['error']);
      } else {
        console.log('product edit submitted!!', data);
        this.navigator.navigateByUrl('/');
      }
    });
  }
  resetProduct(id) {
    this.getProduct(this.productId);
    console.log(this.product);
  }


}
