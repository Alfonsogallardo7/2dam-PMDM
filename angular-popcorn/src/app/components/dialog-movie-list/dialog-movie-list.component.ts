import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieResponse } from 'src/app/models/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

export interface DialogMovieListData{
  movieId: string;
}
@Component({
  selector: 'app-dialog-movie-list',
  templateUrl: './dialog-movie-list.component.html',
  styleUrls: ['./dialog-movie-list.component.css']
})
export class DialogMovieListComponent implements OnInit {
  movie!:MovieResponse;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogMovieListData,
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    console.log(this.data.movieId)
    this.moviesService.getMovie(this.data.movieId).subscribe(moviesResponse => {
      this.movie = moviesResponse;
    });
  }

  getMovieImg(): string {
    return `${environment.imageBaseUrl}${this.movie.poster_path}`
  }

}
