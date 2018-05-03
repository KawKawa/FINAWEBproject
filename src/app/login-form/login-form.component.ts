import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  names ='';
 
  constructor(private router:Router, private user:UserService) { }
  ngOnInit() {
    
  }
  loginUser(e) {
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
     this.names=  username;
     
   if(username ==  'admin' && password == 'admin') {
      this.user.setUserLoggedIn( );
  		this.router.navigate(['dashboard']);
    }//teste
    else if(username ==  'user' && password == 'user') {
      this.user.setUserLoggedIn( );
  		this.router.navigate(['notfound']);
    }
    
  }
  

}
