import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { SaleproductComponent } from './components/saleproduct/saleproduct.component';
import { ProductviewComponent } from './components/productview/productview.component';
import { CartlistComponent } from './components/cartlist/cartlist.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"forgotpassword",
    component:ForgotpasswordComponent
  },
  {
    path:"productlist",
    component:ProductlistComponent,
  },
  {
    path:"saleproduct",
    component:SaleproductComponent,
  },
  {
    path:"resetpassword/:token",
    component:ResetpasswordComponent
  },
  {
    path:"category/:id/page/:index",
    component:ProductlistComponent
  },
  {
    path:"productview/:id",
    component:ProductviewComponent
  },
  {
    path:"cartlist",
    component:CartlistComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
