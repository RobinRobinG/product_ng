import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
  newProductForm: NgForm;
  product: any;
  errors: any;

  constructor(  private _http: HttpService,
                private navigator: Router
              ) {
                console.log('hitting add form constructor!');
              }

  ngOnInit() {
    this.product = {
      name: '',
      price: 0,
      qty: 0,
    };
  }

  onProductSubmit(newdata): void {
    console.log('adding a product...', newdata);
    this._http.add(newdata).subscribe( data => {
      if (data['error']) {
        this.errors = data['error'];
        console.log('Error on product submit! ', data['error']);
      } else {
        console.log('Product submitted!!', data);
        this.navigator.navigateByUrl('/');
      }
    });
  }
  resetProduct() {
    this.product = {
      name: '',
      price: 0,
      qty: 0,
    };
  }




}
