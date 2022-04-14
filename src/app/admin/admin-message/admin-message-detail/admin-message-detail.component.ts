import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminMessageServiceService } from '../admin-message-service.service';

@Component({
  selector: 'app-admin-message-detail',
  templateUrl: './admin-message-detail.component.html',
  styleUrls: ['./admin-message-detail.component.css']
})
export class AdminMessageDetailComponent implements OnInit {
  title : string = "Message detail"

  constructor(
    private _appMessage: AdminMessageServiceService,
    private _activateRoute : ActivatedRoute,
    private route : Router
  ) { }

  data : any = []

  ngOnInit(): void {
    this._appMessage.getMessageDetail(this._activateRoute.snapshot.params['id']).subscribe((res) =>{
    console.warn(res)
      this.data = res
    })
  }

  
  onBack(){
    this.route.navigate(['mg-admin/admin-message-list'])
  }

}
