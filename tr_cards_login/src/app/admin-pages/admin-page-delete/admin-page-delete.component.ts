import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-admin-page-delete',
  templateUrl: './admin-page-delete.component.html',
  styleUrls: ['./admin-page-delete.component.scss']
})
export class AdminPageDeleteComponent {
  id: any;
  user: any;


  constructor(private userService: UserService){

  }

  delete(){
    this.user = document.getElementById("delete");
    console.log("Id: " + this.user.value);
    this.userService.delete(this.user.value).subscribe();
  }

}
