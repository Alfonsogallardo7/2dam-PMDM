import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movies-popular-list-component',
  templateUrl: './movies-popular-list-component.component.html',
  styleUrls: ['./movies-popular-list-component.component.css']
})
export class MoviesPopularListComponentComponent implements OnInit {

  movieList: Movie[] | undefined;
  constructor(private movieService: MovieServiceService) { }

  ngOnInit(): void {
  }

  getListMovies(){
    this.movieService.getListMovies().subscribe(resultado => {this.movieList = resultado.results;
      console.log(resultado);
    });
    
  }

}
