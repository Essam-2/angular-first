import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [SearchComponent, NgFor, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  listOfString: string[] = ['Mark', ' Steve'];
}
