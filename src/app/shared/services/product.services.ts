import { Observable } from 'rxjs';
import { Iproduct } from './../model/product';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {url} from '../../../../src/url.const'

@Injectable({providedIn:"root"})
export class productService{
    public headers:HttpHeaders
    private offer_product_endpoint=url+"api/offerproduct";
    private all_product_endpoint=url+"api/fetchallproduct";
    private all_category_endpoint=url+"api/fetchallcategory";
    //private category_by_product_endpoint="api/category/:category/page/:pageIdx";
    //private product_details_endpoint="api/productsearch/:id";
    private product_add=url+"api/createnewproduct"

    constructor(private http:HttpClient){
    this.headers = new HttpHeaders({ "Content-Type": "application/json" });
    }
    
    productAdd(data){
        return this.http.post<any>(this.product_add,data);
    }
    fetchofferPorduct():Observable<Iproduct[]>{
        return this.http.get<Iproduct[]>(this.offer_product_endpoint)
    }
    fetchallPorduct():Observable<Iproduct[]>{
        return this.http.get<Iproduct[]>(this.all_product_endpoint,{headers:this.headers})
    }
    fetchallCategory():Observable<any[]>{
        return this.http.get<Iproduct[]>(this.all_category_endpoint,)
    }
    fetchProductByCategory(categoryId):Observable<any[]>{
        return this.http.get<any[]>(url+"api/category/"+categoryId)
        
    }
    fetchProductdetails(productId):Observable<any[]>{
        return this.http.get<any[]>(url+"api/productsearch/"+productId)
        
    }
    pagination():Observable<any[]>{
        return this.http.get<any[]>(url+"api/product/page/")
        
    }
    fetchImg(image:any) {
        return this.http.get("http://theartbundle.club/ecomProject/uploads/"+image, {responseType: 'blob'})
       
    }
}