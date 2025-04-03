import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  id !: string | null;
    isIdValid = false;
  
  
    product =  new FormGroup({
      name : new FormControl( "", {validators:[Validators.required], nonNullable:true}),
      description : new FormControl("", {validators:[Validators.required], nonNullable:true}),
      price : new FormControl<number>(0, {validators:[Validators.required], nonNullable:true}),
      inStock : new FormControl<number>(0, {validators:[Validators.required], nonNullable:true}),
       availableColors : new FormArray([
               new FormControl('',{ validators:[Validators.required], nonNullable:true})
          ]) 
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
          this.itemService.loadItemByIdFromApi(this.id).pipe(catchError((err : HttpErrorResponse) => of(err))).subscribe(resp => {
  
            if(resp.ok){
  
              const item = resp.body;
  
              if(item){
             
                if(item?.availableColors.length > 1){
                 
                  for(let i=1; i< item?.availableColors.length;i++){
                   this.onAddingColor();
                  }
    
                }
  
                this.product.setValue({
                  name: item.name, 
                  price: item.price, 
                  description: item.description, 
                  inStock: item.inStock,
                  availableColors:item.availableColors
                });
    
              }
  
              this.isIdValid = true;
            }
            else
              this.isIdValid = false;
          })
      }
    }
  
    updateItems(){ 
  
      if(this.id){
        let updateValue = this.product.getRawValue() as any
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
    get colors(){
      return (this.product.get('availableColors') as FormArray).controls
    }
    onAddingColor(){
      let addingColor  = this.product.get('availableColors')  as FormArray  
  
     if(addingColor){
      addingColor.push(    
        new FormControl('',{ validators:[Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')], nonNullable:true})
      )
   
     }
    }
  
    onDeleting(index: number) {
      const availableColorsCtrls = this.product.get('availableColors') as FormArray;
      if (availableColorsCtrls && availableColorsCtrls.length > index) {
        availableColorsCtrls.removeAt(index);
      }
    }
  
  }
  


