import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { from } from 'rxjs';
import { UserService } from '../service/user.service'
import { LoginComponent } from '../login/login.component';
import { User } from '../model/User';

import * as JsonToXML from 'js2xmlparser';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],  
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        opacity: 0.8,
        backgroundColor: 'red'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})


export class OpenCloseComponent {
  isOpen = true;
  loginComponent: any | undefined;
  user: any | undefined;

  constructor(private userService: UserService,
              private router: Router,
              loginComponent: LoginComponent
              ) {this.loginComponent = loginComponent;}
  

  ngOnInit(){
    console.log("Merge1")
    console.log("Merge2")
  }

  async toggle() {
    this.isOpen = !this.isOpen;
    console.log("Toggle");
    console.log("Form username:" + this.loginComponent.username.value);
    console.log("Form password:" + this.loginComponent.password.value);

    function delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
    }
    await delay(2000);
    this.userService.login(this.loginComponent.username.value, this.loginComponent.password.value).subscribe((res: any) => {
      console.log(res.body);
      if (res.body != null) {
        // json to xml

        console.log(JsonToXML.parse("login-info", res.body));
        
        //const fs = require('fs');
        //fs.writeFileSync('./login-info.txt', JsonToXML.parse("login-info", res.body));
        

        localStorage.setItem('id', res.body.id);
        localStorage.setItem('username', res.body.username);
        if (res.body.role.toLowerCase() == "regular"){
          this.router.navigate(['user-page']);
          console.log("Successful login");
        }else if (res.body.role.toLowerCase() == "admin") {
          this.router.navigate(['admin-page']);
          console.log("Successful login");
        } 
      } else {
        console.log("Unsuccessful login");
      }
    });
    
  }

  getIsOpen(){
    return this.isOpen;
  }

}


