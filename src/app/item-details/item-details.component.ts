import { Component, OnInit } from '@angular/core';
import { ItemService } from '../Services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../Interface/items';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  id!: string; 
  isIdValid = true;
  item!:Item | null;


  constructor(
    private itemService: ItemService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.gettingValueFromIdValue();
  }
  gettingValueFromIdValue(){
    if(this.id){
      try{
        this.itemService.loadItemByIdFromApi(this.id).pipe(catchError((err : HttpErrorResponse) => of(err))).subscribe( resp =>{   
          // console.log(this.item);
          // this.isIdValid = true;
          if(resp.ok){
            this.item = resp.body;
            this.isIdValid = true;
          }else{
            this.item = null;
            this.isIdValid = false;
          }
        });
      }catch(e){
        this.isIdValid = false;
      }
    }
  }

}

//  
//
//