import { Observable } from 'rxjs';
import { Iproduct } from './../model/product';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({providedIn:"root"})
export class productService{
    public headers:HttpHeaders
    private offer_product_endpoint="http://localhost:4600/api/offerproduct";
    private all_product_endpoint="http://localhost:4600/api/fetchallproduct";
    private all_category_endpoint="http://localhost:4600/api/fetchallcategory";
    private category_by_product_endpoint="http://localhost:4600/api/category/:category/page/:pageIdx";
    private product_details_endpoint="http://localhost:4600/api/productsearch/:id";



    constructor(private http:HttpClient){
    this.headers = new HttpHeaders({ "Content-Type": "application/json" });
    }

    fetchofferPorduct():Observable<Iproduct[]>{
        return this.http.get<Iproduct[]>(this.offer_product_endpoint)
    }
    fetchallPorduct():Observable<Iproduct[]>{
        return this.http.get<Iproduct[]>(this.all_product_endpoint)
    }
    fetchallCategory():Observable<any[]>{
        return this.http.get<Iproduct[]>(this.all_category_endpoint)
    }
    fetchProductByCategory(categoryId):Observable<any[]>{
        return this.http.get<any[]>("http://localhost:4600/api/category/"+categoryId+"/page/1'")
        
    }
    fetchProductdetails(productId):Observable<any[]>{
        return this.http.get<any[]>("http://localhost:4600/api/productsearch/"+productId)
        
    }
    pagination():Observable<any[]>{
        return this.http.get<any[]>("http://localhost:4600/api/product/page/")
        
    }
}