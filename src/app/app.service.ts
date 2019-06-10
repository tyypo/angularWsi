import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductPage } from './app.model';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<ProductPage>('https://tyypo.github.io/test/api.json');
  }
}