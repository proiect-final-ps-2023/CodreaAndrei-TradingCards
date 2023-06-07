import { Card } from "./Card";

export class Pack{
    id: bigint | undefined;
    name: string | undefined;
    description: string | undefined;
    price: number | undefined;
    size: number | undefined;
    cardList: Card[] = [];
}