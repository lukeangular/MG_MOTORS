import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.css']
})
export class ModalListComponent implements OnInit {
  title : string = "MG Model List"

  model_list = [
    {
      "title": "MG HECTOR",
      "description": "The MG ZS gives you the best, and that includes what’s found under the bonnet. Which is why we designed a compact SUV that gives you premium style, without the premium price tag. The smooth lines and high-end touches aren’t just there to look good; they’ll make you feel good too. Knowing that you’re in a ride that doesn’t do middle-of-the-road. This luxury SUV turns heads in both the town and the country.",
      "is_left" : true,
      "image" : "assets/img/low2.jpg"
    },
    {
      "title": "MG ZS",
      "description": "The MG ZS gives you the best, and that includes what’s found under the bonnet. Which is why we designed a compact SUV that gives you premium style, without the premium price tag. The smooth lines and high-end touches aren’t just there to look good; they’ll make you feel good too. Knowing that you’re in a ride that doesn’t do middle-of-the-road. This luxury SUV turns heads in both the town and the country.",
      "is_left" : false,
      "image" : "assets/img/model1.png"
    },
    {
      "title": "MG ZS",
      "description": "The MG ZS gives you the best, and that includes what’s found under the bonnet. Which is why we designed a compact SUV that gives you premium style, without the premium price tag. The smooth lines and high-end touches aren’t just there to look good; they’ll make you feel good too. Knowing that you’re in a ride that doesn’t do middle-of-the-road. This luxury SUV turns heads in both the town and the country.",
      "is_left" : true,
      "image" : "assets/img/model2.png"
    },
    {
      "title": "MG ZS",
      "description": "The MG ZS gives you the best, and that includes what’s found under the bonnet. Which is why we designed a compact SUV that gives you premium style, without the premium price tag. The smooth lines and high-end touches aren’t just there to look good; they’ll make you feel good too. Knowing that you’re in a ride that doesn’t do middle-of-the-road. This luxury SUV turns heads in both the town and the country.",
      "is_left" : false,
      "image" : "assets/img/model3.png"
    },
    {
      "title": "MG ZS",
      "description": "The MG ZS gives you the best, and that includes what’s found under the bonnet. Which is why we designed a compact SUV that gives you premium style, without the premium price tag. The smooth lines and high-end touches aren’t just there to look good; they’ll make you feel good too. Knowing that you’re in a ride that doesn’t do middle-of-the-road. This luxury SUV turns heads in both the town and the country.",
      "is_left" : true,
      "image" : "assets/img/model4.png"
    },
    {
      "title": "MG ZS",
      "description": "The MG ZS gives you the best, and that includes what’s found under the bonnet. Which is why we designed a compact SUV that gives you premium style, without the premium price tag. The smooth lines and high-end touches aren’t just there to look good; they’ll make you feel good too. Knowing that you’re in a ride that doesn’t do middle-of-the-road. This luxury SUV turns heads in both the town and the country.",
      "is_left" : false,
      "image" : "assets/img/model5.png"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
