import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-design',
  templateUrl: './car-design.component.html',
  styleUrls: ['./car-design.component.css']
})
export class CarDesignComponent implements OnInit {


  car_design = [
    {
      "name": "Color Variance",
      color_variance : [
        {
          "Title" : "Sahara Gold",
          "image" : "assets/img/veh-colors/Sahara Gold.jpg.png",
          "color" : "#9B2A19",
        },
        {
          "Title" : "Mocha Brown",
          "image" : "assets/img/veh-colors/Mocha Brown.jpg.png",
          "color" : "#41322D",
        },
        {
          "Title" : "Model 2",
          "image" : "assets/img/model2.png",
          "color" : "#AC4D25",
        },
        {
          "Title" : "Obsidian Black",
          "image" : "assets/img/veh-colors/Obsidian Black.jpg.png",
          "color" : "#090909",
        },
        {
          "Title" : "Scottish Silver",
          "image" : "assets/img/veh-colors/Scottish Silver.jpg.png",
          "color" : "#919297",
        },
        {
          "Title" : "Mountain White",
          "image" : "assets/img/veh-colors/Mountain White.jpg.png",
          "color" : "#fff",
        }
      ],
    },
    {
      "name" :"Vechile interior",
      interior : [
        {
          "Title": "Comfortable Driving Seat",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ullam reprehenderit recusandae suscipit animi quidem incidunt tempora ducimus omnis! Rem nesciunt quo libero eum, exercitationem molestias eaque corporis sed ad nisi nemo harum debitis odio perferendis quisquam. Iste perferendis enim deleniti, eaque fugit pariatur, veritatis a officiis ut nostrum nihil.",
          "image" : "assets/img/maxresdefault.jpg",
          "is_left" : true
        },
        {
          "Title": "Safety air bags",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ullam reprehenderit recusandae suscipit animi quidem incidunt tempora ducimus omnis! Rem nesciunt quo libero eum, exercitationem molestias eaque corporis sed ad nisi nemo harum debitis odio perferendis quisquam. Iste perferendis enim deleniti, eaque fugit pariatur, veritatis a officiis ut nostrum nihil.",
          "image" : "assets/img/seat.jpg",
          "is_left" : false
        },
        {
          "Title": " better visibility meter display",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ullam reprehenderit recusandae suscipit animi quidem incidunt tempora ducimus omnis! Rem nesciunt quo libero eum, exercitationem molestias eaque corporis sed ad nisi nemo harum debitis odio perferendis quisquam. Iste perferendis enim deleniti, eaque fugit pariatur, veritatis a officiis ut nostrum nihil.",
          "image" : "assets/img/meter.jpg",
          "is_left" : true
        },
      ]
    },
    {
      "name" :"Vechile Exterior",
      exterior : [
        {
          "Title": "Front Left side view",
          "image" : "assets/img/ext1.webp",
          "is_left" : true
        },
        {
          "Title": "Left side view",
          "image" : "assets/img/ext2.webp",
          "is_left" : false
        },
        {
          "Title": "Back Left side view",
          "image" : "assets/img/ext3.webp",
          "is_left" : true
        },
        {
          "Title": "Front view",
          "image" : "assets/img/ext4.webp",
          "is_left" : false
        },
        {
          "Title": "Back view",
          "image" : "assets/img/ext5.webp",
          "is_left" : true
        },
        {
          "Title": "Top right side view",
          "image" : "assets/img/ext6.jpg",
          "is_left" : false
        },
        {
          "Title": "Front right side view",
          "image" : "assets/img/ext7.webp",
          "is_left" : true
        },
      ]
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

  
  index : number = 0

  clickMenu(index:number){
    this.index = index;
  }

  color_index: number = 0;
  colorclick(i : any){
    this.color_index = i;
  }

}
