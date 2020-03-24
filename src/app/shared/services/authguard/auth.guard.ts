import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: "root" })
export class Authguard implements CanActivate {
    constructor(private router: Router){}
    canActivate() {
        let token = localStorage.getItem("currentuser");
        if (!token) {
            alert("please login first");
            this.router.navigateByUrl("/login");
        } else {
            return true;
        }
    }
}