import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
  // styleUrls: ['../admin.component.css']
  
})
export class AdminHeaderComponent implements OnInit {
  data : any = []

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){

      const eText = JSON.parse(localStorage.getItem('userinfo')).toString() //get encrypt form
      const decryptedWord = CryptoJS.AES.decrypt(eText,'my_scret_key') //
      const decryptedData = JSON.parse(decryptedWord.toString(CryptoJS.enc.Utf8));
      this.data = decryptedData
      console.warn("DATA =",this.data)
    }
  }
  

  login(){
    this.auth.logout();
    this.router.navigate(['admin-login'])
  }

}
