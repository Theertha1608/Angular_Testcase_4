import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        component: HomeComponent,
        path:'', 
    },
    {
        component: HomeComponent, 
        path:'home-component',
    },
    {
        component: AboutComponent,
        path:'about-component',
    },
    {
        component: ProductComponent,
        path:'product-component',
    },
    {
        component: ContactComponent,
        path:'contact-component',
    },
];
