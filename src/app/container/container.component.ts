import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { CommonModule, NgFor } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    SearchComponent,
    NgFor,
    CommonModule,
    ProductListComponent,
    ProductDetailComponent,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', ' Steve'];
  searchText: string = '';

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  setSearchText(value: string) {
    this.searchText = value;
  }
}
