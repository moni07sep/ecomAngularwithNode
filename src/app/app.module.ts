import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import{ ReactiveFormsModule, FormsModule }from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { SaleproductComponent } from './components/saleproduct/saleproduct.component';
import { AllproductComponent } from './components/allproduct/allproduct.component';
import { ProductviewComponent } from './components/productview/productview.component'
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    ProductlistComponent,
    SaleproductComponent,
    AllproductComponent,
    ProductviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
