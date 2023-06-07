import { Directive, Renderer2, ElementRef, OnInit, HostListener, Input } from '@angular/core';
import { getPlayerInfo } from 'src/app/misc/getPlayerInfo';
import { Card } from 'src/app/model/Card';
import { CardInfo } from 'src/app/model/CardInfo';



@Directive({
  selector: '[appShowCards]'
})


export class ShowCardsDirective implements OnInit {

  getInfo = new getPlayerInfo();
  cardsInfo: CardInfo[] = [];
  nrOfPages: number = 1;
  pageNr: number = 0;
  cardsPerPage: number = 10;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @Input() appShowCards: Card[] | undefined;
  
  @HostListener('click') onClick() {
    //this.el.nativeElement.style.display = 'none';
    const children = this.el.nativeElement.children;
    for (let i = 0; i < children.length; i++)
    {
      this.renderer.removeChild(this.el.nativeElement, children[i]);
    }
    
    this.cardsInfo = this.getInfo.selectCards(this.appShowCards!, this.nrOfPages, this.pageNr, this.cardsPerPage);


    console.log('Directive last bought: ' + this.appShowCards);
    this.cardsInfo = this.getInfo.selectCards(this.appShowCards!, this.nrOfPages, this.pageNr, this.cardsPerPage);
    
    const main = this.renderer.createElement('main');
    //this.renderer.setStyle(main, 'position', 'relative');
    //this.renderer.setStyle(main, 'width', '100%');
    //this.renderer.setStyle(main, 'margin', '0px auto');
    const cardContainer = this.renderer.createElement('div');
    this.renderer.addClass(cardContainer, 'card-container');
    //this.renderer.setStyle(cardContainer, 'display', 'flex');
    //this.renderer.setStyle(cardContainer, 'flex-wrap', 'wrap');
    //this.renderer.setStyle(cardContainer, 'justify-content', 'center');
    const divPlayerCard = this.renderer.createElement('div');
    this.renderer.addClass(divPlayerCard, 'player-card');
    this.renderer.appendChild(this.el.nativeElement, main);
    this.renderer.appendChild(main, cardContainer);
    this.renderer.appendChild(cardContainer, divPlayerCard);
    for (let i = 0; i < this.cardsInfo.length; i++) {
      const div = this.renderer.createElement('div');
      this.renderer.setStyle(div, 'filter', 'drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.3))');
      this.renderer.setStyle(div, 'width', '260px');
      this.renderer.setStyle(div, 'margin-left', 'auto');
      this.renderer.setStyle(div, 'margin-right', 'auto');
      this.renderer.appendChild(divPlayerCard, div);
      const divCardCardColor = this.renderer.createElement('div');
      this.renderer.addClass(divCardCardColor, 'card');
      this.renderer.addClass(divCardCardColor, 'card-color'); 
      this.renderer.setStyle(divCardCardColor, 'background-image', this.applyCardStyles(i));
      this.renderer.appendChild(div, divCardCardColor);
      const divFace = this.renderer.createElement('div');
      this.renderer.addClass(divFace, 'face');
      this.renderer.appendChild(divCardCardColor, divFace);
      const divFaceInner = this.renderer.createElement('div');
      this.renderer.addClass(divFaceInner, 'face-inner');
      this.renderer.appendChild(divFace, divFaceInner);
      const imgFace = this.renderer.createElement('img');
      console.log("facePath: " + this.cardsInfo[i].facePath);    
      this.renderer.setAttribute(imgFace, 'src', this.cardsInfo[i].facePath as string);
      this.renderer.setAttribute(imgFace, 'alt', 'no face');
      this.renderer.appendChild(divFaceInner, imgFace);
      const divBadge = this.renderer.createElement('div');
      this.renderer.addClass(divBadge, "badge");
      this.renderer.appendChild(divCardCardColor, divBadge);
      const imgBadge = this.renderer.createElement('img');
      this.renderer.addClass(imgBadge, 'badge-img');
      this.renderer.setAttribute(imgBadge, 'src', this.cardsInfo[i].badgePath as string);
      this.renderer.appendChild(divBadge, imgBadge);

      const divFlag = this.renderer.createElement('div');
      this.renderer.addClass(divFlag, 'flag');
      this.renderer.appendChild(divCardCardColor, divFlag);

      const imgFlag = this.renderer.createElement('img');
      this.renderer.addClass(imgFlag, 'flag-img')
      this.renderer.setAttribute(imgFlag, 'src', this.cardsInfo[i].flagPath as string);
      this.renderer.appendChild(divFlag, imgFlag);

      //const div
    
    }
  }

  ngOnInit(): void {
  }

  applyCardStyles(k: number) {
    let url: string = 'url(' + this.cardsInfo[k].cardColorPath + ')';
    console.log('Color path: ' + this.cardsInfo[k].cardColorPath);
    return url; 
  }

}
