import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListproductService } from 'src/app/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  id=this.activeroute.snapshot.params["id"]
  listproduct:any
  formproduct:FormGroup
  constructor(private activeroute:ActivatedRoute,private formbuilder:FormBuilder,private listproductservice:ListproductService,private route:Router) { }

  ngOnInit(): void {
    this.formproduct=this.formbuilder.group({
      name:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
    })
    this.getone()
    
  }

  getone(){
    this.listproductservice.getone(this.id).subscribe((res:any)=>{
    this.listproduct=res
    console.log("listproduct",this.listproduct)
    this.formproduct.patchValue({
      name:this.listproduct.name,
      price:this.listproduct.price,
      description:this.listproduct.description,
    })
     } )
  }
  update() {
    this.listproductservice.update(this.id, this.formproduct.value).subscribe((res: any) => {
      console.log(res);
      Swal.fire("product updated!!");
      this.route.navigateByUrl("/home/listproduct");
    });
  }

}
