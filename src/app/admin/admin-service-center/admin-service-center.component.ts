import { Component, OnInit } from '@angular/core';
import { AdminServiceCenterServiceService } from './admin-service-center-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-admin-service-center',
  templateUrl: './admin-service-center.component.html',
  styleUrls: ['./admin-service-center.component.css']
})
export class AdminServiceCenterComponent implements OnInit {
  title : string = 'Service center'
  serviceCenterData : any = []
  isLoading = false
  editMode = false
  dataEditKey;
  
  constructor( private _appService:AdminServiceCenterServiceService) { }

  ngOnInit(): void {
    this.getData()
  }

    // get data
    getData(){
      this.isLoading = true
      this._appService.getServiceCenter().subscribe((res) =>{

        console.log("RES => ",res)
        this.serviceCenterData = res
        this.isLoading = false
      })
    }

    onDelete(id){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this._appService.deleteServiceCenterData(id).subscribe((res) => {
            this.getData()
          })
          Swal.fire(
            'Deleted!',
            'Your data has been deleted.',
            'success'
          )
        }
      })
    }

}
