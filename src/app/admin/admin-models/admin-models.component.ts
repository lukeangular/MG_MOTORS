import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-models',
  templateUrl: './admin-models.component.html',
  styleUrls: ['./admin-models.component.css']
})
export class AdminModelsComponent implements OnInit {
  title : string = "Models"

  constructor() { }

  ngOnInit(): void {
  }

}
