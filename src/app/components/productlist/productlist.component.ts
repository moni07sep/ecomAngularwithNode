import { Component, OnInit ,ViewChildren, QueryList, ElementRef} from '@angular/core';
import {Validators,FormGroup,FormBuilder,FormsModule} from '@angular/forms'
import{productService} from '../../shared/services/product.services'
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit  {

  constructor(private AR:ActivatedRoute,private productService:productService ,private fg :FormBuilder) { }
  public userForm:FormGroup;
  allcategory:Array<any>=[];
  public categoryId:string;
  public checkedListArray:string;
  currentUser;
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
  
  public checkedList:Array<any>=[]
  ngOnInit() {
    
    this.userForm = this.fg.group({
      search:''
    })

    this.productService.fetchallCategory().subscribe(item=>{
      this.allcategory=item
      })
    }

    isShowDiv = true;
    toggle = {};

    toggleDisplayDiv(j) {
    
    Object.keys(this.toggle).forEach(h => {
      this.toggle[h] = false;
    });

    this.checkedListArray="";
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
   
    this.toggle[j] = !this.toggle[j]
    }
    onCheckboxChange(option, event) {
    
      if(event) {
        //console.log(option._id)
        this.checkedList.push(option._id); 
        //console.log(this.checkedList);
      }else{
        this.checkedList.pop(); 
        //console.log(this.checkedList);
      } 
      this.checkedListArray=this.checkedList.toString()
    }

}
