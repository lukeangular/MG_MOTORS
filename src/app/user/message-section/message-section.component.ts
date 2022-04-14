import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { MessageServiceService } from './message-service.service';

@Component({
  selector: 'app-message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {

  constructor(
    private _appMessage :MessageServiceService
  ) { }

  successMessage = false
  invalidMessage = false

  contactForm = new FormGroup({
    fname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required]),
    subject: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required]),
  })

  ngOnInit(): void {
  }

  onSubmit() {
    // reset form and set message
    if(this.contactForm.valid){
      this._appMessage.postMessage(this.contactForm.value).subscribe((res) =>{
        this.successMessage = true
        setTimeout(() => {
          this.successMessage = false
        },4000)
        
      })
      this.contactForm.reset()
    }else{
      this.successMessage = true
      setTimeout(() => {
        this.invalidMessage = false
      },4000)
    }
  }

}
