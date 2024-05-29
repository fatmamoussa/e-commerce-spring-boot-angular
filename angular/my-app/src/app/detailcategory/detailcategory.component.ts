import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-detailcategory',
  templateUrl: './detailcategory.component.html',
  styleUrls: ['./detailcategory.component.css']
})
export class DetailcategoryComponent implements OnInit {

  id=this.activeroute.snapshot.params["id"]
  category:any
  constructor(private activeroute:ActivatedRoute,private categoryservice:CategoryService) { }

  ngOnInit(): void {
    console.log("id",this.id)
    this.getone()
  }
getone(){
  this.categoryservice.getone(this.id).subscribe((res:any)=>{
  this.category=res
  console.log("category",this.category)
   } )
}
}
