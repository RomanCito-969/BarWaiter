import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  productos: any[] = [];
  constructor(private http: HttpClient) {}

  getDatos(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  enviarProducto(url: string, formData: FormData) {
    return this.http.post(url, formData);
  }

  modificarProducto(url: string, jsonData: any) {
    return this.http.put(url, jsonData);
  }

  eliminarProducto(url: string) {
    return this.http.delete(url);
  }

  agregarProducto(nombre: string, cantidad: number) {
    const productoExistente = this.productos.find((p) => p.nombre === nombre);
    const uno = 1;
    if (productoExistente) {
      productoExistente.cantidad += productoExistente.cantidad + uno;
    } else {
      this.productos.push({ nombre, uno });
    }
  }
}
