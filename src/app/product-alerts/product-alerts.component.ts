import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  // ! is the definite assertion operation, and tells the compiler that the property is sent even if TypeScript's analyses cannot detect so
  //@Input() product!: Product;
  //This seems to be syntactically equivalent to the '|' set symbol
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
