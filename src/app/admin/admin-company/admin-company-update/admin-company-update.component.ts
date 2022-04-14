import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouteConfigLoadStart, Router } from '@angular/router';
import { CompanyServiceService } from '../company-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-admin-company-update',
  templateUrl: './admin-company-update.component.html',
  styleUrls: ['./admin-company-update.component.css']
})
export class AdminCompanyUpdateComponent implements OnInit {
  title : string = "Update company detail"

  constructor(
    private _appService : CompanyServiceService,
    private _activateRoute : ActivatedRoute,
    private router : Router
  ) { }

  updateForm = new FormGroup({
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
  

  ngOnInit(): void {
    this._appService.getCompanyDetail(this._activateRoute.snapshot.params['id']).subscribe((res) => {
      this.updateForm = new FormGroup({
        company_name: new FormControl(res['company_name']),
        phone_number: new FormControl(res['phone_number']),
        alt_phone_number: new FormControl(res['alt_phone_number']),
        email: new FormControl(res['email']),
        alt_email: new FormControl(res['alt_email']),
        fb_link: new FormControl(res['fb_link']),
        twitter_link: new FormControl(res['twitter_link']),
        instagram_link: new FormControl(res['instagram_link']),
        company_address: new FormControl(res['company_address']),
        google_map: new FormControl(res['google_map']),
        description: new FormControl(res['description']),
      })
    }) 
  }

  onSubmit(){
    if (this.updateForm.valid) {
      this._appService.updateCompanyData(this._activateRoute.snapshot.params['id'], this.updateForm.value).subscribe((res) => {
        Swal.fire({
          position: 'top-end',
          width : '500',
          height : '50px',
          fontSize : '14px',
          title: 'Company data has been updated successfully!',
          showConfirmButton: false,
          timer: 3000
        })
        this.router.navigate(['mg-admin/admin-company'])
        this.updateForm.reset()
      })
    } else {
      Swal.fire({
        position: 'top-end',
        width : '500',
        height : '50px',
        fontSize : '14px',
        title: 'Invalid form!',
        showConfirmButton: false,
        timer: 3000
      })
      this.updateForm.reset()
    }
    
  }

  onDiscard(){
    this.router.navigate(['mg-admin/admin-company'])
  }

}
