import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class AdminDealerServiceService {

  api_url = `${config.json_base_url}/dealer`;

  constructor(private http: HttpClient) { }

    // add dealer details
    addDealerDetail(dealer: any) {
      return this.http.post<any>(this.api_url, dealer)
    }

    getDealerData(){
      return this.http.get(this.api_url)
    }

    getCurrentDealerDetail(id){
      return this.http.get(`${this.api_url}/${id}`)
    }

    updateDealerData(id, data){
      return this.http.put(`${this.api_url}/${id}`,data)
    }

    deleteDealerData(id){
      return this.http.delete(`${this.api_url}/${id}`)
    }


}
