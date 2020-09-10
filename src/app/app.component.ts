import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemService } from './Shared-service/app.service';
import { CartService } from './cart/CartService/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APP-Ui';
  itemtotal = 3;
  dataPassed: any;
  subscription: Subscription;
  carttowish: Subscription;
  constructor(private ds: ItemService, private cartservice: CartService) {
    // subscribe to home component messages
    this.subscription = this.ds.getData().subscribe(x => {                  this.dataPassed = x;
                                                                            this.ds.setValue(this.dataPassed);

    });

    this.carttowish = this.cartservice.getWishData().subscribe(x => {
      this.dataPassed = x;
      console.log(this.dataPassed);
      this.cartservice.setWishValue(this.dataPassed);

    });

  };
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
