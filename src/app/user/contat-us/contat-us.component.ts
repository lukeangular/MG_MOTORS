import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/Services/app-service.service'
@Component({
  selector: 'app-contat-us',
  templateUrl: './contat-us.component.html',
  styleUrls: ['./contat-us.component.css']
})
export class ContatUsComponent implements OnInit {

  title : string ="Contact us"
  dealer_data : any
  data : any


  lat = 27.71499576963328
  lng = 85.32636972883533

  constructor(private _service : AppServiceService) { }

  ngOnInit(): void {
    this.dealer_data = this._service.dealerData()
    this.data = this._service.companyData()[0]
  }


}
