import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListproductService } from 'src/app/product.service';
import { ProviderService } from 'src/app/provider.service';
import { SubcategoryService } from 'src/app/subcategory.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  submitted=false;
  form:FormGroup
  listprovider:any
  listsubcategory:any
  fileToUpload:Array<File>=[];



  constructor(private formBuilder: FormBuilder,private listproductservice:ListproductService,private route:Router , private providerservice:ProviderService,private subcategoryservice:SubcategoryService) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        idsubcategory: ['', Validators.required],
        idprovider: ['', Validators.required]

      
      //  email: ['', [Validators.required, Validators.email]],
       
       // acceptTerms: [false, Validators.requiredTrue]
      },
    
    );
    this.getprovider()
    this.getsubcategory()
  }
  handleFileInput(files:any)
  {this.fileToUpload=<Array<File>>files.target.files;
  console.log(this.fileToUpload);
  }
  
  onSubmit(): void {
    this.submitted = true;
    let formdata=new FormData()
    formdata.append("name",this.form.value.name);
    formdata.append("price",this.form.value.price);
    formdata.append("description",this.form.value.description);
 
    formdata.append("file",this.fileToUpload[0]);
    this.listproductservice.save(this.form.value.idsubcategory,this.form.value.idprovider,formdata).subscribe((res:any)=>{
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

  getprovider(){
    this.providerservice.getprovider().subscribe((res:any)=>{
      this.listprovider=res
      console.log("listprovider",this.listprovider)
    })
  }
  getsubcategory(){
    this.subcategoryservice.getsubcategory().subscribe((res:any)=>{
      this.listsubcategory=res
      console.log("listsubcategory",this.listsubcategory)
    })
  }
}
