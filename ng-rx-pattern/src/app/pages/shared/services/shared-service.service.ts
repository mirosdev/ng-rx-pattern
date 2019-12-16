import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PizzaModel} from '../models/pizza.model';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {ToppingModel} from '../models/topping.model';


@Injectable()
export class SharedServiceService {
  constructor(private httpClient: HttpClient) {}

  getPizzas() {
    return this.httpClient.get<PizzaModel[]>('http://localhost:8080/api/pizzas')
      .pipe(
        catchError((error: any) => throwError(error))
      );
  }

  getToppings() {
    return this.httpClient.get<ToppingModel[]>('http://localhost:8080/api/toppings')
      .pipe(
        catchError((error: any) => throwError(error))
      );
  }

  createPizza(payload: PizzaModel) {
    return this.httpClient.post<PizzaModel>('http://localhost:8080/api/pizzas', payload)
      .pipe(
        catchError((error: any) => throwError(error))
      );
  }

  updatePizza(payload: PizzaModel) {
    return this.httpClient.put<PizzaModel>('http://localhost:8080/api/pizzas', payload)
      .pipe(
        catchError((error: any) => throwError(error))
      );
  }

  removePizza(payload: PizzaModel) {
    return this.httpClient.delete<PizzaModel>(`http://localhost:8080/api/pizzas/${payload.id}`)
      .pipe(
        catchError((error: any) => throwError(error))
      );
  }
}
