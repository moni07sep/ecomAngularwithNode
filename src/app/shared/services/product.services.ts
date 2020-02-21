import { Observable } from 'rxjs';
import { Iproduct } from './../model/product';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn:"root"})
export class productService{
    public headers:HttpHeaders
    private offer_product_endpoint="http://localhost:4600/api/offerproduct";
    private all_product_endpoint="http://localhost:4600/api/fetchallproduct";

    constructor(private http:HttpClient){
    this.headers = new HttpHeaders({ "Content-Type": "application/json" });
    }

    fetchofferPorduct():Observable<Iproduct[]>{
        return this.http.get<Iproduct[]>(this.offer_product_endpoint)
    }
    fetchallPorduct():Observable<Iproduct[]>{
        return this.http.get<Iproduct[]>(this.all_product_endpoint)
    }
}