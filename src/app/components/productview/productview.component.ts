import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import{productService} from '../../shared/services/product.services';
import{ cartService} from '../../shared/services/cart.services'
import { Router } from '@angular/router';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
  public productDetails:Array<any>=[];
  public productDetails1:Array<any>=[];
  public productId:string;
  constructor(private AR:ActivatedRoute,
    private cartService:cartService,
    private productService:productService,private router:Router) { }
    
  ngOnInit() {

    this.AR.params.subscribe(item=>{
      this.productId=item['id'];  
    })

    this.productService.fetchProductdetails(this.productId).subscribe(item=>{
      this.productDetails=item
      })
      
    }

    public itemls=[];
    AddToCart(dataCart){
        for (var data of dataCart) {
          var dataArray= {
              prodId:data._id,
              name:data.name,
              image:data.image,
              price:data.price,
              quantity:1,
              totalprice:data.price,
              recorDate:Date.now(),
              updateDate:Date.now()
            }

            if(!localStorage.getItem("cartdata")){
              localStorage.setItem("cartdata", JSON.stringify([dataArray]));
              
            }else{
              var getItem =JSON.parse(localStorage.getItem("cartdata"));
              
              if(Array.isArray(getItem)){
                getItem.push(dataArray)
                localStorage.setItem("cartdata", JSON.stringify(getItem))
                
              }else{
              var testA=[]
              
              testA.push(getItem);
              testA.push(dataArray)
              console.log(testA.toString());

              localStorage.setItem("cartdata", JSON.stringify(testA))
              
            };
              
            }
        }
      

        this.router.navigateByUrl("/cartlist")
      
      // this.cartService.addItem(dataArray).subscribe(item => {
      //   alert(item.message)
      // })
    }
    
}
