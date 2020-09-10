import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {map} from 'rxjs/operators';
import {ItemService} from './app.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
 constructor(private eventService: ItemService){

 }
 resolve(){
  //  return this.eventService.getEvents().pipe(map(events => events));
  //return this.eventService.getEvents().pipe(map(events => events));
 }
}
