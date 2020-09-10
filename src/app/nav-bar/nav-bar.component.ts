import { Component, OnInit, Input, } from '@angular/core';
import { ItemService } from '../Shared-service/app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() itemcount: any;
cartitemcount = 0;
dataFromAppComponent: any;
constructor(private socialService: ItemService) {
  this.socialService.getValue().subscribe(data => {
    console.log("nav hit");
    this.dataFromAppComponent = data;
    if (this.dataFromAppComponent) {
      this.cartitemcount++;
    }

  });
}

  ngOnInit() {
    // this.cartitemcount=this.itemcount;
    // console.log(this.itemcount);
  }

}
