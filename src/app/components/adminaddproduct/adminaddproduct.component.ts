import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder,FormGroup }from '@angular/forms'
import{productService} from '../../shared/services/product.services'

@Component({
  selector: 'app-adminaddproduct',
  templateUrl: './adminaddproduct.component.html',
  styleUrls: ['./adminaddproduct.component.css']
})
export class AdminaddproductComponent implements OnInit {

  constructor(private fb:FormBuilder, private productService:productService) { }
  public addProductForm:FormGroup;
  public submitted:boolean=false;

  seletedValue = 'Select'; 

  ngOnInit() {
   
    this.addProductForm=this.fb.group({
      "name":["Adult-TAB-72"],
      "image":[],
      "description":["This stunning colouring print offers a practical exercise in mindfulness that draws on your creativity and hones your focus."],
      "price":[60],
      "offerPrice":[0],
      "isAvailable":[0],
      "isTodayOffer":[0],
      "catagory":['5e43a8581c2603380c47ae4d'],
      "subCatagory":['5e42a8d694a5ad29089453d1'],
      "isAdmin":[0],
      "recordDate":[],
      "updateDate":[]
      
    })
  }
  SubmitForm(data){
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
  }
  selectedFile: File;
  url:any;
  imageUpload(event){
    
     this.selectedFile = (event.target).files[0];

     
    
    // var reader = new FileReader();
    // reader.onload = (event: any) => {
    //   this.url = event.target.result;
    // }
    // reader.readAsDataURL(event.target.files[0]);

  }

}
