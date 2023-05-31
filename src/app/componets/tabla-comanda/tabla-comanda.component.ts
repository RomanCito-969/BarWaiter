import { Component, Input } from '@angular/core';
import { ObjectComanda } from 'src/app/model/ObjectComanda';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-tabla-comanda',
  templateUrl: './tabla-comanda.component.html',
  styleUrls: ['./tabla-comanda.component.css'],
})
export class TablaComandaComponent {
  @Input() datosRecibidos: ObjectComanda[] = [];

  generarPDF() {
    const doc = new jsPDF();

    // Obtener los datos de la tabla o información necesaria para el PDF
    const tableData = this.datosRecibidos; // Supongamos que `comandas` es el array de datos de la tabla

    // Añadir la imagen al PDF
    const img = new Image();
    img.src = 'assets/img/favicon/android-chrome-512x512.png';

    img.onload = () => {
      const imgWidth = 30;
      const imgHeight = 30;
      const imgX = 20; // Espacio desde el borde izquierdo
      const imgY = 20; // Espacio desde el borde superior

      // Generar el contenido del PDF
      doc.addImage(img, 'PNG', imgX, imgY, imgWidth, imgHeight);

      // Obtener la posición vertical después de la imagen
      const tableY = imgY + imgHeight + 20;

      // Definir las columnas y filas del PDF
      const columns = ['Nombre', 'Cantidad'];
      const rows = tableData.map((comanda) => [
        comanda.nombre,
        comanda.cantidad.toString(),
      ]);

      doc.text('Tabla de Comandas', 10, tableY); // Colocar el título debajo de la imagen
      autoTable(doc, { columns, body: rows, startY: tableY + 10 }); // Colocar la tabla debajo del título

      // Guardar el PDF
      doc.save('tabla_comandas.pdf');
    };
  }
}
