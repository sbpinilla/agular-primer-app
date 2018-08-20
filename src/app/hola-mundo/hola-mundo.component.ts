import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import {DataService} from '../data.service';


@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  posts = [];
  constructor(private dataService: DataService) {

    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });

   }

  ngOnInit() {
  }

}
