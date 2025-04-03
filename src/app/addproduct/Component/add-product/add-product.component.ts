import { validateVerticalPosition } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
         new FormControl('',{ validators:[Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')], nonNullable:true})
    ]) 
  })

  constructor( private itemService:ItemService,
               private changeDetectorRef:ChangeDetectorRef
  ){}
  addItems(){
    const newItem = this.product.getRawValue() as any;
    this.itemService.AddedItemFromAPi(newItem).subscribe(val => {
        alert("Created successfully!");       
        this.onReset();
        // this.product.invalid;
        this.changeDetectorRef.markForCheck();

    });

    console.log(this.product.value)
  }

  onAfterAddingDisabled( val :string , control:AbstractControl<string, string> | null){
    if(control){
      if(val === 'focus'){
        control.enable()
      }else if (control.valid){
        control.disable()
      }

    } 
    this.changeDetectorRef.markForCheck();

  }

  onReset(){
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


  }
