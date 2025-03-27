import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../Services/item.service';
import { catchError, of } from 'rxjs';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id !: string | null;
  isIdValid = false;

  product =  new FormGroup({
    name : new FormControl( "", [Validators.required]),
    description : new FormControl("", [Validators.required]),
    price : new FormControl<number>(0, [Validators.required]),
    inStock : new FormControl<number>(0, [Validators.required]),
  });

  constructor( private activatedRoute:ActivatedRoute,
    private itemService: ItemService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getProductDetails();
  }

  getProductDetails(){

    if(this.id){
        this.itemService.loadItemByIdFromApi(this.id).pipe(catchError(err => of(err))).subscribe(resp => {

          if(resp.ok){
            this.product.setValue({name:resp.body.name, price:resp.body.price, description:resp.body.description, inStock:resp.body.inStock});
            this.isIdValid = true;
          }
          else
            this.isIdValid = false;
        })
    }
  }

  updateItems(){ 

    if(this.id){
      let updateValue = this.product.value as any
      this.itemService.updateFromApi(this.id, updateValue).subscribe(resp => {
          if(resp.ok){
              alert("Succefully Updated");
              this.router.navigateByUrl("/")


          }else{
            alert("Failed to Update")
          }
      })
    }
  }


}
