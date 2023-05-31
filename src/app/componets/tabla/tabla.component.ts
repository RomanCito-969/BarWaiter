import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { ObjectData } from '../../model/ObjectData';
import { environment } from 'src/environments/environment';
import { ObjectComanda } from 'src/app/model/ObjectComanda';
import { ComandaService } from 'src/app/service/comanda.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  listaObjetos: ObjectData[] = [];
  error: boolean | undefined;
  mensajeError: string | undefined;
  datosRecibidos: ObjectComanda[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private comandaService: ComandaService
  ) {}

  ngOnInit(): void {
    const tipo = this.route.snapshot.data['tipo'];
    const urlApi = `${environment.ApiBarWaiter}` + '/' + tipo;

    if ('home' != tipo) {
      this.apiService.getDatos(urlApi).subscribe(
        (response: ObjectData[]) => {
          // Lógica después de recibir los datos exitosamente
          this.listaObjetos = response;
        },
        (error: any) => {
          // Lógica en caso de error
          this.error = true;
          this.mensajeError = 'No hay Poductos de ' + tipo.toUpperCase();
        }
      );
    }
    this.datosRecibidos = this.comandaService.comandas;
  }

  recibirDatos(comanda: ObjectComanda) {
    console.log(comanda);
    const index = this.datosRecibidos.findIndex(
      (item) => item.id === comanda.id
    );
    if (index !== -1) {
      this.datosRecibidos[index].cantidad += 1;
    } else {
      comanda.cantidad = 1;
      this.datosRecibidos.push(comanda);
    }
  }
}
