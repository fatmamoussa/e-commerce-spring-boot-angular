import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from 'src/app/subcategory.service';

@Component({
  selector: 'app-listsubcategory',
  templateUrl: './listsubcategory.component.html',
  styleUrls: ['./listsubcategory.component.css']
})
export class ListsubcategoryComponent implements OnInit {
  listsubcategory:any

  
  constructor(private subcategoryservice:SubcategoryService) { }

  ngOnInit(): void {
    this.getsubcategory()
  }
  getsubcategory(){
    this.subcategoryservice.getsubcategory().subscribe((res:any)=>{
      this.listsubcategory=res
      console.log("listsubcategory",this.listsubcategory)
    })
  }
}
