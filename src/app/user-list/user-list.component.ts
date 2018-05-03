import { Component, OnInit } from '@angular/core';
import { Iuser } from './user';
import { userFilterPipe} from './user-filter.pipe';
import {InputTextModule} from 'primeng/inputtext';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers : [userFilterPipe]
})
export class UserListComponent implements OnInit {
  titel : string = "User List ";
  imgwidth :number =20;
  igmmargin : number =2;
  Showimguser : boolean =false ; 
  filter : string=''; 
 listeusers : Iuser[] = [// teste 
   {
    "userid" : 1,
    "name": "bella",
    "username" : "BELLA",
    "pwd" : "mo" , 
    "userimageurl": "http://www.clker.com/cliparts/5/d/1/e/1370391880452134127business_users-1.png"
   },
   {
    "userid" : 2,
    "name": "pp",
    "username" : "pp",
    "pwd" : "mo" , 
    "userimageurl": "http://www.clker.com/cliparts/5/d/1/e/1370391880452134127business_users-1.png"
   }
   ,
   {
    "userid" : 3,
    "name": "karima",
    "username" : "Karima",
    "pwd" : "mo" , 
    "userimageurl": "http://www.clker.com/cliparts/5/d/1/e/1370391880452134127business_users-1.png"
   }
   ,
   {
    "userid" : 4,
    "name": "kaoutar",
    "username" : "kaoutar",
    "pwd" : "mo" , 
    "userimageurl": "http://www.clker.com/cliparts/5/d/1/e/1370391880452134127business_users-1.png"
   }
 ];
  constructor() {

   }
toggleimg():void
{
  this.Showimguser = !this.Showimguser;
}
  ngOnInit() {
    
  }

}
