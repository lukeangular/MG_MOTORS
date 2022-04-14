import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
  title : string = "MG Models"

  constructor() { }

  ngOnInit(): void {
  }



}
