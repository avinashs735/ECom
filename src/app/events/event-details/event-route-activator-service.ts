
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { EventService } from '../shared/events-service';

@Injectable({providedIn: 'root'})
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const eventexists = !!this.eventService.getEvent(+route.params ['id']);
    if (!eventexists) {
      this.router.navigate(['/404']);
      return eventexists;
    }
  }

}
