// import { Component,Input } from '@angular/core';

// @Component({
// selector: 'session-list',
// template: `
//   <div class="col-md-10">
//     <div class="well">
//         <h4>{{session.name}}</h4>
//         <h6>{{session.presenter}}</h6>
//         <span>Duration: {{session.duration}}</span><br />
//         <span>Level: {{session.level}}</span>
//         <p>{{session.abstract}}</p>
//     </div>
//   </div>
//   `
// })
// export class SessionComponent {
// @Input() session:any;
// }

import {Component, Input, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'session-list',
  templateUrl: './session-list-component.html'
})
export class EventSessionComponent {
  @Input()  session: any ;
  @Input() filterBy:string;

}
// function newFunction(): string {
//   return 'session-list';
// }


