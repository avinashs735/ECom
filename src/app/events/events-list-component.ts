import { Component, OnInit } from '@angular/core';
import {EventService} from './shared/events-service';
// import {ToastrService} from '../common-files/toastr.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'events-list',
  templateUrl:  './events-list-component.html'
})
export class eventListComponent {

  //Inputevent: any = []; // aray declared for direct data
  Inputevent: any  ;       // for observables
  childsentdata: string;
  // handleEventClick(data) {
  //     this.childsentdata = data;
  //     console.log(data);
  //     console.log(' Y parent ' );
  // }
  constructor(private eventService: EventService,  private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.Inputevent = this.eventService.getEvents();    //returning data directly

    //using observable to return data:
    //this.eventService.getEvents().subscribe(Inputevent => {this.Inputevent = Inputevent ; });
//this.Inputevent = this.route.snapshot.data['events'];
console.log(this.Inputevent);
  }
  // handlethumbnailclick(eventName) {
  //   console.log(eventName);
  //   this.toastrService.success(eventName);
  // }
}
// function newFunction(): string {     //** not required as it is set to default route by angular routing
//   return 'events-list';
// }
