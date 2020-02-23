import { Iproduct } from './../../shared/model/product';
import { Component, OnInit,Input } from '@angular/core';
import{productService} from '../../shared/services/product.services';


@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

constructor(private productService:productService) { }
allproduct:Array<Iproduct>=[];
productbycategory:Array<any>=[];

@Input() public catId:string;

  ngOnInit() {
     
      if (this.catId){
        this.productService.fetchProductByCategory(this.catId).subscribe(item=>{
          this.productbycategory=item
          console.log(this.productbycategory)
        })
        }else{
          this.productService.fetchallPorduct().subscribe(item=>{
            this.allproduct=item;  
          })
        }
      }
}
