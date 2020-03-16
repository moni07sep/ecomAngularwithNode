import { registerService } from './../../shared/services/register.services';
import { Component, OnInit } from '@angular/core';
import {IRegister, ILogin} from '../../shared/model/user.register';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Regx} from '../register/regx'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userForm:FormGroup;
  public submitted:boolean=false;

  constructor(private fb:FormBuilder, private userServices:registerService){}

  ngOnInit() {
    this.userForm= this.fb.group({
    "firstName": ['',[Validators.required, Regx.FirstCharCapital]],
      "lastName":  ['',[Validators.required,Regx.FirstCharCapital]],
      "userLogin": this.fb.group({
          "emailId": ['',[Validators.required,Regx.Email]],
          "password": ['',[Validators.required ,Regx.Password]]
      }),
    })
  } 
  SubmitForm(data: IRegister) {
    this.submitted = true;
    
    if (!this.userForm.valid) {
      return;
   }
     this.userServices.userRegister(data).subscribe(item => {
       alert("Registration done!")
       console.log(item);
     })

  }


}
