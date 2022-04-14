import { Component, OnInit } from '@angular/core';
import { AdminMessageServiceService } from './admin-message-service.service';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.css']
})
export class AdminMessageComponent implements OnInit {

  title : string = "Message list"
  isLoading = false
  messageData : any = []

  constructor(
    private _appMessage: AdminMessageServiceService
  ) { }

  ngOnInit(): void {
    this.getData()
  }


  getData(){
    this.isLoading = true
    this._appMessage.getMessage().subscribe((res) =>{
      this.messageData = res
      this.isLoading = false
    })
  }

}
