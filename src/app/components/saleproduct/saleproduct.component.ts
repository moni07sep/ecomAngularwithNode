import { Iproduct } from './../../shared/model/product';
import { Component, OnInit } from '@angular/core';
import{productService} from '../../shared/services/product.services'

@Component({
  selector: 'app-saleproduct',
  templateUrl: './saleproduct.component.html',
  styleUrls: ['./saleproduct.component.css']
})
export class SaleproductComponent implements OnInit {
  saleprolist:Array<Iproduct>=[];
  public userForm;
  currentUser;
  constructor(private productService:productService) { }
  ngOnInit() {
    this.productService.fetchofferPorduct().subscribe(item=>{
      this.saleprolist=item;  
    })
  }
}
