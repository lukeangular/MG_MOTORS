import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css']
})
export class GetInTouchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  successMessage = "";

  contactForm = new FormGroup({
    fname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    subject: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required]),
  })


  onSubmit() {
    // reset form and set message
    this.successMessage = "Thank you we will be back soon"
    this.contactForm.reset()
  }

}
