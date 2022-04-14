import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyServiceService } from '../company-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-comapny-form',
  templateUrl: './add-comapny-form.component.html',
  // styleUrls: ['../../admin.component.css']
  styleUrls: ['./add-comapny-form.component.css']
})
export class AddComapnyFormComponent implements OnInit {

  title: string = "Add company details"


  addForm = new FormGroup({
    company_name: new FormControl(null, [Validators.required]),
    phone_number: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(7), Validators.min(0)]),
    alt_phone_number: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(7), Validators.min(0)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    alt_email: new FormControl(null, [Validators.required, Validators.email]),
    fb_link: new FormControl(null),
    twitter_link: new FormControl(null),
    instagram_link: new FormControl(null),
    company_address: new FormControl(null, [Validators.required]),
    google_map: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
  })


  constructor(
    private __companyService: CompanyServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.addForm.valid) {
      this.__companyService.createCompanyData(this.addForm.value).subscribe((res) => {
        Swal.fire({
          position: 'top-end',
          width : '500',
          height : '50px',
          fontSize : '14px',
          title: 'Data has been updated successfully!',
          showConfirmButton: false,
          timer: 3000
        })
        this.router.navigate(['mg-admin/admin-company'])
      })
    } else {
      Swal.fire({
        position: 'top-end',
        width : '500',
        height : '50px',
        fontSize : '14px',
        title: 'Data has been updated successfully!',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['mg-admin/admin-company'])
    }
    this.addForm.reset()
  }



}
