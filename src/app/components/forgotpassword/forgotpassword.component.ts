import { registerService } from './../../shared/services/register.services';

import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder,FormGroup}from '@angular/forms'
import {Regx} from '../../components/forgotpassword/regx'


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private fb:FormBuilder, private registerService:registerService) { }
  public showErrorMessage:string;
  public userForm:FormGroup;
  public submitted:boolean=false;
  ngOnInit() {
    this.userForm=this.fb.group({
      "userLogin":this.fb.group({
        "emailId":["",[Validators.required,Regx.Email]]
      })
    })

  }
  forgotPassword(data:any){
    this.submitted=true;
    if(!this.userForm.valid){
      return;
    }
    this.registerService.sendMail(data).subscribe(item=>{
     alert("please check your mail");
    },
    (ex:any) => {
      this.showErrorMessage = ex.error.message
    })
  }

}
