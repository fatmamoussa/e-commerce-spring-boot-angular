import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
  id=this.activeroute.snapshot.params["id"]
  category:any
  formcategory:FormGroup
  constructor(private activeroute:ActivatedRoute,private formbuilder:FormBuilder,private categoryservice:CategoryService,private route:Router) { }

  ngOnInit(): void {
    this.formcategory=this.formbuilder.group({
      
      title:['',Validators.required],
      description:['',Validators.required],
    })
    this.getone()
    
  }

  getone(){
    this.categoryservice.getone(this.id).subscribe((res:any)=>{
    this.category=res
    console.log("category",this.category)
    this.formcategory.patchValue({
      title:this.category.title,
      description:this.category.description,
    })
     } )
  }
  update() {
    this.categoryservice.update(this.id, this.formcategory.value).subscribe((res: any) => {
      console.log(res);
      Swal.fire("category updated!!");
      this.route.navigateByUrl("/category");
    });
  }

}
