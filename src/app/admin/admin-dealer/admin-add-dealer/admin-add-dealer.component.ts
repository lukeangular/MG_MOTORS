import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminDealerServiceService } from '../admin-dealer-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-dealer',
  templateUrl: './admin-add-dealer.component.html',
  styleUrls: ['./admin-add-dealer.component.css']
})
export class AdminAddDealerComponent implements OnInit {
  title: string = "Add dealer"
  constructor(
    private _appService: AdminDealerServiceService,
    private router: Router
  ) { }

  addForm = new FormGroup({
    dealer_name: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    phone_number: new FormControl(null, [Validators.required]),
    alt_phone_number: new FormControl(null, [Validators.required]),
  })

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.addForm.valid) {
      this._appService.addDealerDetail(this.addForm.value).subscribe((res) => {
        Swal.fire({
          position: 'top-end',
          width: '500',
          height: '50px',
          fontSize: '14px',
          title: 'Dealer has been added successfully!',
          showConfirmButton: false,
          timer: 3000
        })
      })
      this.router.navigate(['mg-admin/admin-dealer'])
    } else {
      Swal.fire({
        position: 'top-end',
        width: '500',
        height: '50px',
        fontSize: '14px',
        title: 'Invalid form',
        showConfirmButton: false,
        timer: 3000
      })
      this.router.navigate(['mg-admin/admin-dealer'])
    }
    this.addForm.reset()
  }

  onDelete(id) {

  }

}
