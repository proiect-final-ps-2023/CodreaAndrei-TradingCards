import { Component, Renderer2, ElementRef } from '@angular/core';
import { Pack } from '../../model/Pack';
import { PackService } from '../../service/pack.service'; 
import { UserService } from '../../service/user.service';
import { User } from 'src/app/model/User';
import { ShowCardsDirective } from './show-cards/show-cards.directive';
import { getPlayerInfo } from 'src/app/misc/getPlayerInfo';
import { CardInfo } from 'src/app/model/CardInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page-packs',
  templateUrl: './user-page-packs.component.html',
  styleUrls: ['./user-page-packs.component.scss']
})
export class UserPagePacksComponent {
  id: any | undefined;
  pack: Pack | undefined;
  packs: Pack[] = [];
  gold_id: bigint | undefined;
  silver_id: bigint | undefined;
  bronze_id: bigint | undefined;
  user: User | undefined;
  test: number[] = [1, 2, 3, 4]
  getInfo = new getPlayerInfo();
  cardsInfo: CardInfo[] = [];
  nrOfPages: number = 1;
  pageNr: number = 0;
  cardsPerPage: number = 10;

  constructor(private packService: PackService,
              private userService: UserService,
              private router: Router) {}

  ngOnInit(): void {
    this.id = localStorage.getItem("id");
    this.packService.findAll().subscribe((res) => {
      this.packs = res;
      this.packs.sort((a, b) => (((a.id as bigint) - (b.id as bigint)) as unknown) as number);
      console.log(this.packs);
      this.gold_id = this.packs[0].id;
      this.silver_id = this.packs[1].id;
      this.bronze_id = this.packs[2].id;
    },
    (_error) => {

    });

    this.userService.findById(this.id).subscribe((res) => {
      this.user = res;
    },
    (_error) => {

    });
  }

  applyCardStyles(k: number) {
    let url: string = "url(" + this.cardsInfo[k].cardColorPath + ")";
    const styles = {'background-image' : url};
    return styles; 
  }

  buyPack(id_pack: any) {
    console.log("id_pack: " + id_pack);
    this.userService.buyPack(this.id, id_pack).subscribe();
    this.cardsInfo = this.getInfo.selectCards(this.user?.lastBought!, this.nrOfPages, this.pageNr, this.cardsPerPage);
    let x = document.getElementsByClassName("pack-container");
    x[0].setAttribute("style", "display: none");
    x = document.getElementsByClassName("card-container");
    x[0].setAttribute("style", "display: flex");
    console.log("Last bought" + this.user?.lastBought);
  }

  prevPage() {
    console.log("PRESS!");
    location.reload();
  }

}
