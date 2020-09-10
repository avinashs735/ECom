import { Component, OnInit } from '@angular/core';
import { ItemService } from '../Shared-service/app.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  dataFromB: any;
  constructor(private socialService: ItemService) {
    this.socialService.getValue1().subscribe(data=>{
      this.dataFromB = data;
      console.log('Trigger from footer');
      console.log(data);
    })
  }

  ngOnInit() {
  }

}
