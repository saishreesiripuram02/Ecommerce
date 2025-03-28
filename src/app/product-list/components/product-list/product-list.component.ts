import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Interface/items';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent  implements OnInit{

   private items : Item[] = [];
   searchValue : string = ""
   isLoading = true;

  constructor( private itemService :ItemService, private changeDetectorRef : ChangeDetectorRef){

  }

  ngOnInit(): void {
  this.loadAllItems()
  }
    
  loadAllItems(){
    this.isLoading = true;
    
    this.itemService.loadAllItemsFromApi().subscribe( items =>{
      this.items = items;
      this.changeDetectorRef.markForCheck();
      this.isLoading = false;
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
