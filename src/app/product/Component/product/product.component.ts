import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, of } from 'rxjs';
import { Item } from 'src/app/Interface/items';
import { CartService } from 'src/app/Services/cart.service';
import { ItemService } from 'src/app/Services/item.service';
import { ViewProductComponent } from '../view-product/view-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() singleItem !: Item
  @Output() onDeleting = new EventEmitter()

  constructor( private cartService: CartService ,
              private itemService:ItemService,
              public dialog: MatDialog){}

ngOnInit(){
  console.log(this.singleItem.name)
}

  addToCart(){

    if(this.singleItem.inStock >0 ){
      this.cartService.addtoCart(this.singleItem)
      this.singleItem.inStock--
    }
        else{
          alert(" Not Available")
        }
  }

  delete(){

    if(this.singleItem.id){
     this.itemService.deletFromApi(this.singleItem.id).pipe(catchError((err : HttpErrorResponse) =>  of(err))).subscribe( resp =>{
      console.log(resp)

      if(resp.ok){
        alert("Successfully deleted");
        this.onDeleting.emit(true);
      }else{
        alert("Failed to delete")
      }
      

     })
    }

  }

  openDialog() {
    const dialogRef = this.dialog.open(ViewProductComponent, {
      data:{
        id : this.singleItem.id as number,
        item : this.singleItem
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

