import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Person } from 'src/app/models/interfaces/people.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  listarPersonajes: Person[] = [];
  listarPersonajesFiltrados: Person[] = [];
  genderFormControl = new FormControl('');

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(peopleResponse => {
      this.listarPersonajes = peopleResponse.results;
    })
  }

  doFilter() {
    let genderSelected = this.genderFormControl.value;
    this.listarPersonajesFiltrados = this.listarPersonajes.filter(p => p.gender == genderSelected);
  }

}
