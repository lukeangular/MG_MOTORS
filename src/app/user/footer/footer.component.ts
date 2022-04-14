import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/Services/app-service.service'
declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _service : AppServiceService) { }

  data : any

  ngOnInit(): void {
    this.data = this._service.companyData()[0]
  }

  toTop():void{
    $("html, body").animate({ scrollTop: 0 }, 100);
  }


}
