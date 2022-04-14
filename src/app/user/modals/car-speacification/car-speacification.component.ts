import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-car-speacification',
  templateUrl: './car-speacification.component.html',
  styleUrls: ['./car-speacification.component.css']
})
export class CarSpeacificationComponent implements OnInit {

  car_speacification = [
    {
      "name": "Engine",
    },
    {
      "name": "Power performance",
    },
    {
      "name": "Supension and brake",
    },
    {
      "name": "Comfort and convenienceX",
    },
    {
      "name": "Entertaintment",
    },
    {
      "name": "Extra features",
    },
  ]



  constructor() { }

  ngOnInit(): void {
  }

  engineClick(){
    $("#collapseOne").slideToggle();
    $('.engine-card-header').toggleClass('active');
    $('.engine-icon').toggleClass('active');
  }

  performanceClick(){
    $("#collapseTwo").slideToggle();
    $('.performance-card-header').toggleClass('active');
  }
  suspensionClick(){
    $("#collapseThree").slideToggle();
    $('.suspension-card-header').toggleClass('active');
  }

  safetyClick(){
    $("#collapseFour").slideToggle();
    $('.safety-card-header').toggleClass('active');
  }
  comfortClick(){
    $("#collapseFive").slideToggle();
    $('.comfort-card-header').toggleClass('active');
  }
  entertainmentClick(){
    $("#collapseSix").slideToggle();
    $('.entartaintment-card-header').toggleClass('active');
  }
  extracFeatureClick(){
    $("#collapseSeven").slideToggle();
    $('.extra-card-header').toggleClass('active');
  }

}
