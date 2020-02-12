import { ILogin } from './../model/user.register';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{ IRegister} from '../model/user.register';
import{Injectable}from '@angular/core'
import { Observable, BehaviorSubject, } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({providedIn:"root"})
export class registerService{
    private register_endpoint="http://localhost:4600/api/createnewuser";
    private login_endpoint="http://localhost:4600/api/auth";
    private LoggedIn_ENDPOINT="http://localhost:4600/api/me"
    public headers:HttpHeaders
    //public loggedIn: BehaviorSubject<ILogin>;
    //private userData:Observable<ILogin>;
    public loggedIn= new BehaviorSubject(JSON.parse(localStorage.getItem("currentuser")))
    public loggedInuser=this.loggedIn.asObservable();

    constructor(private http:HttpClient){
        this.headers = new HttpHeaders({ "Content-Type": "application/json" });
        
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
                    //alert(JSON.stringify(data));
                    
                    localStorage.setItem("currentuser", JSON.stringify(data));
                    this.loggedIn.next(data);
                } else {
                    return data;
                    }
        }));

    }
    Logout() {
        localStorage.removeItem("currentuser");
        localStorage.removeItem("usertoken");
        this.loggedIn.next(null);
    
   }

}