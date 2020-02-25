import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

import { products } from '../products';
import { CartService } from '../cart.service'; 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product; 

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  } // this method uses cart service's addToCart method

  constructor(
    private route: ActivatedRoute, // specific to each routed component that the Angular Router loads.
    private cartService: CartService
  ) { }

  ngOnInit() {
    // subscribe to route params and fetch product based on productId. params = path variables defined in the route. URL provides the productId, which is used to display unique details abt the product
    this.route.paramMap.subscribe(params => { 
      this.product = products[+params.get('productId')];
    });
  }

}