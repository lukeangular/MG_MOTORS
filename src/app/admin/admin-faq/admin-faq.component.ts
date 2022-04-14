import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-faq',
  templateUrl: './admin-faq.component.html',
  styleUrls: ['./admin-faq.component.css']
})
export class AdminFaqComponent implements OnInit {
  title : string = "Faq"
  constructor() { }

  ngOnInit(): void {
  }

}
