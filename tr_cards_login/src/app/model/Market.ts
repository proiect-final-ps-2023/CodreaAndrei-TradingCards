import { Card } from "./Card";

export class Market{
    id: bigint | undefined;
    ownerId: bigint | undefined;
    card: Card | undefined;
    price: number | undefined;
}