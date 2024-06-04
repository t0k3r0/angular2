import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {
  public product: Product = new Product(0, "", 0, 0);

  public products: Product[] = [
    new Product(1, 'mobile lcd', 5, 50),
    new Product(2, 'port usb', 8, 30),
    new Product(3, 'b7000-glue', 6, 10),
    new Product(4, 'cable flex', 10, 30),
    new Product(5, 'mobile tool kit', 9, 25)

  ]

  deleteProduct2(product: Product) {
    this.products.forEach((p, index) => {
      if (p.code === product.code) {
        this.products.splice(index, 1);
      }
    });
  }

  addProduct() {
    this.products.push(this.product);
    this.product = new Product(0, "", 0, 0);
  }

  deleteProduct(product: Product) {
    this.products.forEach((p, index) => {
      if (p.code === product.code) {
        this.products.splice(index, 1);
      }
    });
  }


  modifyProduct() {
    var index = this.products.findIndex(p => p.code === this.product.code);
    if (index !== -1) {
      this.products[index] = this.product;
    }
    else {
      this.product = new Product(0, '', 0, 0);
    }

  }

  selectProduct(product: Product) {
    this.product = product;
  }


}

