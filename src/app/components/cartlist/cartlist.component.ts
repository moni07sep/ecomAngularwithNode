import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {cartService} from '../../shared/services/cart.services'



@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  constructor(private cartService:cartService, private router:Router) { }

  public itemData;
  public totalprice:number=0;
  ngOnInit() {
    this.itemData=JSON.parse(localStorage.getItem("cartdata"));

    this.cartService.updateCartItems(this.itemData.length);

    for(let items of this.itemData){
    this.totalprice=this.totalprice+items.totalprice
    }
  }

  delete(data){
    
    console.log(localStorage.getItem("cartdata"))
    var itemArr=localStorage.getItem("cartdata")
    var newItemData=JSON.parse(itemArr).filter((item) => item.prodId !== data);
    localStorage.setItem("cartdata",JSON.stringify(newItemData))
    this.itemData=JSON.parse(localStorage.getItem("cartdata"));
    this.cartService.updateCartItems(this.itemData.length);
  }
 
  plus(data){
    
    var inputValue = (<HTMLInputElement>document.getElementById(data)).value;
    let quant:number = 1 + Number(inputValue);
    (<HTMLInputElement>document.getElementById(data)).value =quant.toString()
  }
  minus(data){
    var inputValue = (<HTMLInputElement>document.getElementById(data)).value;
    let quant:number =  Number(inputValue)-1;
    (<HTMLInputElement>document.getElementById(data)).value =quant.toString()

  }

  buynow(){
    var loginCheck=localStorage.getItem("currentuser")
    if(loginCheck==null){
    this.router.navigateByUrl("/login")
    }
  }
}
