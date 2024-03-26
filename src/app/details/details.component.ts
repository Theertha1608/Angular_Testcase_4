import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  product: any; 

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id']; 
      this.product = ProductComponent.products.find(product => product.id === productId);
    });
  }

}

