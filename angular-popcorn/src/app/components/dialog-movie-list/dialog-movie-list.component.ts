import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddMovieDto, ListLoginDto, MarkFavoriteDto } from 'src/app/models/dto/list.dto';
import { List, ListResponse } from 'src/app/models/interfaces/list.interface';
import { MovieResponse } from 'src/app/models/interfaces/movie.interface';
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

export interface DialogMovieListData {
  movieId: number;
}
@Component({
  selector: 'app-dialog-movie-list',
  templateUrl: './dialog-movie-list.component.html',
  styleUrls: ['./dialog-movie-list.component.css']
})
export class DialogMovieListComponent implements OnInit {
  movie!: MovieResponse;
  movieList: List[] = [];
  listLoginDto = new ListLoginDto();
  addMovieDto = new AddMovieDto();
  markFavoriteDto = new MarkFavoriteDto();
  selec!:number;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogMovieListData,
    private moviesService: MoviesService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    console.log(this.data.movieId);
    this.moviesService.getMovie(this.data.movieId).subscribe(moviesResponse => {
      this.movie = moviesResponse;
    });

    this.authService.getList().subscribe(listResponse => {
      this.movieList = listResponse.results;
    });
  }

  addMovieToList(){
    this.addMovieDto.media_id=this.data.movieId;
    this.authService.addMovieToList(this.selec,this.addMovieDto).subscribe();
  }

  addListMovie(){
    this.authService.createdList(this.listLoginDto).subscribe(response => {
      this.addMovieDto.media_id=this.data.movieId;
      this.authService.addMovieToList(response.list_id, this.addMovieDto).subscribe()
    });
  }

  getMovieImg(): string {
    return `${environment.imageBaseUrl}${this.movie.poster_path}`;
  }
}
