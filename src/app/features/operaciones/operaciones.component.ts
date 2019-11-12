import { Component, OnInit } from '@angular/core';
import { Calcular } from 'src/app/models/Calcular';
import { Router } from '@angular/router';
import { CalcularService } from 'src/app/services/calcular.service';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {
  calculos: Calcular[];

  constructor(private router: Router, private calcularService: CalcularService) { }

  ngOnInit() {
    this.getCalculos();
  }

  getCalculos() {
    this.calcularService.getCalcular().subscribe(data => {
      this.calculos = data;
    });
  }

  deleteCalculo(id: number) {
    const res = confirm('Estas seguro de eliminar?');
    if (res) {
      this.calcularService.deleteCalcular(id).subscribe(() => {
        this.getCalculos();
      });
    }
  }

  crearCalculo() {
    this.router.navigate(['/calcular']);
  }

}
