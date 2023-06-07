import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from "../model/User";
import { JsonPipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})

export class CardService {

    baseUrl: string = "http://localhost:8082/user";
    ownerDataStream: any;

    constructor(private httpClient: HttpClient){
        this.ownerDataStream = new BehaviorSubject<any>(null);
    }

    

}