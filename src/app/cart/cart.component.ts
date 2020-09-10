import { Component, OnInit } from '@angular/core';
import { CartService } from './CartService/cart.service';
import { ItemService } from '../Shared-service/app.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user:number=0;
dataFromB;
  constructor(private cartService: CartService, private itemservice: ItemService, private route: Router) {
   }
  cartItemList: any;
  TotalAmount = 0;
  MoveToWishItem: any;


  ngOnInit() {
    this.getAllCartItemList();
  }
  MoveToWish(item) {
    this.MoveToWishItem = {
    UserId: 'Avi11',
    ProductCode: item.ProductCode,
    ItemCount: 1};

    this.cartService.sendToWishList(this.MoveToWishItem);

    this.cartService.RemoveFromCart(this.MoveToWishItem);
    this.getAllCartItemList();

    // this.route.navigate(['wishlist']);
  }
  RemoveFromCart(item) {
    this.MoveToWishItem = {
    UserId: 'Avi11',
    ProductCode: item.ProductCode,
    ItemCount: 1};
    //this.TotalAmount = this.TotalAmount - item.price;
    this.cartService.RemoveFromCart(this.MoveToWishItem);
    this.getAllCartItemList();
  }
  getAllCartItemList() {
    this.TotalAmount = 0 ;
    this.cartItemList = this.cartService.getCartProduct('Avi11');
    this.cartItemList.forEach(element => {
      this.TotalAmount = this.TotalAmount + (element.Quantity * element.price);
    });
  }
}
