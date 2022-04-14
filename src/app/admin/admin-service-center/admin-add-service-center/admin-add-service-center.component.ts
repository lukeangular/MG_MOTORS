import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import { AdminServiceCenterServiceService } from '../admin-service-center-service.service';

@Component({
  selector: 'app-admin-add-service-center',
  templateUrl: './admin-add-service-center.component.html',
  styleUrls: ['./admin-add-service-center.component.css']
})
export class AdminAddServiceCenterComponent implements OnInit {
  title: string = "Add service center"

  addForm = new FormGroup({
    service_center_name: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    phone_number: new FormControl(null, [Validators.required]),
    longitude: new FormControl(null, [Validators.required]),
    altitude: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required])
  })

  constructor(
    private _appService: AdminServiceCenterServiceService,
    private route: Router
  ) { }

  ngOnInit(): void {

  }

  // submit data
  onSubmit() {
    if (this.addForm.valid) {
      this._appService.addServiceDetail(this.addForm.value).subscribe((res) => {
        Swal.fire({
          position: 'top-end',
          width: '500',
          height: '50px',
          fontSize: '14px',
          title: 'Service center data has been added successfully!',
          showConfirmButton: false,
          timer: 3000
        })
        this.route.navigate(['mg-admin/admin-service'])
      })
      this.addForm.reset()
    } else {
      Swal.fire({
        position: 'top-end',
        width: '500',
        height: '50px',
        fontSize: '14px',
        title: 'Invalid!',
        showConfirmButton: false,
        timer: 3000
      })
      this.route.navigate(['mg-admin/admin-service'])
      this.addForm.reset()
    }

  }



}
