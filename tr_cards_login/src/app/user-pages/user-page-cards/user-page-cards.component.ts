import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../model/User'
import { Card } from '../../model/Card'
import { Player } from '../../model/Player'
import { UserService } from '../../service/user.service';
import { getPlayerInfo } from 'src/app/misc/getPlayerInfo';
import { CardInfo } from 'src/app/model/CardInfo';

@Component({
  selector: 'app-user-page-cards',
  templateUrl: './user-page-cards.component.html',
  styleUrls: ['./user-page-cards.component.scss']
})
export class UserPageCardsComponent implements OnInit, OnDestroy{
  id: any | undefined;
  user: User | undefined;
  ownedCards: Card[] = [];
  card: Card | undefined;
  cards: Card[] = []
  cardsInfo: CardInfo[] = [];
  player: Player | undefined;
  pageNr: number = 0;
  nrOfPages: number = 0;
  cardsPerPage: number = 10;
  getInfo = new getPlayerInfo();


  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.pageNr = 0;
    this.id = localStorage.getItem("id");
    this.userService.findById(this.id).subscribe((res) => {
      this.user = res;
      this.ownedCards = this.user.ownedCards;
      this.ownedCards = this.user.ownedCards.sort((a, b) => ((a.overall as number) > (b.overall as number) ? -1 : 1));
      this.nrOfPages = this.ownedCards.length / this.cardsPerPage;
      
      this.cardsInfo = this.getInfo.selectCards(this.ownedCards, this.nrOfPages, this.pageNr, this.cardsPerPage);
      console.log(this.cardsInfo);
     },
    (_error) => {

    });
  }

  ngOnDestroy(): void{
    this.cards = [];
    this.ownedCards = [];
  }

  applyCardStyles(k: number) {
    let url: string = "url(" + this.cardsInfo[k].cardColorPath + ")";
    const styles = {'background-image' : url};
    return styles; 
  }
  
  nextPage() {
    if (this.pageNr + 1 < this.nrOfPages){      
      this.pageNr++;
      console.log(this.pageNr);
      console.log(this.nrOfPages);
      this.cardsInfo = this.getInfo.selectCards(this.ownedCards, this.nrOfPages, this.pageNr, this.cardsPerPage);
    }
  }

  prevPage() {
    if (this.pageNr - 1 >= 0){
      this.pageNr--;
      this.cardsInfo = this.getInfo.selectCards(this.ownedCards, this.nrOfPages, this.pageNr, this.cardsPerPage);
    }
  }

}


