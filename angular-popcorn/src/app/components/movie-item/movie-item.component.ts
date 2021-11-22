import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';
import { DialogMovieListComponent } from '../dialog-movie-list/dialog-movie-list.component';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieInput!: Movie;

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

  openLoginDialog() {
    this.dialog.open(DialogLoginComponent, {
      width: 'auto',
      disableClose: true
    });
  }

}
