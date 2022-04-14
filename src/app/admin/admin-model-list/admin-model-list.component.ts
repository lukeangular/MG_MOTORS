import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-model-list',
  templateUrl: './admin-model-list.component.html',
  styleUrls: ['./admin-model-list.component.css']
})
export class AdminModelListComponent implements OnInit {

  title : string = "Model list"

  constructor() { }

  ngOnInit(): void {
  }

}
