import { registerService } from './../../shared/services/register.services';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public currentUser;
  constructor(private registerService:registerService,private router:Router) { }

  ngOnInit() {
    this.registerService.loggedInuser.subscribe(data => {
      
      this.currentUser = data;
      //alert(this.currentUser);
      //console.log(this.currentUser);
    })
  }
  Logout() {
    this.registerService.Logout();
    this.router.navigateByUrl("/login");
  }

}
