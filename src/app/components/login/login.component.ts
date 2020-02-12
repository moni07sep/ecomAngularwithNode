import { registerService } from './../../shared/services/register.services';
import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder,FormGroup}from '@angular/forms'
import{ILogin} from '../../shared/model/user.register'
import{Regx} from '../../components/login/regx'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userForm:FormGroup;
  public submitted:boolean=false;
  
  constructor(private fb:FormBuilder , private userService:registerService,private router: Router) { }

  ngOnInit() {
    this.userForm=this.fb.group({
      "userLogin":this.fb.group({
        "emailId":["",[Validators.required,Regx.Email]],
        "password":["",[Validators.required]]
      })
    })
  }
  loginUser(data:ILogin){
    this.submitted=true;
    if(!this.userForm.valid){
      return;
    }
    //console.log(data);
    this.userService.userLogin(data).subscribe(item=>{
      alert("login succsesful");
      console.log(item)
      this.router.navigateByUrl("/home");   
    })
  }
}
