import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {HistoryServiceService} from 'src/app/admin/admin-mg-history/history-service.service'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appendFile } from 'fs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-history',
  templateUrl: './add-history.component.html',
  styleUrls: ['./add-history.component.css']
})
export class AddHistoryComponent implements OnInit {

  title : string = ""
  fileToUpload: File | null = null;
  
  data : any = []
  successMessage = ""
  alertMessage = "";

  historyForm: FormGroup; 



  constructor(
    private formBuilder: FormBuilder, 
    private _historyService: HistoryServiceService, 
    private http : HttpClient,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.title = 'Edit Blog';
      
    } else {
      this.title = 'Create Blog';
    }

    this.historyForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      is_featured: ['0'],
      is_active: ['1'],
      image: [''],
    });
  }






  onSubmit(){
  }


}
