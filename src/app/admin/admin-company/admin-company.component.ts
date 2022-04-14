import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from './company-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-company',
  templateUrl: './admin-company.component.html',
  styleUrls: ['./admin-company.component.css'],

  // styleUrls: ['../admin.component.css']
})
export class AdminCompanyComponent implements OnInit {

  companyData : any = []
  title : string = "About company"
  isLoading = false

constructor(private __companyService: CompanyServiceService, private route:Router) { }

  ngOnInit(): void {
    this.getData()
  }


  getData(){
    this.isLoading = true
    this.__companyService.getCompanyData().subscribe((res) => {
      this.companyData = res
      this.isLoading = false
    })
  }

  onSubmit(){
  }

  onEditCompany(companykey){
    console.warn(companykey)
  }

}
