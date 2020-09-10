import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, AfterViewInit {
  BannerList: any = [];
  constructor(private cdr: ChangeDetectorRef) {
    this.BannerList = [{
      id: 1,
      image: '../../assets/Images/Banner/woodland1.jpg'
    }, {
      id: 2 ,
      image: '../../assets/Images/Banner/vans1.jpg'
    }, {
      id: 3,
      image: '../../assets/Images/Banner/BRAIN_DEAD_VANS_BANNER1.jpg'
    }, {
      id: 4,
      image: '../../assets/Images/Banner/banner_puma04.jpg'
    }, ];
  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
}
