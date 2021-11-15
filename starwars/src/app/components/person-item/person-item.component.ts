import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/interfaces/people.interface';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {
  @Input() peopleInput!: Person;
  constructor() { }

  ngOnInit(): void {
  }

  getPersonId(url: String){
    let urlParts = url.split('/');
    let id = urlParts[5];
    return id;

  }
}
