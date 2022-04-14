import { Component, OnInit } from '@angular/core';
import { AdminDealerServiceService } from './admin-dealer-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-admin-dealer',
  templateUrl: './admin-dealer.component.html',
  styleUrls: ['./admin-dealer.component.css']
})
export class AdminDealerComponent implements OnInit {
  title : string = "Dealer"
  dealderData : any = []
  isLoading = false

  constructor(
    private _appService : AdminDealerServiceService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.isLoading = true
    this._appService.getDealerData().subscribe((res)=>{
      this.dealderData = res
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
        this._appService.deleteDealerData(id).subscribe((res) => {
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
