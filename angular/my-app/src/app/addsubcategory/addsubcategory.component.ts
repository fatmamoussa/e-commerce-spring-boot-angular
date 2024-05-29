import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SubcategoryService } from '../subcategory.service';

@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.css']
})
export class AddsubcategoryComponent implements OnInit {

 
  submitted=false;
  form:FormGroup
  constructor(private formBuilder: FormBuilder,private subcategoryservice:SubcategoryService,private route:Router) {}
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
    
    this.subcategoryservice.save(this.form.value).subscribe((res:any)=>{
       console.log(res)
    Swal.fire('add subcategory')
    this.route.navigateByUrl("/subcategory")
  })
    //console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
