import { Component, OnInit } from '@angular/core';
import { NgsRevealConfig } from 'ngx-scrollreveal';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  
})
export class HistoryComponent implements OnInit {
  title: string = "MG History"

  history = [
    {
      "title": "MG MORRIS GARAGES IS FOUNDED",
      "date": "1924",
      "description": "Cecil Kimber joined Morris Cars in 1921 and becameGeneral Manager of Morris in 1922. He began producing his own tuned versions of Morris cars to boost sales.These cars took the name from the place they were sold, the Morris Garage.The first MG was the 14/28, based upon the Morris Oxford",
      "is_left": true,
      "image": "assets/img/1924.jpg"
    },
    {
      "title": "A MOVE TO ABINGDON",
      "date": "1929",
      "description": "MG’s increasing popularity meant the company soon outgrew its original facilities. MG would eventually move to a town that became synonymous with the marque, Abingdon on Thames. Abingdon would play host to MG production for the next fifty years.",
      "is_left": false,
      "image": "assets/img/1929.jpg"
    },
    {
      "title": "MG MORRIS GARAGES IS FOUNDED",
      "date": "1930",
      "description": "Cecil Kimber joined Morris Cars in 1921 and becameGeneral Manager of Morris in 1922. He began producing his own tuned versions of Morris cars to boost sales.These cars took the name from the place they were sold, the Morris Garage.The first MG was the 14/28, based upon the Morris Oxford",
      "is_left": true,
      "image": "assets/img/1930.jpg"
    },
    {
      "title": "A MOVE TO ABINGDON",
      "date": "1931",
      "description": "MG’s increasing popularity meant the company soon outgrew its original facilities. MG would eventually move to a town that became synonymous with the marque, Abingdon on Thames. Abingdon would play host to MG production for the next fifty years",
      "is_left": false,
      "image": "assets/img/1931.jpg"
    },
    {
      "title": "THE MG CAR CLUB IS BORN",
      "date": "1933",
      "description": "On the 12th of October 1930 the MG Car Club is formed. 30 MGs attend a meeting at the Roebuck Hotel, near Stevenage. The Club grew quickly and attracted over 500 members by 193",
      "is_left": true,
      "image": "assets/img/1933.jpg"
    },
    {
      "title": "THE FIRST RECORD BREAKER",
      "date": "1945",
      "description": "MG EX120 ‘The Magic Midget’ sets a land speed record, becoming the first 750cc car to exceed 100, hitting a speed of 103.13mph",
      "is_left": false,
      "image": "assets/img/1945.jpg"
    },
    {
      "title": "MG WIN IN ITALY",
      "date": "1950",
      "description": "MG become the first non-Italian marque to win the Mille Miglia (1000 Mile) race in Italy. MG’s K3 Magnette took a class win and MG’s place in the world of motorsport was cemented.",
      "is_left": true,
      "image": "assets/img/1950.jpg"
    }
  ]

  constructor(config: NgsRevealConfig) {
    // customize default values of ngx-scrollreveal directives used by this component tree
    config.duration = 1000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    //other options here
  }

  ngOnInit(): void {
    
  }

}
