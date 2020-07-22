
import { Iproduct } from './../../shared/model/product';
import { Component, OnInit,Input } from '@angular/core';
import{productService} from '../../shared/services/product.services';
import {ActivatedRoute,NavigationEnd, Router} from '@angular/router';



@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {

p: number = 1;

constructor(private router: Router,private AR:ActivatedRoute,private productService:productService) {}
product:Array<Iproduct>=[];
productbycategory:Array<any>=[];
changeLog:Array<any>=[]
public allItems;
public categoryId:string;

@Input() public catId:string;
@Input() public subCatId:any;  

  ngOnInit() {

  //subscribes every changes of your route
   this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd){
       //scroll to top
       window.scrollTo(0,0);
      }
    });

    this.AR.params.subscribe(item=>{
    this.categoryId=item['id'];
    if (this.categoryId){
          this.productService.fetchProductByCategory(this.categoryId).subscribe(item=>{
          this.product=item
          this.p=1;
        })
        }else{
          this.productService.fetchallPorduct().subscribe((item:any)=>{
            this.product=item.u 
            this.p=1;
          })
        };
    })
       
    };
    
      
}
