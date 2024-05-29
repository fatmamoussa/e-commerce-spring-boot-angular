import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { AddsubcategoryComponent } from './component/addsubcategory/addsubcategory.component';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ListproductComponent } from './component/listproduct/listproduct.component';
import { ListsubcategoryComponent } from './component/listsubcategory/listsubcategory.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { RegisterComponent } from './component/register/register.component';
import { UpdateproductComponent } from './component/updateproduct/updateproduct.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent,children:[
    
    {path:'',component:LayoutComponent},
    {path:'listproduct',component:ListproductComponent},
    {path:'addproduct',component:AddproductComponent},
    {path:'listsubcategory',component:ListsubcategoryComponent},
    {path:'addsubcategory',component:AddsubcategoryComponent},
    {path:'profile',component:ProfileComponent},
    {path:'updateproduct/:id',component:UpdateproductComponent},
    {path:'detailproduct/:id',component:DetailproductComponent}
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
