import { AllProductsComponent } from './components/all-products/all-products.component';
import { Routes } from '@angular/router';
import { ManComponent } from './components/man/man.component';
import { WomenComponent } from './components/women/women.component';
import { JeweleryComponent } from './components/jewelery/jewelery.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    {path:"", redirectTo:"all",pathMatch:'full'},
    {path:"all",component:AllProductsComponent,title:"all products"},
    {path:"man",component:ManComponent,title:"man"},
    {path:"women",component:WomenComponent,title:"women"},
    {path:"jewelery",component:JeweleryComponent,title:"jewelery"},
    {path:"electronics",component:ElectronicsComponent,title:"electronics"},
    {path:"**",component:NotfoundComponent,title:"not found"},
];
