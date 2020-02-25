import { Component, OnInit } from '@angular/core';
import { FormBuilder } '@angular/forms'; 

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm; // defined to store the form model

  constructor(
    private cartService: CartService, // inject CartService so cart component can use it
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '', 
      address: ''
    });
   }

  ngOnInit() {
    this.items = this.cartService.getItems(); 
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData); 
  }
}