import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';
import { ItemService } from '../Shared-service/app.service';
import { ActivatedRoute, Params } from '@angular/router';
import { WishlistService } from './CheckoutService/wishlist.service';
import { CartService } from '../cart/CartService/cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
wishlistItem:any;

durationInSeconds = 5;
message = 'Added to cart';
actionButtonLabel = '';
action = true;
setAutoHide = true;
autoHide = 2000;
horizontalPosition: MatSnackBarHorizontalPosition = 'center';
verticalPosition: MatSnackBarVerticalPosition = 'bottom';
addExtraClass = false;
ItemAddedToWishList: any;
dataFromCartComponent:any;
  constructor(private wishlist: WishlistService, private snackBar: MatSnackBar,
              private itemservice: ItemService,
              private cartservice: CartService) {
this.cartservice.getWishValue().subscribe(data => {this.dataFromCartComponent = data;
console.log(this.dataFromCartComponent)});

   }

  ngOnInit() {
this.wishlistItem = this.wishlist.getWishItems('Avi11');

  }
  AddCart(item) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    // config. = this.addExtraClass ? ['test'] : undefined;
    this.snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);

    this.itemservice.sendData(item);
  }
}
