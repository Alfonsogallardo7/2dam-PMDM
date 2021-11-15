import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonItemComponent } from './components/person-item/person-item.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonListComponent } from './pages/person-list/person-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetItemComponent } from './components/planet-item/planet-item.component';
import { PlanetListComponent } from './pages/planet-list/planet-list.component';
import { PlanetDetailComponent } from './pages/planet-detail/planet-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PersonDetailComponent } from './pages/person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonItemComponent,
    PersonListComponent,
    PlanetItemComponent,
    PlanetListComponent,
    PlanetDetailComponent,
    PersonDetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialImportsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
