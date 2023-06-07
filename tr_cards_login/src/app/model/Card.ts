import { Player } from "./Player";

export class Card{
    id: bigint | undefined;
    type: string | undefined;
    position: string | undefined;
    overall: number | undefined;
    minPrice: number | undefined;
    maxPrice: number | undefined;
    chance: number | undefined;
    player: Player | undefined;
    pace: number | undefined;
    dribbling: number | undefined;
    shooting: number | undefined;
    defending: number | undefined;
    passing: number | undefined;
    physical: number | undefined;
    color: string | undefined;
}