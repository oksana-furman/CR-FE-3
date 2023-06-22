import { Component, OnInit, Renderer2 } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';
import { Router } from '@angular/router'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  total : number = 0;

  checkoutForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phoneNum: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    comment: new FormControl('')
  });

  plusQtty(i: number){
    this.cartService.plusQtty(i);
    this.total = this.cartService.total()
  }
  minusQtty(i: number){
    this.cartService.minusQtty(i);
    this.total = this.cartService.total();
  }
  deleteQtty(i:number){
    this.cartService.deleteQtty(i);
    this.total = this.cartService.total();
  }

  constructor(private cartService: CartService, private renderer: Renderer2, private router: Router) { }
  error = document.getElementById("error") as HTMLElement;
  formDiv = document.getElementById("formDiv") as HTMLElement;
  onSubmit() {
    if (this.checkoutForm.valid) {
      let formVal: any = this.checkoutForm.value;
      Swal.fire({
        title: '<strong>Registration is complete</strong>',
        icon: 'info',
        html:
        `Dear ${this.checkoutForm.value.name}. thank your for your order. Please check delivery information: <br>
        Total price: ${ this.total} &#8364;.<br>
        Phone Number: ${this.checkoutForm.value.phoneNum}.<br>
        Delievery address: ${this.checkoutForm.value.address}.<br>
        Delivery time is approximately 1 hour.<br>
        <a href="/menu" class="text-dark">Back to menu</a>`,
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
          'Confirm',
        confirmButtonAriaLabel: 'Thumbs up, great!',

      })
      console.warn('Your order has been submitted', this.checkoutForm.value);
      this.cartItems = this.cartService.clearCart();
      this.checkoutForm.reset(); 
      setTimeout(() => {
        this.router.navigate(['/menu']);
      }, 5000);
    } else {
      this.error.style.color = "red";
      this.formDiv.style.border = "2px solid red";
      this.error.innerHTML = "Please provide some information in every input field!";
    }
  }


  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.total();

    const navbarLinks = document.querySelectorAll('.nav-link');
      navbarLinks.forEach(link => {
      this.renderer.setStyle(link, 'color', 'black');
    });
  }

}
