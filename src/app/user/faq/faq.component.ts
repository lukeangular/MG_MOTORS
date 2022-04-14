import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  title : string = "Faq"
  index : any;

  faq_list = [
    {
      "question": "What is MG? And is it a Chinese Brand?",
      "answer": "MG stands for Morris Garages and founded in 1924 in the UK. Basically, this is a British Brand which was acquired by SAIC Motor in 2006 and is widely credited for keeping the much- loved Brand alive through the SAIC UK Technical Center in Longbridge, Birmingham. It has assembly plants all across the Globe with some plants like in India, China and Thailand setup to meet the demands of the Asian market.",
      "is_active" : true,
    },
    {
      "question": "What variants do you have and what about their ground clearance?",
      "answer": "We currently have two variants i.e. GS and ZS. For MG ZS the ground clearance is 185 mm whereas for MG GS it is 200 mm.",
      "is_active" : true,
    },
    {
      "question": " What is the engine displacement for the available models?",
      "answer": "We have two Engine Variants for MG GS, one is 1500cc with Turbo, and the other 2000cc with Turbo. Whereas for MG ZS there are two variants, one is 1000 cc with Turbo and the other is a 1500 cc (Non-Turbo).",
      "is_active" : true,
    },
    {
      "question": "What is the mileage?",
      "answer": "For MG GS - 9 km/l and 13 km/l for MG ZS.",
      "is_active" : true,
    },
  ]


  constructor() {this.faqClick(this.index) }

  ngOnInit(): void {
    
  }

  faqClick(i: any){
    this.index = i
    $('#collpase').slideToggle()
    console.log(i)

  }





  

}
