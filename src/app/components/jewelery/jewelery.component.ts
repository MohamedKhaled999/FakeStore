import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Product } from '../../core/interfaces/product';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-jewelery',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './jewelery.component.html',
  styleUrl: './jewelery.component.scss'
})
export class JeweleryComponent {

  products:Product[]=[];
  constructor(private _ProductsService:ProductsService){
    
  }
  ngOnInit(): void {
    
    this._ProductsService.getProducts().subscribe({
      next:(data)=>{
        console.log(data);
        // this.products=data;
        this.products=data.filter((p:any)=>{
         return p.category=="jewelery";
        })
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    
  }

}
