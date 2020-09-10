import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ItemService } from '../Shared-service/app.service';
import { ActivatedRoute } from '@angular/router';
import {Iitem} from '../Shared-service/item.model';

@Component({
  selector: 'app-shop-container',
  // templateUrl: './shop-container.component.html',
  template: `
          <div class="col-md-12" style="margin-top: 2%;">
          <app-banner ></app-banner>
          </div>
        <!-- feature_part start-->
          <app-feature-section></app-feature-section>

        <!-- Item list Section -->
          <app-item-list [FreshItemList]="totalitemlist" (Addproduct)="AddToCart($event)" ></app-item-list>
          <app-footer></app-footer>
          `,
  styleUrls: ['./shop-container.component.css']
})
export class ShopContainerComponent implements OnInit {

totalitemlist: any;
msg1 = 'This is Star Trek';
msg2 = 'This is Star Wars';
  constructor(private itemService: ItemService,  private route: ActivatedRoute) { }

  ngOnInit() {
    this.totalitemlist = this.itemService.getEvents();
  // this.totalitemlist = this.route.snapshot.data['events'];

  }
  AddToCart(item) {
    this.itemService.sendData(item);
  }
  sendData() {
    this.itemService.sendData(this.msg2);
  }
}
