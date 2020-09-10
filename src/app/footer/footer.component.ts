import { Component, OnInit } from '@angular/core';
import { ItemService } from '../Shared-service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private socialService: ItemService, private router: Router) { }

  buttonClick() {
    this.socialService.setValue1("linked successfully");
    this.router.navigate(['/blog']);
  }
    ngOnInit() {
  }

}
