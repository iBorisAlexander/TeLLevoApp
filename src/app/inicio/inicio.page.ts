import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = {
    usuario: "",
    password: ""
  }

  conductor = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    matricula: new FormControl(''),
    destino: new FormControl(''),
    tarifa: new FormControl(''),
    capacidad: new FormControl('')
  });

  viajero = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    matricula: new FormControl(''),
    destino: new FormControl(''),
    tarifa: new FormControl(''),
    capacidad: new FormControl('')
  });


  element =   false;
  element2 = false;

  mostrar(){
    return (this.element=true)
  }
  desmostrar(){
    return (this.element=false)
  }

  mostrar2(){
    return (this.element2=true)
  }
  desmostrar2(){
    return (this.element2=false)
  }

  limpiar(){
    this.conductor.reset()
  }
}
