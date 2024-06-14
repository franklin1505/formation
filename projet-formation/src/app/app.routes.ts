import { Routes } from '@angular/router';
import { ListePersonnesComponent } from './liste-personnes/liste-personnes.component';
import { FormPersonneComponent } from './form-personne/form-personne.component';

export const routes: Routes = [
  { path: 'liste', component: ListePersonnesComponent },
  { path: 'form', component: FormPersonneComponent },
];
