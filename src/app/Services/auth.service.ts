import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import {config} from'src/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService  implements OnInit {

  email = "sundartamang@gmail.com";
  pasword = "123";
  name  = "Sundar Tamang";
  token = "abcdefghijklmnopqrstuvwxyz"
  data : any = []

  userData :any = []

  api_url = `${config.json_base_url}/userinfo`

  
  constructor(
    private router: Router
    ) { }


  ngOnInit(): void {

  }

  setToken(token : string){
    // localStorage.setItem('token', token)

    const tokenInfo = CryptoJS.AES.encrypt(JSON.stringify(token),'my_token_ecret_key').toString()
    localStorage.setItem('my_token', JSON.stringify(tokenInfo))
  }

  getToken():string|null{
    return localStorage.getItem('my_token')
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }

  logout(){
    localStorage.removeItem('my_token');
    localStorage.removeItem('userinfo');
    this.router.navigate(['admin-login']);
  }

  login({email, password} : any) : Observable<any>{
    if(email ===  this.email && password === this.pasword){
      this.setToken(this.token);
      this.data.push({email:email,name:this.name})
      const userinfo = CryptoJS.AES.encrypt(JSON.stringify(this.data), 'my_scret_key').toString()
      localStorage.setItem('userinfo', JSON.stringify(userinfo))

      return of({name: this.name, email: this.email});
    }
    return throwError(new Error('Failed tologin'));
  }

}
