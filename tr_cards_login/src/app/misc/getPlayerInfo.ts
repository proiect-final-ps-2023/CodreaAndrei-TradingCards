import { Card } from "../model/Card";
import { CardInfo } from "../model/CardInfo";
import { Player } from "../model/Player";
import teamsJson from '../../assets/clubs/clubs.json'
import countriesJson from '../../assets/nations/countries.json'

export class getPlayerInfo {

    facesPath: string = "../../assets/faces/";
    badgesPath: string = "../../assets/clubs/png140px/";
    flagsPath: string = "../../assets/nations/png100px/";
    
    teamToID(teamName: string = ""): number{
        return teamsJson.find((t) => t.Name == teamName)?.ID as number;
    }
    
    nationalityToCode(nationality: string = ""): string{
        if (countriesJson[nationality as keyof typeof countriesJson] != undefined){
          return countriesJson[nationality as keyof typeof countriesJson].toLowerCase();
        }
        return "null";
      }
    

    selectCards(ownedCards: Card[], nrOfPages: number, pageNr: number, 
        cardsPerPage: number): CardInfo[] {
            let cardsInfo: CardInfo[] = [];
            console.log("ownedCards.length: " + ownedCards.length);
            console.log("nrOfPages: " + nrOfPages);
            console.log("pageNr: " + pageNr);
            if (pageNr < nrOfPages){
              let k = 0;
              
              for (let i = 0; i < cardsPerPage; i++){
                
                if(i == ownedCards.length){
                  break;
                }
                console.log("!!!!" + ownedCards[pageNr * cardsPerPage + i].player?.name);
                cardsInfo[k] = new CardInfo;
                cardsInfo[k].card = ownedCards[pageNr * cardsPerPage + i] ?? {};
                
                //change cardIndex
                cardsInfo[k].cardIndex = k;
                //get player
                cardsInfo[k].player = cardsInfo[k].card?.player as Player;
                //get card color
                cardsInfo[k].cardColor = cardsInfo[k].card?.color as string;
                cardsInfo[k].cardColorPath = "../../assets/cards/" + cardsInfo[k].cardColor + ".png";
                console.log(cardsInfo[k].cardColorPath);
                // get face based on id
                cardsInfo[k].facePath = this.facesPath + cardsInfo[k].card?.id?.toString() as string + "-" + cardsInfo[k].card?.player?.name + ".png";
                console.log(cardsInfo[k].facePath);
                // get badge based on id
                cardsInfo[k].teamId = this.teamToID(cardsInfo[k].card?.player?.team);
                console.log("Team name: " + cardsInfo[k].card?.player?.team);
                console.log("Team id: " + cardsInfo[k].teamId);
                cardsInfo[k].badgePath = this.badgesPath + cardsInfo[k].teamId + ".png";
                // get flag based on id
                cardsInfo[k].code = this.nationalityToCode(cardsInfo[k].card?.player?.nationality);
                console.log("Nationality: " + cardsInfo[k].card?.player?.nationality);
                console.log("Code: " + cardsInfo[k].code);
                cardsInfo[k].flagPath = this.flagsPath + cardsInfo[k].code + ".png";
                // get player name
                cardsInfo[k].playerName = cardsInfo[k].card?.player?.name as string;
                if (cardsInfo[k].playerName.length > 10){
                    cardsInfo[k].playerName = cardsInfo[k].playerName.slice(0, 10) + ".";
                }
                k++;
              }
            }
            return cardsInfo;
    }
}