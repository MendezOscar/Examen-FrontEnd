import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalcularService } from 'src/app/services/calcular.service';
import { Calcular } from 'src/app/models/Calcular';

@Component({
  selector: 'app-crearoperacion',
  templateUrl: './crearoperacion.component.html',
  styleUrls: ['./crearoperacion.component.css']
})
export class CrearoperacionComponent implements OnInit {
  calular: Calcular;
  nombre: string;
  operandoUno: string;
  operandoDos: string;
  resultado: string;

  constructor(private router: Router, private calcularService: CalcularService) { }

  ngOnInit() {
  }

  sumar() {
    const res = parseFloat(this.operandoUno) + parseFloat(this.operandoDos);
    this.resultado = res.toString();
    this.nombre = 'Suma';
  }

  restar() {
    const res = parseFloat(this.operandoUno) - parseFloat(this.operandoDos);
    this.resultado = res.toString();
    this.nombre = 'Resta';
  }

  multiplicar() {
    const res = parseFloat(this.operandoUno) * parseFloat(this.operandoDos);
    this.resultado = res.toString();
    this.nombre = 'Mult';
  }

  dividir() {
    const res = parseFloat(this.operandoUno) / parseFloat(this.operandoDos);
    this.resultado = res.toString();
    this.nombre = 'Divicion';
  }

  raiz() {
    const res = Math.sqrt(parseFloat(this.operandoUno));
    this.resultado = res.toString();
    this.nombre = 'Raiz';
  }

  exponencial() {
    const res = Math.pow(parseFloat(this.operandoUno), parseFloat(this.operandoDos));
    this.resultado = res.toString();
    this.nombre = 'Expon';
  }

  createOperacion() {
    this.calular = new Calcular();
    this.calular.nombre = this.nombre;
    this.calular.operandoDos = parseFloat(this.operandoDos);
    this.calular.operandoUno = parseFloat(this.operandoUno);
    this.calular.resultado = parseFloat(this.resultado);
    this.calcularService.createCalcular(this.calular).subscribe(() => {
      this.router.navigate(['/operaciones']);
    });
  }

  cancelar() {
    this.router.navigate(['/operaciones']);
  }

}
