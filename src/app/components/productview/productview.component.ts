import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import{productService} from '../../shared/services/product.services'

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
  public productDetails:Array<any>=[];
  public productId:string;
  constructor(private AR:ActivatedRoute, private productService:productService) { }

  ngOnInit() {
    this.AR.params.subscribe(item=>{
      this.productId=item['id'];  
    })
    this.productService.fetchProductdetails(this.productId).subscribe(item=>{
      this.productDetails=item
      })
    }
}
