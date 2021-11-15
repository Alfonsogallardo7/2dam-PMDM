import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/interfaces/people.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  popularPersons: Person[] = [];
  constructor(private peopleServices: PeopleService) { }

  ngOnInit(): void {
    this.peopleServices.getPeople().subscribe(popularPersonsResponse => {
      this.popularPersons = popularPersonsResponse.results;
    });
  }

}
