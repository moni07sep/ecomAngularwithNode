import { ILogin } from './../model/user.register';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{ IRegister} from '../model/user.register';
import{Injectable}from '@angular/core'
import { Observable, BehaviorSubject, } from 'rxjs';
import { map } from "rxjs/operators";
import {url} from '../../../../src/url.const'

@Injectable({providedIn:"root"})
export class registerService{
    private register_endpoint=url+"api/createnewuser";
    private login_endpoint=url+"api/auth";
    private LoggedIn_ENDPOINT=url+"api/me";
    private forgotPassword_mail_endpoint=url+"api/mail/nodemailer";
    private forgotPassword_reset_endpoint=url+"api/forgotpassword/:token";
    public headers:HttpHeaders
    public loggedIn: BehaviorSubject<ILogin>;
    public loggedInuser:Observable<ILogin>;
   
    constructor(private http:HttpClient){
        this.headers = new HttpHeaders({ "Content-Type": "application/json" });
        this.loggedIn= new BehaviorSubject(JSON.parse(localStorage.getItem("currentuser")))
        this.loggedInuser=this.loggedIn.asObservable();
    
    }
    userRegister(data:IRegister):Observable<IRegister>{
        return this.http.post<IRegister>(this.register_endpoint,JSON.stringify(data), { headers: this.headers });
    }
    userLogin(data:ILogin):Observable<ILogin>{
        return this.http.post<ILogin>(this.login_endpoint, JSON.stringify(data), { headers: this.headers }).pipe(map((item:any) => {
            if (item && item.token) {
                localStorage.setItem("usertoken", JSON.stringify(item.token));          
            } else {
                return item;
            }
        }))

    }
    userData(){
        let token = JSON.parse(localStorage.getItem("usertoken"));
        this.headers = new HttpHeaders({ "Content-Type": "application/json" , "x-auth-token": token });
        return this.http.get(this.LoggedIn_ENDPOINT, { headers: this.headers })
            .pipe(map((data: any) => {
                if (data && data._id) {
                    localStorage.setItem("currentuser", JSON.stringify(data._id));
                    this.loggedIn.next(data);
                } else {
                    return data;
                }
        }));

    }
    userDetails(){

    }
    sendMail(data){
        return this.http.post<any>(this.forgotPassword_mail_endpoint,JSON.stringify(data), 
        { headers: this.headers });
    }
    resetPassword(data,token){

        return this.http.post<any>(url+'api/forgotpassword/'+token ,JSON.stringify(data), 
        { headers: this.headers });
    }
    Logout() {
        localStorage.removeItem("currentuser");
        localStorage.removeItem("usertoken");
        this.loggedIn.next(null);
    
   }

}