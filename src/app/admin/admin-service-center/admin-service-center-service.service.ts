import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'src/config';
import {map} from 'rxjs/operators';

export class serviceModel {
  id: number;
  service_center_name: string
  address: number
  phone_number: number
  longitude: number
  altitude: number
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class AdminServiceCenterServiceService {
  

  api_url = `${config.json_base_url}/serviceCenter`;

  constructor(private http: HttpClient) { }

  // add company details
  addServiceDetail(service: any) {
    return this.http.post<any>(this.api_url, service)
  }

  //get company details
  getServiceCenter() {
    return this.http.get(this.api_url)
  }

  detServiceCenterDetail(id){
    return this.http.get(`${this.api_url}/${id}`)
  }

  updateServiceCenterData(id, data){
    return this.http.put(`${this.api_url}/${id}`,data)
  }

  deleteServiceCenterData(id){
    return this.http.delete(`${this.api_url}/${id}`)
  }

}
