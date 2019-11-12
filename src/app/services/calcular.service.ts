import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calcular } from '../models/Calcular';

@Injectable({
  providedIn: 'root'
})
export class CalcularService {

  apiUrl = 'https://localhost:5001/api/Calculadora';

  constructor(private http: HttpClient) { }

  getCalcular() {
    return this.http.get<Calcular[]>(this.apiUrl);
  }

  getCalcularById(id: number) {
    return this.http.get<Calcular>(this.apiUrl + '/' + id);
  }

  getCalcularByOperacion(operacion: string) {
    return this.http.get<Calcular>(this.apiUrl + '/' + operacion);
  }

  deleteCalcular(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  createCalcular(calculadora: Calcular) {
    return this.http.post<Calcular>(this.apiUrl, calculadora);
  }

  editCalcular(calculadora: Calcular) {
    return this.http.put<Calcular>(this.apiUrl + '/' + calculadora.idOperacion, calculadora);
  }

}
