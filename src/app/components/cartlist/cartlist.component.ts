import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  constructor() { }
  public itemData:any[];
  ngOnInit() {

    this.itemData=JSON.parse(localStorage.getItem("cartdata"));
    console.log(this.itemData);
    

  }
 
}
