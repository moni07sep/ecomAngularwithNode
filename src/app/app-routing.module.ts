import { AboutusComponent } from './components/aboutus/aboutus.component';
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
import { Authguard } from './shared/services/authguard/auth.guard';
import { AdminaddproductComponent } from './components/adminaddproduct/adminaddproduct.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent,
    
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
    path:"productlist/:id",
    component:ProductlistComponent
  },
  // {
  //   path:"category/:id/page/:index",
  //   component:ProductlistComponent
  // },
  {
    path:"productview/:id",
    component:ProductviewComponent
  },
  {
    path:"cartlist",
    component:CartlistComponent
  },
  {
    path:"addProduct@1324rgdfghfkhiokl46765765dcxxcggfkjj",
    component:AdminaddproductComponent
  },
  {
    path:"aboutus",
    component:AboutusComponent
  },
  {
    path:"contact",
    component:ContactComponent
  }

];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
