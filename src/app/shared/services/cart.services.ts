import { Observable, BehaviorSubject } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn:"root"})

export class cartService{

    public itemRecord= new BehaviorSubject(JSON.parse(localStorage.getItem("cartdata")))
    public totalItem=this.itemRecord.asObservable();


    public headers:HttpHeaders
    private item_add_to_cart_endpoint="http://localhost:4600/api/addcartitem";
    private fetch_cart_item_endpoint="  "

    constructor(private http:HttpClient){
        this.headers = new HttpHeaders({ "Content-Type": "application/json" });
    }
    updateCartItems(items) {
        this.itemRecord.next(items);
    }

    addItem(data):Observable<any>{
        return this.http.post<any>(this.item_add_to_cart_endpoint,JSON.stringify(data), { headers: this.headers });
    }
    fetchCartData(){

    }

}


