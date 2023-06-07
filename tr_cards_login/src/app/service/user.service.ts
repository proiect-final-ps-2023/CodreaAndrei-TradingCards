import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from "../model/User";
import { JsonPipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    baseUrl: string = "http://localhost:8082/user";
    ownerDataStream: any;

    constructor(private httpClient: HttpClient){
        this.ownerDataStream = new BehaviorSubject<any>(null);
    }

    findAllUser(): Observable<User[]>{
        console.log("FindAll");
        return this.httpClient.get<User[]>(this.baseUrl+"/all");
    }

    findById(id: bigint): Observable<User>{
        console.log("Find by Id: " + id);
        return this.httpClient.get<User>(this.baseUrl+"/findById?Id=" + id);
    }

    public login(username: any, password: any): any{
        console.log("login username: " + username);
        let credentials = {username: username, password: password};
        console.log("JSON login: " +  JSON.stringify(credentials));
        return this.httpClient.post('http://localhost:8082/user/login',
      JSON.stringify(credentials) ,{headers:{'Content-Type':'application/json'},observe:'response'});
    }

    public register(username: any, name: any, password: any): any {
        let info = {username: username, name: name, password: password};
        console.log(info);
        return this.httpClient.post(this.baseUrl+'/register',
        JSON.stringify(info), {headers:{'Content-Type':'application/json'},observe:'response'});
    }

    logout(id: bigint): any {
        console.log("logout controller");
        return this.httpClient.get("http://localhost:8082/user/logout?id=" + id);
    }

    buyPack(id_user: any, id_pack: any){
        console.log("Buy pack");
        return this.httpClient.get("http://localhost:8082/user/buyPack?user_id=" + id_user + "&pack_id=" + id_pack);
    }

    createListing(user_id: any, card_id: any, price: any){
        console.log(user_id);
        console.log(card_id);
        console.log(price);
        return this.httpClient.get(this.baseUrl+"/createListing?user_id=" + user_id + "&card_id=" + card_id + "&price=" + price);
    }

    buyListing(user_id: any, listing_id: any){
        console.log(user_id);
        console.log(listing_id);
        return this.httpClient.get(this.baseUrl+"/buyListing?user_id=" + user_id + "&listing_id=" + listing_id);
    }

    delete(id: any){
        return this.httpClient.delete(this.baseUrl+"/deleteById?Id=" + id);
    }



}