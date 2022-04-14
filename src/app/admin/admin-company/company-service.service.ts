import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {config} from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  api_url = `${config.json_base_url}/company`;

  constructor(
    private http:HttpClient
    ) { }

    // add company details
    createCompanyData(comapny : any){
      return this.http.post<any>(this.api_url, comapny)
    }

    //get company details
    getCompanyData(){
      return this.http.get(this.api_url)
    }

    getCompanyDetail(id){
      return this.http.get(`${this.api_url}/${id}`)
    }

    updateCompanyData(id, data){
      return this.http.put(`${this.api_url}/${id}`,data)
    }



}

