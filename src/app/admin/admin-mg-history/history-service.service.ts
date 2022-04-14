import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import {config} from 'src/config';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class historyModel {
  history_title : string
  history_date : number
  is_left : boolean
  description : string
  fileSource : string
  file : string
}

@Injectable({
  providedIn: 'root'
})
export class HistoryServiceService {

  api_url = `${config.json_base_url}/history`;

  constructor(private http:HttpClient,) { }

      // add history
      getHistory(){
        return this.http.get(this.api_url).pipe(
          catchError(this.handleError)
        );
      }

      // add history to company
      addHistory(history: any) {
        return this.http.post<any>(this.api_url, history).pipe(
          catchError(this.handleError)
        );
      }

      getDealerData(){
        return this.http.get(this.api_url).pipe(
          catchError(this.handleError)
        );
      }
  
      getCurrentHistoryDetail(id){
        return this.http.get(`${this.api_url}/${id}`).pipe(
          catchError(this.handleError)
        );
      }
  
      updateHistoryData(id, data){
        return this.http.put(`${this.api_url}/${id}`,data).pipe(
          catchError(this.handleError)
        );
      }
  
      deleteHistoryData(id){
        return this.http.delete(`${this.api_url}/${id}`).pipe(
          catchError(this.handleError)
        );
      }


      // Error handling
      private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
    
          // A client-side or network error occurred. Handle it accordingly.
    
          console.error('An error occurred:', error.error.message);
        } else {
    
          // The backend returned an unsuccessful response code.
    
          // The response body may contain clues as to what went wrong.
    
          console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
    
        // return an observable with a user-facing error message
    
        return throwError('Something bad happened. Please try again later.');
      }
}
