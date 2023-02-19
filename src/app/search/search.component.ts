import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  queryValue: string = ''

  @Output() searchQuery:EventEmitter<string> = new EventEmitter<string>()

  onSearchQueryChanged(){
    this.searchQuery.emit(this.queryValue)
  }
}
