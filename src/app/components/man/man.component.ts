import { Component } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { ProductsService } from '../../core/services/products.service';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-man',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './man.component.html',
  styleUrl: './man.component.scss'
})
export class ManComponent {

  products:Product[]=[];
  constructor(private _ProductsService:ProductsService){
    
  }
  ngOnInit(): void {
    
    this._ProductsService.getProducts().subscribe({
      next:(data)=>{
        console.log(data);
        // this.products=data;
        this.products=data.filter((p:any)=>{
         return p.category=="men's clothing";
        })
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    
  }

}
