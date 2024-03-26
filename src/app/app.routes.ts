import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:'', 
        component: HomeComponent
    },
    {
        path:"about-component",
        loadComponent: () => import('./about/about.component').then((c) => c.AboutComponent)
    },
    {
        path:"product-component",
        loadComponent: () => import('./product/product.component').then((c) => c.ProductComponent),
        children:[
            {
                path:':id',
                loadComponent: () => import('./details/details.component').then((c) => c.DetailsComponent)
            },
        ]
        
    },
    {
        path:"contact-component",
        loadComponent: () => import('./contact/contact.component').then((c) => c.ContactComponent)
    },
];