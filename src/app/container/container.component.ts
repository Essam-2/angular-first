import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { CommonModule, NgFor } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent, NgFor, CommonModule, ProductListComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  listOfString: string[] = ['Mark', ' Steve'];
  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }
}
