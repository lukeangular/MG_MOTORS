import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-mg-history',
  templateUrl: './admin-mg-history.component.html',
  styleUrls: ['./admin-mg-history.component.css']
})
export class AdminMgHistoryComponent implements OnInit {
  title : string = "Mg history"
  constructor() { }

  ngOnInit(): void {
  }

}
