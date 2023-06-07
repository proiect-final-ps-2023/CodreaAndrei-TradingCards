import { Component, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent {

  message = "Send a message";
  subject = webSocket('ws://localhost:8889');
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void{
    this.getAllUsers();
  }

  sendToServer($event: any){
    this.subject.subscribe();
    this.subject.next(this.message);
    this.subject.complete();
  }

  getAllUsers(){
    this.userService.findAllUser().subscribe((res: any) => {
      this.users = res;
    });
  }

}
