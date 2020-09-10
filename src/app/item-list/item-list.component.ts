import { Component, OnInit, ChangeDetectorRef, Input , Output, EventEmitter, AfterViewInit} from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';

declare var M: any;
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit, AfterViewInit {
@Input() FreshItemList: any;
@Output() Addproduct = new EventEmitter();
  images: Array<any> = [];
CategoryMale: Array<any> = [];
CategoryFemale: Array<any> = [];
durationInSeconds = 5;
message = 'Added to cart';
actionButtonLabel = '';
action = true;
setAutoHide = true;
autoHide = 2000;
horizontalPosition: MatSnackBarHorizontalPosition = 'center';
verticalPosition: MatSnackBarVerticalPosition = 'bottom';
addExtraClass = false;
  constructor(private cdr: ChangeDetectorRef, private snackBar: MatSnackBar) {
    this.images = [
      {},
      {},
      { name: 'https://source.unsplash.com/300x300/?perth,australia' },
      { name: 'https://source.unsplash.com/300x300/?fremantle,australia' },
      { name: 'https://source.unsplash.com/300x300/?west-australia' },
      { name: 'https://source.unsplash.com/300x300/?west-australia' },
      { name: 'https://source.unsplash.com/300x300/?fremantle,australia' },
      { name: 'https://source.unsplash.com/300x300/?perth,australia' },
      { name: 'https://source.unsplash.com/300x300/?quokka,perth' },
      { name: 'https://source.unsplash.com/300x300/?perth,australia' },
      { name: 'https://source.unsplash.com/300x300/?quokka,perth' },
      { name: 'https://source.unsplash.com/300x300/?perth,australia' },
      { name: 'https://source.unsplash.com/300x300/?quokka,perth' },
      { name: 'https://source.unsplash.com/300x300/?fremantle,australia' },
    ];

  }

  ngOnInit() {

    this.images = this.FreshItemList;
    this.CategoryMale = this.images.filter(event => event.category === 'Men' );
    this.CategoryFemale = this.images.filter(event => event.category === 'Women' );

  }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
  // AddCart(item) {
  //   open();
  //   //this.Addproduct.emit(item);
  // }
  AddCart(item) {
    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    // config. = this.addExtraClass ? ['test'] : undefined;
    this.snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);

    this.Addproduct.emit(item);
  }
}




