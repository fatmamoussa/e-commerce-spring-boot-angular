import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  submitted=false;
  form:FormGroup
  constructor(private formBuilder: FormBuilder,private categoryservice:CategoryService,private route:Router) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        title: ['', Validators.required],
        description: ['', Validators.required],
        
      
      
      //  email: ['', [Validators.required, Validators.email]],
       
       // acceptTerms: [false, Validators.requiredTrue]
      },
    
    );
  }
  get f()  {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    
    this.categoryservice.save(this.form.value).subscribe((res:any)=>{
       console.log(res)
    Swal.fire('add category')
    this.route.navigateByUrl("/category")
  })
    //console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
