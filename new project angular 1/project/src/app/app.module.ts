import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './component/sidebar/sidebar.component';
import { LayoutComponent } from './component/layout/layout.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { ListproductComponent } from './component/listproduct/listproduct.component';
import{HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ListsubcategoryComponent } from './component/listsubcategory/listsubcategory.component';
import { AddsubcategoryComponent } from './component/addsubcategory/addsubcategory.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UpdateproductComponent } from './component/updateproduct/updateproduct.component';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
import { RecherchePipe } from './pipes/recherche.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LayoutComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AddproductComponent,
    ListproductComponent,
   
        LoginComponent,
            RegisterComponent,
            ListsubcategoryComponent,
            AddsubcategoryComponent,
            ProfileComponent,
            UpdateproductComponent,
            DetailproductComponent,
            RecherchePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
