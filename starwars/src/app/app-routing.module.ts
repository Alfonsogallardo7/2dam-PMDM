import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailComponent } from './pages/person-detail/person-detail.component';
import { PersonListComponent } from './pages/person-list/person-list.component';
import { PlanetDetailComponent } from './pages/planet-detail/planet-detail.component';
import { PlanetListComponent } from './pages/planet-list/planet-list.component';

const routes: Routes = [
  { path:'people', component: PersonListComponent },
  { path: 'planets', pathMatch: 'full', component: PlanetListComponent},
  { path: 'planets/:idPlanet', pathMatch: 'full', component: PlanetDetailComponent},
  { path: 'people/:idPeople', pathMatch: 'full', component: PersonDetailComponent},
  { path: '', pathMatch: 'full', redirectTo: '/people' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
