import { Component, OnInit } from '@angular/core';
import { Market } from '../../model/Market';
import { MarketService } from '../../service/market.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-page-buy-ls',
  templateUrl: './user-page-buy-ls.component.html',
  styleUrls: ['./user-page-buy-ls.component.scss']
})
export class UserPageBuyLsComponent implements OnInit{
    
  id: any | undefined;
  listings: Market[] = [];
  price: any;

  constructor(private marketService: MarketService,
              private userService: UserService) {}
  
  ngOnInit(): void {
    
    this.id = localStorage.getItem("id");
    this.marketService.findAll().subscribe((res) => {
      this.listings = res;
    },
    (_error) => {

    });
  }

  buyListing(listing_id: any){
    this.userService.buyListing(this.id, listing_id).subscribe();
    window.location.reload();
  }

}
