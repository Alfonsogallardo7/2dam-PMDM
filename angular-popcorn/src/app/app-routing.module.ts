import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesPopularListComponent } from './components/movies-popular-list/movies-popular-list.component';
import { PersonPopularListComponent } from './components/person-popular-list/person-popular-list.component';

const routes: Routes = [
  {path: 'movies', component: MoviesPopularListComponent},
  {path: 'people', component: PersonPopularListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
