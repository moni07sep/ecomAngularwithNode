import { Observable, BehaviorSubject, of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {url} from '../../../../src/url.const'

@Injectable({providedIn:"root"})

export class cartService{   

    private itemRecord:BehaviorSubject<any>;
    public itemRecordObs:Observable<any>
    
    public headers:HttpHeaders
    private item_add_to_cart_endpoint=url+"api/addcartitem";
    private fetch_cart_item_endpoint="  "

    constructor(private http:HttpClient){
        this.headers = new HttpHeaders({ "Content-Type": "application/json" });
        if(localStorage.getItem("cartdata")==null){
            localStorage.setItem("cartdata",'[]')
        }
        this.itemRecord=new BehaviorSubject((JSON.parse(localStorage.getItem("cartdata"))).length)
        this.itemRecordObs=this.itemRecord.asObservable();

    }
    updateCartItems(items:any) {
       
        this.itemRecord.next(items);  
    }
    

    addItem(data):Observable<any>{
        return this.http.post<any>(this.item_add_to_cart_endpoint,JSON.stringify(data), { headers: this.headers });
    }
    fetchCartData(){

    }

}


