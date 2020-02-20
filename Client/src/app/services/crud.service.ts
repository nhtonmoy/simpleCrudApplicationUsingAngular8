import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/info';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }
}
