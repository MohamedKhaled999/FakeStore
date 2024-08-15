import { ProductsService } from './../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit {

  products:Product[]=[];
  constructor(private _ProductsService:ProductsService){
    
  }
  ngOnInit(): void {
    
    this._ProductsService.getProducts().subscribe({
      next:(data)=>{
        console.log(data);
        this.products=data;
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    
  }



}
