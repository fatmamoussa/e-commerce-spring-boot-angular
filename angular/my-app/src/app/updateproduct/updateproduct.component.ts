import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl:'./updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  id=this.activeroute.snapshot.params["id"]
  product:any
  formproduct:FormGroup
  constructor(private activeroute:ActivatedRoute,private formbuilder:FormBuilder,private productservice:ProductService,private route:Router) { }

  ngOnInit(): void {
    this.formproduct=this.formbuilder.group({
      name:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
    })
    this.getone()
    
  }

  getone(){
    this.productservice.getone(this.id).subscribe((res:any)=>{
    this.product=res
    console.log("product",this.product)
    this.formproduct.patchValue({
      name:this.product.name,
      price:this.product.price,
      description:this.product.description,
    })
     } )
  }
  update() {
    this.productservice.update(this.id, this.formproduct.value).subscribe((res: any) => {
      console.log(res);
      Swal.fire("product updated!!");
      this.route.navigateByUrl("/listproduct");
    });
  }
}
