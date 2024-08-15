import { Component, Input } from '@angular/core';
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() item!:Product;
round(num:number):number{
  return Math.round(num);
}

}

