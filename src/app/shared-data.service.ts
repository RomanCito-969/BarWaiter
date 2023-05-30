import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  datosCard: any;
  datosTabla: any[] = [];

  constructor() {}
}
