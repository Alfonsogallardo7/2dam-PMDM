import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  apellidos: string;
  curso:string;
  position: number;
  edad: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Alfonso', apellidos: 'Gallardo', curso: '1º', edad: 18},
  {position: 2, name: 'Jose', apellidos: 'Rodríguez', curso: '2º', edad: 20},
  {position: 3, name: 'Jesús', apellidos: 'Barco', curso: '1º', edad: 18},
  {position: 4, name: 'Moises', apellidos: 'Miranda', curso: '1º', edad: 19},
  {position: 5, name: 'Javier', apellidos: 'Alvarez', curso: '2º', edad: 22},
  {position: 6, name: 'Daniel', apellidos: 'Merino', curso: '2º', edad: 19},
  {position: 7, name: 'Antonio', apellidos: 'Recio', curso: '1º', edad: 24},
  {position: 8, name: 'Jaime', apellidos: 'Ferrera', curso: '1º', edad: 21},
  {position: 9, name: 'Gonzalo', apellidos: 'Montoya', curso: '1º', edad: 28},
  {position: 10, name: 'Carlos', apellidos: 'Perez', curso: '2º', edad: 18},
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['demo-position' , 'demo-nombre', 'demo-apellidos', 'demo-curso', 'demo-edad', 'demo-Actions'];
    dataSource = ELEMENT_DATA;
  
    ngOnInit(): void {
    }
}



