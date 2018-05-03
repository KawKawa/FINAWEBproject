import { Component, OnInit } from '@angular/core';

import {UserListComponent} from '../user-list/user-list.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name : string 
  constructor() { }

  ngOnInit() {
  }

}
