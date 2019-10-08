import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Item } from './item'
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cart: Item[]
  private subject = new Subject<any>();

  constructor(private http: HttpClient) {
  }

  findOneProduct(id) {
    return this.http.get('http://localhost:3000/products/' + id)
  }

  findAllProducts() {
    return this.http.get('http://localhost:3000/products')
  }

  findAll() {
    return localStorage.getItem('cart');
  }

  getCart(): Observable<any> {
    return this.subject.asObservable()
  }

  sendCart(cart) {
    this.subject.next(cart);
  }

  clearCart() {
    this.subject.next();
  }

}
