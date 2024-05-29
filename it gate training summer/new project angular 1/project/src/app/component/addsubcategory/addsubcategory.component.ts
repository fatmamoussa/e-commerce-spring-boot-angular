import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { SubcategoryService } from 'src/app/subcategory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.css']
})
export class AddsubcategoryComponent implements OnInit {

  submitted=false;
  form:FormGroup
  listsubcategory:any
  listcategory:any



  constructor(private formBuilder: FormBuilder ,private subcategoryservice:SubcategoryService,private route:Router , private categoryservice:CategoryService) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
       title: ['', Validators.required],
        description: ['', Validators.required],
        idcategory: ['', Validators.required]

      
      //  email: ['', [Validators.required, Validators.email]],
       
       // acceptTerms: [false, Validators.requiredTrue]
      },
    
    );
  
    this.getcategory()
  }
  
  onSubmit(): void {
    this.submitted = true;
    
    this.subcategoryservice.save(this.form.value.idcategory,this.form.value).subscribe((res:any)=>{
       console.log(res)
    Swal.fire('add subcategory')
    this.route.navigateByUrl("/home/listsubcategory")
  })
    //console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


  getcategory(){
    this.categoryservice.getcategory().subscribe((res:any)=>{
      this.listcategory=res
      console.log("listcategory",this.listcategory)
    })
  }
}
