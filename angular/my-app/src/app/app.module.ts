import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

import { CategoryComponent } from './category/category.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ClientComponent } from './client/client.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { DetailcategoryComponent } from './detailcategory/detailcategory.component';
import { DetailclientComponent } from './detailclient/detailclient.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { RegisterclientComponent } from './registerclient/registerclient.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { AddsubcategoryComponent } from './addsubcategory/addsubcategory.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RecherchePipe } from './pipes/recherche.pipe';
import { Recherche1Pipe } from './pipes/recherche1.pipe';
import { Recherche2Pipe } from './pipes/recherche2.pipe';
import { Recherche3Pipe } from './pipes/recherche3.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
 
    CategoryComponent,
    ListproductComponent,
    ClientComponent,
    DetailproductComponent,
    DetailcategoryComponent,
    DetailclientComponent,
    UpdateproductComponent,
    UpdatecategoryComponent,
    RegisterclientComponent,
    AddproductComponent,
    AddcategoryComponent,
    SubcategoryComponent,
    AddsubcategoryComponent,
    RecherchePipe,
    Recherche1Pipe,
    Recherche2Pipe,
    Recherche3Pipe
    
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
