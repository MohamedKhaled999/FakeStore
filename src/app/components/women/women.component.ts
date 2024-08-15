import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Product } from '../../core/interfaces/product';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-women',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './women.component.html',
  styleUrl: './women.component.scss'
})
export class WomenComponent {

  
  products:Product[]=[];
  constructor(private _ProductsService:ProductsService){
    
  }
  ngOnInit(): void {
    
    this._ProductsService.getProducts().subscribe({
      next:(data)=>{
        console.log(data);
        // this.products=data;
        this.products=data.filter((p:any)=>{
         return p.category=="women's clothing";
        })
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    
  }

}
