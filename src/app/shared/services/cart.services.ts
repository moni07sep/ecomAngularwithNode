import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
@Injectable({providedIn:"root"})

export class cartService{
    public headers:HttpHeaders
    private item_add_to_cart_endpoint="http://localhost:4600/api/addcartitem";

    constructor(private http:HttpClient){
        this.headers = new HttpHeaders({ "Content-Type": "application/json" });
    }

    addItem(data):Observable<any>{
        return this.http.post<any>(this.item_add_to_cart_endpoint,JSON.stringify(data), { headers: this.headers });
    }

}


