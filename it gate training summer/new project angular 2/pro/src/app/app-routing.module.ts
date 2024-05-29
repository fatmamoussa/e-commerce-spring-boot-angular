import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { DetailproductComponent } from './component/detailproduct/detailproduct.component';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ListproductComponent } from './component/listproduct/listproduct.component';

const routes: Routes = [
  {path:'',component:HomeComponent,children:[
      {path:'',component:LayoutComponent},
      {path:'listproduct',component:ListproductComponent},
      {path:'detailproduct/:id',component:DetailproductComponent},
      {path:'addproduct',component:AddproductComponent}


  ]},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
