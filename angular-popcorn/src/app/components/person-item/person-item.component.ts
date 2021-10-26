import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/interfaces/person-popular.interface';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {
  @ Input() personInput!: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
