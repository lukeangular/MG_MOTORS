import { Component, OnInit } from '@angular/core';
import { AdminServiceCenterServiceService } from '../admin-service-center-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-admin-update-service-center',
  templateUrl: './admin-update-service-center.component.html',
  styleUrls: ['./admin-update-service-center.component.css']
})
export class AdminUpdateServiceCenterComponent implements OnInit {
  title: string = "Update service center detail"
  alertMessage = ""

  constructor(
    private _activateRoute: ActivatedRoute,
    private _appService: AdminServiceCenterServiceService,
    private route : Router
  ) { }


  updateForm = new FormGroup({
    service_center_name: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    phone_number: new FormControl(null, [Validators.required]),
    longitude: new FormControl(null, [Validators.required]),
    altitude: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required])
  })

  ngOnInit(): void {
    this._appService.detServiceCenterDetail(this._activateRoute.snapshot.params['id']).subscribe((res) => {
      this.updateForm = new FormGroup({
        service_center_name: new FormControl(res['service_center_name']),
        address: new FormControl(res['address']),
        phone_number: new FormControl(res['phone_number']),
        longitude: new FormControl(res['longitude']),
        altitude: new FormControl(res['altitude']),
        description: new FormControl(res['description'])
      })

    }) 
  }

  updateData() {
    if (this.updateForm.valid) {
      this._appService.updateServiceCenterData(this._activateRoute.snapshot.params['id'], this.updateForm.value).subscribe((res) => {
        Swal.fire({
          position: 'top-end',
          width : '500',
          height : '50px',
          fontSize : '14px',
          title: 'Service center data has been updated successfully!',
          showConfirmButton: false,
          timer: 3000
        })
        this.route.navigate(['mg-admin/admin-service'])
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
    }
    this.updateForm.reset()
  }

  onDiscard(){
    this.route.navigate(['mg-admin/admin-service'])
  }

}
