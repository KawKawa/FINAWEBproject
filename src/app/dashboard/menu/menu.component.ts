import { Component, OnInit } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  tabMenuItems: MenuItem[];
  private stateId: number;
  private id: number;
  selecteditem : number;
  
  ngOnInit() {
    
      this.tabMenuItems = [
        {label: 'Documents', icon: 'fa fa-file',
            command: (event: any) => {
            this.selecteditem=1;
                 }
        },
        {label: 'Search', icon: 'fa fa-search',
            command: (event: any) => {
              this.selecteditem=2;
                }
        },
        {label: 'Documentation', icon: 'fa-book',
            command: (event: any) => {
              this.selecteditem=3;
                 }
        },
        {label: 'Users', icon: 'fa fa-user',
            command: (event: any) => {
              this.selecteditem=4;
                 }
        }
    ];
  }
}
