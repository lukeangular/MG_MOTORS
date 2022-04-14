import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/Services/app-service.service'


@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css']
})
export class ContactSectionComponent implements OnInit {

  data : any
  

  constructor(private _service : AppServiceService) { }

  ngOnInit(): void {
    this.data = this._service.companyData()[0]
  }



}
