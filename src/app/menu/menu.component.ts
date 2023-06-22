import { Component, OnInit } from '@angular/core';
import { products, Product } from '../products';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  products: Array<Product> = products;
  items: Product[] = [];

  sortDown(){
    return products.sort(({price:a}, {price:b}) => b - a);
  }
  sortUp(){
    return products.sort(({price:a}, {price:b}) => a - b);
  }

  constructor(private cartService: CartService) { }

  addToCart(product: Product){
    Swal.fire({
      title: '<strong>Success!</strong>',
      icon: 'success',
      html:
        // doesn't work with routerLink
        '<a href="/cart" class="text-dark">Go to cart</a>',
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        'Continue shopping',
      confirmButtonColor: 'black'
    })
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
  }
}
