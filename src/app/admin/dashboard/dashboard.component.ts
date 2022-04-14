import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // styleUrls: ['../admin.component.css']
})
export class DashboardComponent implements OnInit {
  title : string = "Dashboard"
  
  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {

  }

}
