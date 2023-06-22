import { Component, OnInit, Renderer2 } from '@angular/core';
import { products, Product } from '../products';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  product: Product = {} as Product;
  id: number = 0;

constructor(private route: ActivatedRoute, private cartService: CartService, private renderer: Renderer2) { }

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
  });
  this.cartService.addToCart(product);
}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = products[this.id];
    });

    const navbarLinks = document.querySelectorAll('.nav-link');
      navbarLinks.forEach(link => {
      this.renderer.setStyle(link, 'color', 'black');
    });
  }
}
