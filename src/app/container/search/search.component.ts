import { NgClass, NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText: string = '';

  //1- Create an event
  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput') searchInputEl: ElementRef;

  // onSearchTextChange(event: any) {
  //   this.searchTextChange.emit(this.searchText);
  // }

  updateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChange.emit(this.searchText);
  }
}
