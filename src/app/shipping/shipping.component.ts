import { Component, OnInit } from '@angular/core';
import * as shipping from '../../assets/shipping.json';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingList;
  constructor() { }

  ngOnInit() {
    this.shippingList = JSON.parse(JSON.stringify(shipping)).default;
  }

}
