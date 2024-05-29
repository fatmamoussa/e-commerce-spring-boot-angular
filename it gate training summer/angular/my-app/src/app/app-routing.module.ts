import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddsubcategoryComponent } from './addsubcategory/addsubcategory.component';
import { CategoryComponent } from './category/category.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { DetailcategoryComponent } from './detailcategory/detailcategory.component';
import { DetailclientComponent } from './detailclient/detailclient.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { RegisterclientComponent } from './registerclient/registerclient.component';
import { SubcategoryService } from './subcategory.service';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { UpdatecategoryComponent } from './updatecategory/updatecategory.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';


const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'listproduct',component:ListproductComponent},
  {path:'category',component:CategoryComponent},
  {path:'client',component:ClientComponent},
  {path:'detailproduct/:id',component:DetailproductComponent},
  {path:'detailcategory/:id',component:DetailcategoryComponent},
  {path:'detailclient/:id',component:DetailclientComponent},
  {path:'updateproduct/:id',component:UpdateproductComponent},
  {path:'updatecategory/:id',component:UpdatecategoryComponent},
  {path:'registerclient',component:RegisterclientComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'addcategory',component:AddcategoryComponent},
  {path:'subcategory',component:SubcategoryComponent},
  {path:'addsubcategory',component:AddsubcategoryComponent}



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
