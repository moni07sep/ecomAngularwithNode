import { Iproduct } from './../../shared/model/product';
import { Component, OnInit,Input } from '@angular/core';
import{productService} from '../../shared/services/product.services';


@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {
  collection = [];
constructor(private productService:productService) {
  for (let i = 1; i <= 100; i++) {
    this.collection.push(`item ${i}`);
  }
 }
product:Array<Iproduct>=[];
productbycategory:Array<any>=[];

@Input() public catId:string;

  ngOnInit() {
     
      if (this.catId){
        this.productService.fetchProductByCategory(this.catId).subscribe(item=>{
          this.product=item
        })
        }else{
          this.productService.fetchallPorduct().subscribe((item:any)=>{
            this.product=item.u 
          })
        }
      }
}
