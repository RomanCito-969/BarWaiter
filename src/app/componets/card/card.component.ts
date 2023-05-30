import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjectComanda } from 'src/app/ObjectComanda';
import { ObjectData } from 'src/app/model/ObjectData';
import { ComandaService } from 'src/app/service/comanda.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() objeto: ObjectData = {} as ObjectData;
  imageUrl!: string;

  constructor(
    private comandaService: ComandaService,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  enviarComanda() {
    const comanda: ObjectComanda = {
      id: this.objeto.id,
      nombre: this.objeto.nombre,
      cantidad: 1,
    };
    this.comandaService.agregarComanda(comanda);
  }

  borrarComanda() {
    const comanda: ObjectComanda = {
      id: this.objeto.id,
      nombre: this.objeto.nombre,
      cantidad: 1,
    };
    this.comandaService.eliminarORestarProducto(comanda.nombre);
  }
}
