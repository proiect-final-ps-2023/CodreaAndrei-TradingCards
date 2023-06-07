import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from "../model/User";
import { Pack } from "../model/Pack";
;

@Injectable({
    providedIn: 'root'
})

export class PackService{
    
    baseUrl: string = "http://localhost:8082/pack";
    ownerDataStream: any; 

    constructor(private httpClient: HttpClient){
        this.ownerDataStream = new BehaviorSubject<any>(null);
    }

    findAll(){
        return this.httpClient.get<Pack[]>(this.baseUrl+"/all");
    }
    
}