import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjectComanda } from '../ObjectComanda';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ComandaService {
  comandas: ObjectComanda[] = [];
  private apiUrl = `${environment.ApiBarWaiter}`;

  constructor(private http: HttpClient) {}

  agregarComanda(comanda: ObjectComanda) {
    const index = this.comandas.findIndex((item) => item.id === comanda.id);
    if (index !== -1) {
      this.comandas[index].cantidad += 1;
    } else {
      comanda.cantidad = 1;
      this.comandas.push(comanda);
    }
  }

  eliminarORestarProducto(nombre: string) {
    const index = this.comandas.findIndex((p) => p.nombre === nombre);

    if (index !== -1) {
      if (this.comandas[index].cantidad > 0) {
        this.comandas.splice(index, 1);
      } else {
        this.comandas[index].cantidad -= 1;
      }
    }
  }

  getImagenUrl(imagenId: string): Observable<string> {
    const url = `${imagenId}`; // Reemplaza con la ruta correcta de tu API para obtener la URL de la imagen
    return this.http.get<string>(url);
  }
}
