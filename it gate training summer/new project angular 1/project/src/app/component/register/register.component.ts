import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted=false;
  form:FormGroup 
  fileToUpload:Array<File>=[];
  constructor(private formBuilder: FormBuilder,private loginservice: LoginService   ,private route:Router ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        

      
      //  email: ['', [Validators.required, Validators.email]],
       
       // acceptTerms: [false, Validators.requiredTrue]
      },
    
    );

  }
  handleFileInput(files:any)
  {this.fileToUpload=<Array<File>>files.target.files;
  console.log(this.fileToUpload);
  }
  
  onSubmit(): void {
    this.submitted = true;
      let formdata=new FormData()
      formdata.append("firstName",this.form.value.firstName);
      formdata.append("lastName",this.form.value.lastName);
      formdata.append("username",this.form.value.username);
      formdata.append("password",this.form.value.password);
      formdata.append("file",this.fileToUpload[0]);
    this.loginservice.register(formdata).subscribe((res:any)=>{
       console.log(res)
     
    Swal.fire('register')
    this.route.navigateByUrl("/")
  })
    //console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this

}
}