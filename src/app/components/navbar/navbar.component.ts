import { registerService } from './../../shared/services/register.services';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {Validators,FormBuilder,FormGroup}from '@angular/forms'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public currentUser;
  constructor(private fg :FormBuilder,private registerService:registerService,private router:Router) { }
  public userForm:FormGroup;
  ngOnInit() {
    this.registerService.loggedInuser.subscribe(data => {
    this.currentUser = data;
    this.userForm = this.fg.group({
      search:''
    })
    })
  }
  Logout() {
    this.registerService.Logout();
    this.router.navigateByUrl("/login");
  }

}
