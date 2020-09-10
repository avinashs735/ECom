import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';


@Component({
  templateUrl: './create-event.html'
})
export class CreateEventComponent {
  newEvent ;
  startDate = new Date(1990, 0, 1);
  constructor(private router: Router, private eventService: EventService) {}
  saveEvent(formvalues){

    console.log(formvalues);
    this.eventService.saveEvent(formvalues);
    this.router.navigate(['/events']);
  }
  cancel() {
    // tslint:disable-next-line: no-unused-expression
    this.router.navigate(['/events']);

  }
}
