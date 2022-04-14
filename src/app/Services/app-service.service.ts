import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import {} from 'src/assets/data/about_company.json'

@Injectable({
  providedIn: 'root'
})
export class AppServiceService implements OnInit {

  api = ''

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  company = [{
    "company_name": "MG Motors",
    "phone_number": "01-4443233",
    "alt_phone_number": "4445433",
    "email": "sales@paramountmotors.com.np",
    "fb_link": "facebook.com",
    "youtube_link": "youtube.com",
    "twitter_link": "twitter.com",
    "Address": "Paramount Motors Pvt. Ltd. Naxal, Kathmandu, Nepal",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.117223552532!2d85.32624978149403!3d27.714676109790148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bc4076f6a9%3A0x6b245af3ef7e139a!2sMG%20Motors%20Nepal!5e0!3m2!1sen!2snp!4v1632740121924!5m2!1sen!2snp"
  }]

  dealer = [
    {
    "dealer_name": "New Narayani Motors",
    "address": "Janakpur",
    "phone_number": "9801656450",
    "alt_phone_number": "9852029517",
  },
  {
    "dealer_name": "Mahabir Automobiles",
    "address": "Bargachhi, Biratnagar, Nepal",
    "phone_number": "021-460208",
    "alt_phone_number": "9852024807",
  }
]



  companyData() {
    return this.company
  }

  dealerData(){
    return this.dealer
  }


}
