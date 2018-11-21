import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient) {
    console.log('hitting http service');
  }
   // show all
  showall() {
    console.log('hitting show all service');
    return this._httpClient.get('/api/products');
  }
  // show one
  show(id) {
    console.log('hitting show one service');
    return this._httpClient.get('/api/products/' + id);
  }
  // add
  add(data) {
    console.log(data + 'hitting add  service');
    return this._httpClient.post('/api/products/new', data);
  }
  // update
  update(id: string, data) {
    console.log(data + 'hitting update service');
    return this._httpClient.put('/api/products/' + id, data);
  }
  // delete
  delete(id: string) {
    console.log('hitting delete products service');
    return this._httpClient.delete('/api/products/' + id);
  }


}
