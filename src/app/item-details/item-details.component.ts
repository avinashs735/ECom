import { Component, OnInit, ChangeDetectorRef, Input , Output, EventEmitter, AfterViewInit} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';
import { ItemService } from '../Shared-service/app.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  // selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
Product: any;
@Output() Addproduct = new EventEmitter();
durationInSeconds = 5;
message = 'Added to cart';
actionButtonLabel = '';
action = true;
setAutoHide = true;
autoHide = 2000;
horizontalPosition: MatSnackBarHorizontalPosition = 'center';
verticalPosition: MatSnackBarVerticalPosition = 'bottom';
addExtraClass = false;
  constructor(private itemservice: ItemService, private route: ActivatedRoute, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.Product = this.itemservice.getProductDetail(+params.id);
      console.log(this.Product );
    });

  }
  AddCart() {
    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    // config. = this.addExtraClass ? ['test'] : undefined;
    this.snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);
console.log(this.Product);

    this.itemservice.sendData(this.Product);
  }
}
