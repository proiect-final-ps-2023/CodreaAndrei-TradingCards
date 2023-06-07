import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  username: any | undefined;
  id: any | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.id = localStorage.getItem("id");
    this.username = localStorage.getItem("username");
    console.log(this.username);
  }

  toLogin(){
    console.log("LogOut");
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
