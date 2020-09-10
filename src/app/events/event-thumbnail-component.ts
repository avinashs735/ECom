import {Component, Input, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events',event.id]" class="well howerwell thumbnail">
        {{event?.name|uppercase}}<br/>
        <label>Event date:</label>&nbsp;&nbsp;&nbsp;{{event?.date}}<br/>
         <div [ngClass]="{green: event?.time=='8:00 am'}" [ngSwitch]="event?.time">
         <label>Event time:</label>&nbsp;&nbsp;&nbsp;{{event?.time}} &nbsp;&nbsp;
          <label *ngSwitchCase="'8:00 am'">( Early )</label>
          <label *ngSwitchCase="'9:00 am'">( Normal )</label>
          <label *ngSwitchCase="'10:00 am'">( Late )</label>
          <label *ngSwitchDefault>Unknown delay</label>
        </div>
        <label>Price:</label>&nbsp;&nbsp;&nbsp; &nbsp;{{event?.price | currency:'USD'}}<br/>
        <div *ngIf="event?.location.city"><label>City:</label>&nbsp;&nbsp;&nbsp;{{event.location.city}}<br/></div>
        <div *ngIf="event?.location?.state"><label>State:</label>&nbsp;&nbsp;&nbsp;{{event.location.state}}<br/></div>
        <!-- <button class="btn btn-primary" (click)="clickme()"> Click me !!</button> -->
  </div>
  `,
  styles: [`
    .thumbnail {min-height:100px}
    .thumbnail label{       font-size:17px;     }
    .green label{
      color:green;
    }
  `
  ]
})
export class EventThumbnailComponent {
  @Input()  event: any ;
  // @Output() eventClick = new EventEmitter();
  // clickme() {
  //   this.eventClick.emit (this.event.Name);

  // }
  // logfoo(){
  //   console.log ('fooooooooo...........');
  // }
}
// function newFunction(): string {
//   return 'event-thumbnail';
// }

