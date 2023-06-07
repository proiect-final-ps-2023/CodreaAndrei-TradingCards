import { Card } from "./Card";
import { Market } from "./Market";

enum Type{
    REGULAR,
    ADMIN
}

export class User {
    id: bigint | undefined;
    username: string | undefined;
    name: string | undefined;
    password: string | undefined;
    balance: number | undefined;
    role: Type | undefined;
    ownedCards: Card[] = [];
    listing: Market[] = [];
    logged: number | undefined;
    lastBought: Card[] = [];
}