import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from "rxjs/operators";
import {Observable} from "rxjs";

export interface Product {
  completed: boolean;
  title: string;
  id?: number;
}


@Injectable({providedIn: 'root'})


export class ProductService {

  constructor(private http: HttpClient) {
  }

  fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://jsonplaceholder.typicode.com/todos?_limit=8')
      .pipe(delay(500));
  }

}
