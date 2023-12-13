import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  // name = 'John Doe';
  addToCart: number = 0;
  product = {
    name: 'iPhone X',
    price: 999,
    color: 'Red',
    discount: 8.2,
    inStock: 5,
    PImage: '/assets/images/iphone.png',
  };

  getDiscountedPrice() {
    return (
      this.product.price - (this.product.price * this.product.discount) / 100
    );
  }

  decrementCartValue() {
    if (this.addToCart === 0) return;
    this.addToCart--;
  }

  incrementCartValue() {
    if (this.addToCart >= this.product.inStock) return;
    this.addToCart++;
  }

  // onNameChange(event: any) {
  //   this.name = event.target.value;
  // }
}
