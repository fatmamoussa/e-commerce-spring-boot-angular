import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted=false;
  form:FormGroup
 



  constructor(private formBuilder: FormBuilder,private loginservice:LoginService,private route:Router ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required],
       

      
      //  email: ['', [Validators.required, Validators.email]],
       
       // acceptTerms: [false, Validators.requiredTrue]
      },
    
    );

  }
  
  onSubmit(): void {
    this.submitted = true;
    this.loginservice.login(this.form.value).subscribe((res:any)=>{
       console.log(res)
       if(res.user.enabled===true){
        localStorage.setItem('userconnect',JSON.stringify(res.user))
        localStorage.setItem('token',res.access_token)
        localStorage.setItem("state","0")
        this.route.navigateByUrl('/home')
       }
      },
      err=>{
    Swal.fire({
      icon:'error',
      title:'user not found',
      text:'username invalid',
      footer:'password invalid'
    })
 console.log(err)
  })
    //console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
