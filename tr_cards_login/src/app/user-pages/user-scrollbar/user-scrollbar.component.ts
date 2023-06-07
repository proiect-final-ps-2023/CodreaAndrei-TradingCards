import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-scrollbar',
  templateUrl: './user-scrollbar.component.html',
  styleUrls: ['./user-scrollbar.component.scss']
})
export class UserScrollbarComponent {

  constructor(private userService: UserService,
             private router: Router) {}

  logout(): void{
    console.log("logout clicked");
    this.userService.logout(BigInt(localStorage['id'])).subscribe((res: any) => {
      localStorage.clear();
    });
  }

}
