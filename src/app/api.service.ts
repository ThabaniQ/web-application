import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'https://brandapi20231007021047.azurewebsites.net/api'; 
  constructor(private http: HttpClient) { }

  getBrands(): Observable<any> {
    const apiUrl = `${this.baseUrl}/BrandImages/GetBrands`;
    return this.http.get(apiUrl);
  }

  getBrandByName(name: string): Observable<any> {
    const apiUrl = `${this.baseUrl}/BrandImages/${name}`;
    return this.http.get(apiUrl);
  }
}
