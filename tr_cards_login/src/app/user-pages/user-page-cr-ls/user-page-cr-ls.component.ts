import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { Card } from '../../model/Card';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-page-cr-ls',
  templateUrl: './user-page-cr-ls.component.html',
  styleUrls: ['./user-page-cr-ls.component.scss']
})
export class UserPageCrLsComponent implements OnInit{
  
  id: any | undefined;
  user: User | undefined;
  ownedCards: Card[] = [];
  price: any;

  constructor(private userService: UserService) {}
  
  ngOnInit(): void {
    
    this.id = localStorage.getItem("id");
    this.userService.findById(this.id).subscribe((res) => {
      this.user = res;
      this.ownedCards = this.user.ownedCards.sort((a, b) => ((a.overall as number) > (b.overall as number) ? -1 : 1));
    },
    (_error) => {

    });
  }

  createListing(card_id: any){
    this.price = document.getElementById("price")
    console.log(this.price.value);

    this.userService.createListing(this.id, card_id, this.price.value).subscribe();

    this.userService.findById(this.id).subscribe((res) => {
      this.user = res;
      this.ownedCards = this.user.ownedCards;
    },
    (_error) => {

    });
  }
}
