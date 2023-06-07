import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Market } from '../model/Market';

@Injectable({
    providedIn: 'root'
})

export class  MarketService{

    baseUrl: string = "http://localhost:8082/market";
    ownerDataStream: any;

    constructor(private httpClient: HttpClient){
        this.ownerDataStream = new BehaviorSubject<any>(null);
    }

    findAll(){
        return this.httpClient.get<Market[]>(this.baseUrl+"/all");
    }


}