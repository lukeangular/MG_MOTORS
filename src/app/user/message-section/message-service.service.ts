import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {config} from 'src/config'

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  api_url = `${config.json_base_url}/message`;

  constructor(private http:HttpClient) { }

  postMessage(message : any){
    return this.http.post<any>(this.api_url, message)
  }
}
