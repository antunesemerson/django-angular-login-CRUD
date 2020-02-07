import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as myGlobals from '../globals';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = myGlobals.url;
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseUrl + 'users/',
    {headers: this.httpHeaders});
  }

  getUser(id): Observable<any> {
    return this.http.get(this.baseUrl + 'users/' + id + '/',
    {headers: this.httpHeaders});
  }

  updateUser(user): Observable<any> {
    return this.http.put(this.baseUrl + 'users/' + user.id + '/', user,
    {headers: this.httpHeaders});
  }

  deleteUser(id): Observable<any> {
    return this.http.delete(this.baseUrl + 'users/' + id + '/',
    {headers: this.httpHeaders});
  }
}
