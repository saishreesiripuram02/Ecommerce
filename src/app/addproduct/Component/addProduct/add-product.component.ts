import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartItem } from 'src/app/Interface/cart-item';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AddProductComponent {
  id!:CartItem
  product =  new FormGroup({
    name : new FormControl( "", {validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')], nonNullable:true}),
    description : new FormControl("",   {validators:[Validators.required], nonNullable:true}),
    price : new FormControl("",   {validators:[Validators.required], nonNullable:true}),
    inStock : new FormControl("",   {validators:[Validators.required], nonNullable:true}),
    availableColors : new FormArray([
         new FormControl("",{ validators:[Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')], nonNullable:true})
    ]) 
  })

  constructor( private itemService:ItemService,
               private changeDetectorRef:ChangeDetectorRef
  ){}
  addItems(){
    const newItem = this.product.getRawValue() as any;
    this.itemService.AddedItemFromAPi(newItem).subscribe(val => {
        alert("Created successfully!");       
     this.onReset()
        // this.product.invalid;
        this.changeDetectorRef.markForCheck();

    });

  }



  onReset(){
    const availableColorsCtrls = this.product.get('availableColors') as FormArray;

    if(availableColorsCtrls && availableColorsCtrls.length > 1){
      availableColorsCtrls.controls.splice(1);
    }

    this.product.reset();
    this.product.enable(); 
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
