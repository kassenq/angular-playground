import { Component, OnInit} from '@angular/core';
import { Input } from '@angular/core';
import {Output, EventEmitter } from '@angular/core'; 

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product; // input() decorator means that the property value passes in from the component's parent, the product list component

  @Output() notify = new EventEmitter();
  // product alert component will be able to emit an event when the value of the notify property changes
  
  constructor() { }

  ngOnInit() {
  }

}