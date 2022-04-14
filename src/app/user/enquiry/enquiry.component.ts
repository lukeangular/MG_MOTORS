import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEnquiry(): void {
    console.log("i am clicked")
    this.status = !this.status;
    $(this).parents('.enquiry-form').toggleClass('active');
  }

  successMessage = "";

  contactForm = new FormGroup({
    fname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required]),
    product: new FormControl(null, [Validators.required]),
    enquiry: new FormControl(null, [Validators.required]),
  })


  onSubmit() {
    // reset form and set message
    this.successMessage = "Thank you we will be back soon"
    this.contactForm.reset()
  }

}
