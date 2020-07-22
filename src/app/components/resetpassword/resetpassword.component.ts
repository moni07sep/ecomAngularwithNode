import { registerService } from './../../shared/services/register.services';
import { FormBuilder ,Validators,FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router';
import { Regx } from '../register/regx';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  public showErrorMessage:string;
  public userForm:FormGroup;
  public submitted:boolean=false;
  constructor( private AR: ActivatedRoute,  private fb:FormBuilder , private userService:registerService,private router: Router) {}
  public token;
  ngOnInit() {
    this.userForm=this.fb.group({
      "userLogin":this.fb.group({
      "password":["",[Validators.required,Regx.Password]]
    })
  })
  }
  resetpassword(data){
    this.submitted=true;
    if(!this.userForm.valid){
      return;
    }
    this.AR.params.subscribe(token=>{
      this.token=token['token'];
    })
    this.userService.resetPassword(data,this.token).subscribe(item=>{
      alert("password has been changed")
      this.router.navigateByUrl("/login");   
    },(ex:any) => {
      
      this.showErrorMessage = ex.error.message
    }
    )
  }


}
