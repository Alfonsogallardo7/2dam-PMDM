import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialImportsModule } from './material-imports.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), MaterialImportsModule, HttpClientModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
