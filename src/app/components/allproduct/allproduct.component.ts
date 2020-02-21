import { Iproduct } from './../../shared/model/product';
import { Component, OnInit } from '@angular/core';
import{productService} from '../../shared/services/product.services'


@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

constructor(private productService:productService) { }
allproduct:Array<Iproduct>=[];
  ngOnInit() {
    this.productService.fetchallPorduct().subscribe(item=>{
      this.allproduct=item;  
      console.log(this.allproduct)
    })
  }

}
