import { Iproduct } from './../../shared/model/product';
import { Component, OnInit,Input } from '@angular/core';
import{productService} from '../../shared/services/product.services';


@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

  

constructor(private productService:productService) {}
product:Array<Iproduct>=[];
productbycategory:Array<any>=[];
changeLog:Array<any>=[]
public allItems;
@Input() public catId:string;
@Input() public subCatId:any;

  ngOnInit() {
    
    
     console.log(this.subCatId);
     //alert(JSON.stringify(this.subCatId));
      if (this.catId){
        this.productService.fetchProductByCategory(this.catId).subscribe(item=>{
          this.product=item
        })
        }else{
          //alert(JSON.stringify(this.subCatId));
          this.productService.fetchallPorduct().subscribe((item:any)=>{
            this.product=item.u 
            console.log(this.product)
          })
        };

        
      };
}
