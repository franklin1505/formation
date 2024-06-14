import { Injectable } from '@angular/core';
import { Personne, PersonneCategorie } from '../models/modele';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(`${this.apiUrl}personnes/`);
  }

  createPersonne(personne: Personne): Observable<Personne> {
    return this.http.post<Personne>(`${this.apiUrl}personnes/`, personne);
  }

  getPersonne(id: number): Observable<Personne> {
    return this.http.get<Personne>(`${this.apiUrl}personnes/${id}/`);
  }

  updatePersonne(id: number, personne: Personne): Observable<Personne> {
    return this.http.put<Personne>(`${this.apiUrl}personnes/${id}/`, personne);
  }

  deletePersonne(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}personnes/${id}/`);
  }

  getCategories(): Observable<PersonneCategorie[]> {
    return this.http.get<PersonneCategorie[]>(`${this.apiUrl}categories/`);
  }

  createCategorie(categorie: PersonneCategorie): Observable<PersonneCategorie> {
    return this.http.post<PersonneCategorie>(`${this.apiUrl}categories/`, categorie);
  }


/*
  private personnes: Personne[] = [
    { id: 1, nom: 'Dupont', prenom: 'Jean', age: 30 },
    { id: 2, nom: 'Martin', prenom: 'Marie', age: 25 },
    { id: 3, nom: 'Ozon', prenom: 'Toto', age: 1 }
  ];

  getPersonnes(): Personne[] {
    return this.personnes;
  }

  getPersonne(id: number): Personne | undefined {
    return this.personnes.find(p => p.id === id);
  }

  ajouterPersonne(personne: Personne): void {
    this.personnes.push(personne);
  }

  mettreAJourPersonne(personne: Personne): void {
    const index = this.personnes.findIndex(p => p.id === personne.id);
    if (index !== -1) {
      this.personnes[index] = personne;
    }
  }

  supprimerPersonne(id: number): void {
    this.personnes = this.personnes.filter(p => p.id !== id);
  }
 */
}
