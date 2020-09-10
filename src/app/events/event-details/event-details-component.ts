import { Component, OnInit, OnChanges } from '@angular/core';
import {EventService} from '../shared/events-service';
import { ActivatedRoute, Params } from '@angular/router';
import { Isession } from '../shared';

@Component({
  templateUrl: './event-details-component.html',
  styles: [
    `.container{margin:3%;padding:2%}
    img{width:100px;height:100px}
    `
  ]
})
export class EventDetailsComponent implements OnChanges {
  event: any;
  createmode = false;
  filterBy = 'all';
  visiblesessions: Isession[] = [];
  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

ngOnInit() {
  this.route.params.forEach((params: Params) => {
    this.event = this.eventService.getEvent(+params.id);
    this.createmode = false;
  });
  this.visiblesessions = this.event.sessions.slice(0);
}
ngOnChanges() {


this.filtersession(this.filterBy);

}
AddSession() {
  this.createmode = true;
}
Sessiondata(session: Isession) {
  const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
  session.id = nextId + 1;
  this.event.sessions.push(session);
  this.eventService.newSession(this.event);
  this.createmode = false;
}
filtersession(filter) {
      if ( filter === 'all') {
        this.visiblesessions = this.event.sessions.slice(0);
      }  else      {
        this.visiblesessions = this.event.sessions.filter(session => {
          return session.level.toLocaleLowerCase() === filter;
        });
      }

}
}
