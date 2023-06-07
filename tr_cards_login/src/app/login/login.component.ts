import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpenCloseComponent } from 'src/app/open-close/open-close.component'
import { from } from 'rxjs';
import { User } from '../model/User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  userList: User[] = [];
  ownerList: any;
  updateForm: FormGroup | undefined;
  username: any = null
  password: any = null

  openClose = new OpenCloseComponent(this.userService, this.router, this);
  isOpen = this.openClose.getIsOpen;
  

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void{
    localStorage.clear();
    this.userService.findAllUser().subscribe((res) => {
      console.log(res);
      this.userList = res;
    },
    (_error)=>{

    });


  
    this.cycleImages(0);
  }


  async cycleImages(slideIndex: number){
    try{
      //console.log("slideIndex1: " + slideIndex);
      var i = 0;
      var x = document.getElementsByClassName("login-imgs");
      
      for (i = 0; i < x.length; i++){
        x[i].setAttribute("style", "display: none;");
      }
      slideIndex = slideIndex + 1;
      //console.log("slideIndex2: " + slideIndex);
      //console.log("x.length: " + x.length);
      if (slideIndex == x.length) {slideIndex = 0}
      //console.log("slideIndex3: " + slideIndex);
      x[slideIndex].setAttribute("style", "display: block;");
      //setTimeout(this.cycleImages.bind(slideIndex), 2000);

      
      this.username = document.getElementById("username");
      this.password = document.getElementById("password");

      function delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
      }
      await delay(5000);
      this.cycleImages(slideIndex);
    } catch (e) {
      console.log(e);
    }
  }
   
   
    navigateRegister() {
      
      this.router.navigate(['register']);
    }


}


