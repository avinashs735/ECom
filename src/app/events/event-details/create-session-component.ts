import { Component,OnInit,Output,EventEmitter } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Isession} from '../shared/index';


@Component({
  selector:'create-session',
  templateUrl:'./create-session.html'
})
export class CreateSessionComponent{
  @Output() Sessiondata = new EventEmitter();
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  sessionForm: FormGroup;
  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('',[ Validators.required, Validators.maxLength(500)]);
    this.sessionForm = new FormGroup ({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract

    });

  }
  SaveSession(sessionobj){
      let session : Isession ={
        name: sessionobj.name,
        presenter: sessionobj.presenter,
        duration: +sessionobj.duration,
        level: sessionobj.level,
        abstract: sessionobj.abstract,
        id: undefined,
        voters: []
      }
      this.Sessiondata.emit(sessionobj)
  }
  Cancel(){}
}
