import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {config} from 'src/config'

@Injectable({
  providedIn: 'root'
})
export class AdminMessageServiceService {

  api_url = `${config.json_base_url}/message`;

  constructor(
    private http : HttpClient
  ) { }

  getMessage(){
    return this.http.get(this.api_url)
  }
  getMessageDetail(id){
    return this.http.get(`${this.api_url}/${id}`)
  }
}
