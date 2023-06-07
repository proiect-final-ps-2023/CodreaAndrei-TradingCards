import { Card } from "./Card";
import { Player } from "./Player";

export class CardInfo {
    card: Card | undefined;
    cardIndex: number | undefined;
    player: Player | undefined;
    cardColor: string | undefined;
    cardColorPath: string | undefined;
    facePath: string | undefined;
    teamId: number | undefined;
    badgePath: string | undefined;
    code: string | undefined;
    flagPath: string | undefined;
    playerName: string = "";
}