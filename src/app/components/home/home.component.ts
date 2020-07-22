import { Component, OnInit   } from '@angular/core';
import { registerService } from './../../shared/services/register.services';
import {Validators,FormGroup,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private fg :FormBuilder,private registerService:registerService) { }
  public userForm:FormGroup;
  currentUser;
  ngOnInit() {
    this.registerService.userData().subscribe(data => {
    })
    this.userForm = this.fg.group({
      search:''
    })
  
  }
  
  

}
