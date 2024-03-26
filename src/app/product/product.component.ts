import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  static products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 24.99 },
  ];

  getProducts(){
    return ProductComponent.products;
  }
}
