import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MAT_DIALOG_SCROLL_STRATEGY_FACTORY } from '@angular/material/dialog';
import { MovieResponse } from 'src/app/models/interfaces/movie.interface';
import { MoviesPopularResponse } from 'src/app/models/interfaces/movies-popular.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

export interface DialogMovieDetailData {
  movieId: string;
}
@Component({
  selector: 'app-dialog-movie-detail',
  templateUrl: './dialog-movie-detail.component.html',
  styleUrls: ['./dialog-movie-detail.component.css']
})
export class DialogMovieDetailComponent implements OnInit {
  movie! : MovieResponse;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogMovieDetailData,
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    console.log(this.data.movieId);
    this.moviesService.getMovie(this.data.movieId).subscribe(moviesResult =>{
      this.movie = moviesResult;
    });
  }

  getMovieImg(): string {
    return `${environment.imageBaseUrl}${this.movie.poster_path}`;
  }

}
