import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

// indicates that the property value passes in from the component's parent, the product list component.
  @Input() product;
  
// allows this component to emit an event when the value of the notify property changes.
  @Output() notify = new EventEmitter();
  constructor() { }

// When the Angular CLI generates a new component, it includes an empty constructor, the OnInit interface, and the ngOnInit() method. 
  ngOnInit() {
  }

}