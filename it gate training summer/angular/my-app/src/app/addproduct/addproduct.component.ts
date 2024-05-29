import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  submitted=false;
  form:FormGroup
  constructor(private formBuilder: FormBuilder,private productservice:ProductService,private route:Router) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
      
      
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
    
    this.productservice.save(this.form.value).subscribe((res:any)=>{
       console.log(res)
    Swal.fire('add product')
    this.route.navigateByUrl("/listproduct")
  })
    //console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
