import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Item } from 'src/app/Interface/items';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

  item!:Item | null;
  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: {id : number, item:Item}
  ) {

    this.item = this.data.item;
    console.log(this.item)

  }



  ngOnInit(): void {     
    //  this.gettingValueFromId();
  }

  // gettingValueFromId(){
  //   if(this.data.id){
  //     this.itemService.loadItemByIdFromApi(this.data.id+"").pipe(catchError((err:HttpErrorResponse ) => of(err))).subscribe(element =>
  //     {
  //       if(element.ok){
  //         this.item = element.body
  //       }})}
  //     console.log(this.data.id)
  //     }
}


