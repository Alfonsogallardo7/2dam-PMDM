import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/interfaces/planet.interface';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {
  allPlanets: Planet[] = [];
  constructor( private planetService: PlanetService) { }

  ngOnInit(): void {
    this.planetService.getPlanets().subscribe(planetListResponse => {
      this.allPlanets = planetListResponse.results; 
    });
  }

}
