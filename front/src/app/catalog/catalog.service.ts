import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, delay, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';


export interface Product {
  completed: boolean;
  name: string;
  price: string;
  category: string;
  id?: number;
}


@Injectable({providedIn: 'root'})


export class ProductService {

  constructor(private http: HttpClient) {
  }

  fetchProducts(): Observable<Product[]> {
    let params = new HttpParams();
    params = params.append('_limit', '5');
    // params = params.append('custom', 'anything');

    return this.http.get<Product[]>('http://localhost:8080/api/product', {
      // params: new HttpParams().set('_limit', '9')
      params,
      observe: 'response' // observe - which data type we want
    } )
      .pipe(
        map(response => { // map - transform data (to console)
          console.log('Response', response);
          return response.body;
        }),
        delay(500),
        catchError(error => {
          console.log('Error', error.message);
          return throwError(error);
        })
      );
  }

}
