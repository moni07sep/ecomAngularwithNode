import { registerService } from './../../shared/services/register.services';
import { FormBuilder ,Validators,FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  public userForm:FormGroup;
  public submitted:boolean=false;
  constructor( private AR: ActivatedRoute,  private fb:FormBuilder , private userService:registerService) {}
  public token;
  ngOnInit() {
    this.userForm=this.fb.group({
      "userLogin":this.fb.group({
      "password":["",[Validators.required]]
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
    })
  }


}
