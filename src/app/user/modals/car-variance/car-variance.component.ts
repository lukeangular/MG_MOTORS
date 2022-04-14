import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-car-variance',
  templateUrl: './car-variance.component.html',
  styleUrls: ['./car-variance.component.css']
})
export class CarVarianceComponent implements OnInit {

  car_list = [
    {
      "name": "1.7T 6MT 2WD STD",
      "price": "5,800,000",
      "image" : "assets/img/model1.png",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ullam reprehenderit recusandae suscipit animi quidem incidunt tempora ducimus omnis! Rem nesciunt quo libero eum, exercitationem molestias eaque corporis sed ad nisi nemo harum debitis odio perferendis quisquam. Iste perferendis enim deleniti, eaque fugit pariatur, veritatis a officiis ut nostrum nihil."
    },
    {
      "name": "1.5T 7AT 2WD STD",
      "price": "7,800,000",
      "image" : "assets/img/model2.png",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ullam reprehenderit recusandae suscipit animi quidem incidunt tempora ducimus omnis! Rem nesciunt quo libero eum, exercitationem molestias eaque corporis sed ad nisi nemo harum debitis odio perferendis quisquam. Iste perferendis enim deleniti, eaque fugit pariatur, veritatis a officiis ut nostrum nihil."
    },
    {
      "name": " 1.5T 7AT 2WD COM",
      "price": "9,800,000",
      "image" : "assets/img/model3.png",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ullam reprehenderit recusandae suscipit animi quidem incidunt tempora ducimus omnis! Rem nesciunt quo libero eum, exercitationem molestias eaque corporis sed ad nisi nemo harum debitis odio perferendis quisquam. Iste perferendis enim deleniti, eaque fugit pariatur, veritatis a officiis ut nostrum nihil."
    },
    {
      "name": "2.0T 7AT 4WD LUX",
      "price": "3,800,000",
      "image" : "assets/img/model4.png",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ullam reprehenderit recusandae suscipit animi quidem incidunt tempora ducimus omnis! Rem nesciunt quo libero eum, exercitationem molestias eaque corporis sed ad nisi nemo harum debitis odio perferendis quisquam. Iste perferendis enim deleniti, eaque fugit pariatur, veritatis a officiis ut nostrum nihil."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  myAnimateClass: string = '';

  index : number = 0

  onClick(index:number){
    this.index = index
    if(this.myAnimateClass == 'myAnimateClass') {
      this.myAnimateClass = 'something'; 
      this.resetClass();
      } else{
      this.myAnimateClass = 'myAnimateClass';
      }

  }

  resetClass() {
    console.log("check");
    setTimeout(() => {
      this.myAnimateClass = 'myAnimateClass';
    },100);
  }

}
