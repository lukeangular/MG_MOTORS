import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {


  img1 = 'assets/img/ezs.png';
  img2 = 'assets/img/mg-gs-banner.png';
  img3 = 'assets/img/ow-quality.jpg';

  imgData : any = [this.img1, this.img2, this.img2]


  
  constructor() { }

  ngOnInit(): void {
  }

}
