import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  status: boolean = false;
  isOpen :boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  
  aboutUs(): void {
    this.status =! this.status;
  }

  ngModels(): void{
    this.status =! this.status;
  }


}
