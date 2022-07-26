import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  getRecords(): Observable<any> {
    const url = 'http://localhost:8000/records';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.httpClient.get<any>(url, httpOptions);
  }

  createRecord(record: any): Observable<any> {
    const url = 'http://localhost:8000/record';
    return this.httpClient.post<any>(url, record);
  }

  updateRecord(record: any): Observable<any> {
    const url = 'http://localhost:8000/record';
    return this.httpClient.put<any>(url, record);
  }

  deleteRecord(email: any): Observable<any> {
    const url = 'http://localhost:8000/record';
    const params = { params: new HttpParams().set('email', email) };
    return this.httpClient.delete<any>(url, params);
  }
}
