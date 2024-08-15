import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Product } from '../../core/interfaces/product';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.scss'
})
export class ElectronicsComponent {

  
  products:Product[]=[];
  constructor(private _ProductsService:ProductsService){
    
  }
  ngOnInit(): void {
    
    this._ProductsService.getProducts().subscribe({
      next:(data)=>{
        console.log(data);
        // this.products=data;
        this.products=data.filter((p:any)=>{
         return p.category=="electronics";
        })
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    
  }


}
