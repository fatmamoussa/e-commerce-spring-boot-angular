import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { SubcategoryService } from '../subcategory.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {



  subcategory: any
  p: number = 1;
  term_search:any
  constructor(private subcategoryservice:SubcategoryService) { }

  ngOnInit(): void {
    this.getsubcategory()
  }
  getsubcategory(){
    this.subcategoryservice.getsubcategory().subscribe((res:any)=>{
      this.subcategory=res
      console.log("subcategory",this.subcategory)
    })
  }

}
