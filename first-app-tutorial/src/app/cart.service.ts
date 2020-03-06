import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

  items = []; 

  constructor(
    private http: HttpClient
  ) { }

  addToCart(product) {
    this.items.push(product);
  } // appends product to array of items

  getItems() {
    return this.items;
  } // returns each item in cart w/ associated quantity

  clearCart() {
    this.items = [];
    return this.items; 
  } // returns empty array of items

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}