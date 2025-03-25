import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/Interface/items';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
   
  product =  new FormGroup({
    name : new FormControl( "", [Validators.required]),
    description : new FormControl("", [Validators.required]),
    price : new FormControl("", [Validators.required])
  })

  constructor( private itemService:ItemService){

  }
  addItems( ){
    const newItem = this.product.value as any;
    this.itemService.AddedItemFromAPi(newItem).subscribe(val => {
        alert("Created successfully!");
        this.product.reset();
    });
  }
}
