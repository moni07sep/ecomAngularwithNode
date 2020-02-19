import { Component, OnInit } from '@angular/core';
import {Validators,FormGroup,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private fg :FormBuilder) { }
  public userForm:FormGroup;
  ngOnInit() {
    this.userForm = this.fg.group({
      search:''
    })
  }

}
