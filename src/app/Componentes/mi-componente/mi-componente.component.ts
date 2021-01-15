import { Component, OnInit } from '@angular/core';
import { Persona } from '../../Modelos/persona';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  public persona = new Persona("Nayeli Guadalupe", "Esquivel Luna", 19, Sexo.F )
  
  constructor() { 
  }

  ngOnInit(): void {
  }
}
enum Sexo {
  M = "Masculino",
  F = "Femenino"
  }
