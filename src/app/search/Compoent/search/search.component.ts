import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {                  

  @Output() searchValue = new EventEmitter<string>()

  searchingValue( val : string){
    this.searchValue.emit(val)
  }

}