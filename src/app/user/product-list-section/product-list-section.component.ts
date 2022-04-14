import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-section',
  templateUrl: './product-list-section.component.html',
  styleUrls: ['./product-list-section.component.css']
})
export class ProductListSectionComponent implements OnInit {

  product_list = [
    {
      "title": "ABOUT MG",
      "description": "MG is the iconic British automobile brand, renowned for its sporty, exciting and value-for-money cars globally.Backed by SAIC Motor, one of the world’s largest automotive companies, all new MGs are built with world-class components and state-of-the-art technology",
      "is_left" : true,
      "image" : "assets/img/about MG.jpg",
      "link" : "about-us"
    },
    {
      "title": "THE HISTORY OF MG",
      "description": "he iconic history of MG can be traced back to 1924. MG stands for Morris Garages, the name chosen by MG’s founder Cecil Kimber as a show of respect for his then boss, William Morris",
      "is_left" : false,
      "image" : "assets/img/history (1).jpg",
      "link" : "history"
    },
    {
      "title": "MG CARS",
      "description": "The latest MG ZS EV comes with the advanced assistance features of MG Pilot. MG Pilot provides a unique and extensive range of safety and technology aids. Now enjoy the safest ride with MG ZS EV.",
      "is_left" : true,
      "image" : "assets/img/lyigh (1).jpg",
      "link" : "modal-list"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
