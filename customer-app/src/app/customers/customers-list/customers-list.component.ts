import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {

    private _customers: ICustomer[] = []; // backing datastore

    // make an input property to know when customers are coming into the property
    // @Input() customers: any[]; @Input is a decorator. Like DOM binding, it allows us to pass people into customers.component.html

    @Input() get customers(): ICustomer[] {
      return this._customers;
    }

    set customers(value: ICustomer[]) {
      if (value) {
        this.filteredCustomers = this._customers = value; // when you get the customers, filteredCustomers will also have the value
        this.calculateOrders(); // will iterate through the customers (and do something w/ them)
      }
    }


    filteredCustomers: any[] = [];
    customersOrderTotal: number;
    currencyCode: string = 'USD';

    constructor() {}

    ngOnInit() {

    }

    // ngOnChanges(changes: SimpleChanges) {
    // }

    calculateOrders() {
      this.customersOrderTotal = 0; // initialize order total to 0
      this.filteredCustomers.forEach((cust: ICustomer) => { // loop through filtered customers using for each, add that order to order total
          this.customersOrderTotal += cust.orderTotal;
      });
  }

  sort(prop: string) {
    // A sorter service will handle the sorting
  }

}
