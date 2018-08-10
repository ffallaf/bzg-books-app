import { Component, OnInit, Input } from '@angular/core';
import { User } from "firebase";

@Component({
  selector: 'app-top-aside-left',
  templateUrl: './top-aside-left.component.html',
  styleUrls: ['./top-aside-left.component.styl']
})
export class TopAsideLeftComponent implements OnInit {

  @Input() user: User;
  today: Date;

  constructor() { 
    this.today = new Date();
  }

  ngOnInit() {
  }

}
