import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-breadcrumb',
  templateUrl: './admin-breadcrumb.component.html',
  styleUrls: ['./admin-breadcrumb.component.css'],
  // styleUrls: ['../admin.component.css']
})
export class AdminBreadcrumbComponent implements OnInit {

  @Input() title = '';

  constructor() { }

  ngOnInit(): void {
  }

}
