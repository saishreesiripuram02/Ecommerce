import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Interface/items';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit{

   private items : Item[] = [];
   searchValue : string = ""

  constructor( private itemService :ItemService ){

  }

  ngOnInit(): void {
  this.loadAllItems()
  }
    
  loadAllItems(){
    this.itemService.loadAllItemsFromApi().subscribe( items =>{
      this.items = items;
      
    })
  }

  searchingValues(searchValue : string){
      this.searchValue = searchValue;
  }
  
  get myItems(){
    return this.items.filter( item => 
      item.name.toLowerCase().includes(this.searchValue.toLowerCase())
    )
  }

}
