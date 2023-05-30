import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-boton-enviar',
  templateUrl: './boton-enviar.component.html',
  styleUrls: ['./boton-enviar.component.css'],
})
export class BotonEnviarComponent {
  uploadForm: FormGroup;
  selectedFile!: File;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.uploadForm = this.formBuilder.group({
      nombre: '',
      descripcion: '',
      precio: 0,
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  enviarDatos() {
    const tipo = this.route.snapshot.data['tipo'];
    const url = `${environment.ApiBarWaiter}/${tipo}`;

    const formData = new FormData();
    const jsonData = {
      nombre: this.uploadForm.value.nombre,
      descripcion: this.uploadForm.value.descripcion,
      precio: this.uploadForm.value.precio,
    };
    const jsonBlob = new Blob([JSON.stringify(jsonData)], {
      type: 'application/json',
    });

    formData.append('nuevo', jsonBlob);
    formData.append('file', this.selectedFile);

    this.apiService.enviarProducto(url, formData).subscribe(
      (response) => {
        console.log('Formulario enviado correctamente');
        window.location.reload();
      },
      (error) => {
        console.error('Error al enviar el formulario:', error);
        // Manejar el error adecuadamente
      }
    );
  }
}
