import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Interface/items';
import { User } from 'src/app/Interface/user.model';
import { ItemService } from 'src/app/Services/item.service';
import { UserService } from 'src/app/Services/user-service/user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  private items: Item[] = [];
  searchValue: string = ""
  isLoading = true;
  user!:User

  constructor(private itemService: ItemService, private changeDetectorRef: ChangeDetectorRef,
       private userService:UserService
  ) {}

  ngOnInit(): void {
    this.loadAllItems()
    this.gettingName()
  }

  loadAllItems() {
    this.isLoading = true;
    this.itemService.loadAllItemsFromApi().subscribe(items => {
      this.items = items;
      this.isLoading = false;
      this.changeDetectorRef.markForCheck();
    })}

  searchingValues(searchValue: string) {
    this.searchValue = searchValue;
  }

  get myItems() {
    return this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchValue.toLowerCase())
    )}


  itemTrackBy(index: number, item: Item) {
    return item.id;
  }
 
gettingName(){
  this.userService.userDetails().subscribe( val =>{
    this.user = val
  })
}

}
