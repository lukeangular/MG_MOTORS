import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {
  title : string  = "Contact"

  constructor() { }

  ngOnInit(): void {
  }

}
