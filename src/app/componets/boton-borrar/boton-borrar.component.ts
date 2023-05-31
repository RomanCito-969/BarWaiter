import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ObjectData } from 'src/app/model/ObjectData';
import { ApiService } from 'src/app/service/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.css'],
})
export class BotonBorrarComponent {
  @Input() listaObjetos!: ObjectData[];
  selectedItem: number | undefined;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  borrarProducto() {
    if (this.selectedItem !== undefined) {
      const tipo = this.route.snapshot.data['tipo'];
      const urlApi = `${environment.ApiBarWaiter}/${tipo}/${this.selectedItem}`;
      this.apiService.eliminarProducto(urlApi).subscribe(
        (response) => {
          window.location.reload();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}
