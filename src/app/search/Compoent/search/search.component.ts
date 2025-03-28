import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {     
             
  @Input() isLoading : boolean = false
  @Output() searchValue = new EventEmitter<string>()

  searchingValue( val : string){
    this.searchValue.emit(val)
  }

}