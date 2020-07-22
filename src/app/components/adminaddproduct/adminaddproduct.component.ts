import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder,FormGroup }from '@angular/forms'
import{productService} from '../../shared/services/product.services'
import { registerService } from './../../shared/services/register.services';

@Component({
  selector: 'app-adminaddproduct',
  templateUrl: './adminaddproduct.component.html',
  styleUrls: ['./adminaddproduct.component.css']
})
export class AdminaddproductComponent implements OnInit {

  constructor(private fb:FormBuilder,private registerService:registerService, private productService:productService) { }
  public addProductForm:FormGroup;
  public submitted:boolean=false;
  allcategory:Array<any>=[];
  subcategory:Array<any>=[];
  seletedValue = 'Select'; 
  currentUser ;

  ngOnInit() {

    this.productService.fetchallCategory().subscribe(item=>{
      this.allcategory=item; 
    })

    //set admin code
    // this.registerService.loggedInuser.subscribe(data => {
    //   this.currentUser = data;
    //   alert(data)
    //   })
   
    this.addProductForm=this.fb.group({
      "name":["",Validators.required],
      "image":["",Validators.required],
      "description":["",Validators.required],
      "price":["",Validators.required],
      "offerPrice":["",Validators.required],
      "isAvailable":["",Validators.required],
      "isTodayOffer":["",Validators.required],
      "catagory":["",Validators.required],
      "subCatagory":["",Validators.required],
      "isAdmin":["",Validators.required],
      "recordDate":[],
      "updateDate":[]
      
    })
  }
  changeCountry(cat_id) { 
    this.subcategory = this.allcategory.find(con => con._id == cat_id).subcate;
  }
  
  
  SubmitForm(){
    
    const formData :FormData = new FormData(); // Currently empty
    formData.append('image', this.selectedFile,this.selectedFile.name);
    formData.append('name', this.addProductForm.get('name').value);
    formData.append('description', this.addProductForm.get('description').value);
    formData.append('price', this.addProductForm.get('price').value);
    formData.append('offerPrice', this.addProductForm.get('offerPrice').value);
    formData.append('isAvailable', this.addProductForm.get('isAvailable').value);
    formData.append('isTodayOffer', this.addProductForm.get('isTodayOffer').value);
    formData.append('isAdmin', this.addProductForm.get('isAdmin').value);
    formData.append('catagory', this.addProductForm.get('catagory').value);
    formData.append('subCatagory', this.addProductForm.get('subCatagory').value);
   
    this.productService.productAdd(formData).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
    )
    alert("Product Added");
  }
  selectedFile: File;
  url:any;
  imageUpload(event){
    
    this.selectedFile = (event.target).files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.url = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);

  }

}
