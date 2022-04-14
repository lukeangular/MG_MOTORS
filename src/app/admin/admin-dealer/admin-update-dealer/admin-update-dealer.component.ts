import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminDealerServiceService } from '../admin-dealer-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-admin-update-dealer',
  templateUrl: './admin-update-dealer.component.html',
  styleUrls: ['./admin-update-dealer.component.css']
})
export class AdminUpdateDealerComponent implements OnInit {
  title: string = "Update dealer information"



  constructor(
    private _activateRoute: ActivatedRoute,
    private _dealerService: AdminDealerServiceService,
    private router: Router
  ) { }

  updateForm = new FormGroup({
    dealer_name: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    phone_number: new FormControl(null, [Validators.required]),
    alt_phone_number: new FormControl(null, [Validators.required]),
  })


  ngOnInit(): void {
    this._dealerService.getCurrentDealerDetail(this._activateRoute.snapshot.params['id']).subscribe((res) => {
      this.updateForm = new FormGroup({
        dealer_name: new FormControl(res['dealer_name']),
        address: new FormControl(res['address']),
        phone_number: new FormControl(res['phone_number']),
        alt_phone_number: new FormControl(res['alt_phone_number']),
      })
    })
  }

  onSubmit() {
    if (this.updateForm.valid) {
      this._dealerService.updateDealerData(this._activateRoute.snapshot.params['id'], this.updateForm.value).subscribe((res)=>{
        Swal.fire({
          position: 'top-end',
          width: '500',
          height: '50px',
          fontSize: '14px',
          title: 'Dealer has been updated successfully!',
          showConfirmButton: false,
          timer: 3000
        })
      })
      this.router.navigate(['mg-admin/admin-dealer'])
      this.updateForm.reset()
    } else {
      Swal.fire({
        position: 'top-end',
        width: '500',
        height: '50px',
        fontSize: '14px',
        title: 'Invalid form!',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['mg-admin/admin-dealer'])
      this.updateForm.reset()
    }
  }

}
