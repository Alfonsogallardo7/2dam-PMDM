import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddMovieDto, ListLoginDto, MarkFavoriteDto } from 'src/app/models/dto/list.dto';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';
import { DialogMovieListComponent, DialogMovieListData } from '../dialog-movie-list/dialog-movie-list.component';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieInput!: Movie;
  listLoginDto = new ListLoginDto();
  addMovieDto = new AddMovieDto();
  markFavoriteDto = new MarkFavoriteDto();
  select!: number;

  constructor(private dialog: MatDialog,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageBaseUrl}${movie.poster_path}`;
  }

  openDialogMovieList(){
    this.dialog.open(DialogMovieListComponent, {
      height: 'auto',
      width: 'auto',
      data: {movieId: this.movieInput?.id}
    }) 
  }

  addToPlayList(){
    if(this.authService.isLoggedIn()) {
      this.openDialogMovieList();
    } else {
      this.openLoginDialog();
    }
  }
 

  addMovieToFavorite(){
    if(this.authService.isLoggedIn()) {
      this.markFavoriteDto.media_id=this.movieInput.id;
      this.authService.addMovieToFavorite(this.markFavoriteDto).subscribe();
    } else {
      this.openLoginDialog();
    }   
  }

  openLoginDialog() {
    this.dialog.open(DialogLoginComponent, {
      width: 'auto',
      disableClose: true
    });
  }

}
