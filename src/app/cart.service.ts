import { Injectable } from '@angular/core';
import { products, Product } from './products'; 

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = [];


  constructor() { }

  addToCart(product: Product) {
    if (this.cartItems.find(function(val) {return val.name == product.name})) {
      product.qtty++
    } else {
      this.cartItems.push(product);
    }
  }

  getItems(){
    return this.cartItems;
  }

  clearCart(){
    this.cartItems = [];
    return this.cartItems;
  }

  total(){
    let total: number = 0;
    for (let val of this.cartItems) {
      total = total + (val.price * val.qtty);
    }
    
    return Math.floor(total);
  }

  //functions for plus, minus, delete buttons in the cart
  plusQtty(i: number){
    this.cartItems[i].qtty++;
  }
  minusQtty(i: number){
    if(this.cartItems[i].qtty == 1){
      this.cartItems.splice(i, 1);
    } else{
      this.cartItems[i].qtty--;
    }
  }
  deleteQtty(i: number){
    this.cartItems[i].qtty = 1;
    this.cartItems.splice(i, 1);
  }
}
