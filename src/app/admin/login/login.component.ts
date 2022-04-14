import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/Services/auth.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  faLock = faLock;
  errorMessage = "";
  userCrendentialMessage = "";
  data : any= []

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  })

  constructor(
    private router:Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['mg-admin']);
    }
  }


  onSubmit() {
    if (this.loginForm.valid) {
      console.log("For is valid")
      this.auth.login(this.loginForm.value).subscribe((res) =>{
        console.warn("Login successfull...")
        this.router.navigate(['mg-admin'])
      }, (err: Error) =>{
        this.userCrendentialMessage = "Invalid user credential"
      })

    } else {
      this.errorMessage = "Form is not valid"
    }
  }

}
