import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../general/services/personne.service';
import { Personne, PersonneCategorie } from '../general/models/modele';
import {NgIf} from '@angular/common';
import {NgFor} from '@angular/common';
import { FormPersonneComponent } from "../form-personne/form-personne.component";
import { FormGroup,FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-liste-personnes',
    standalone: true,
    templateUrl: './liste-personnes.component.html',
    styleUrl: './liste-personnes.component.css',
    imports: [FormsModule, ReactiveFormsModule,NgIf, NgFor, FormPersonneComponent]
})
export class ListePersonnesComponent implements OnInit {
  personnes: Personne[] = [];
  categories: PersonneCategorie[] = [];
  personneForm!: FormGroup;

  constructor(private fb: FormBuilder,private personneService: PersonneService) {
    this.personneForm = this.fb.group({
      id: [0],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', Validators.required],
      categorie: ['', Validators.required]
    });
   }

  ngOnInit(): void {
   /*  this.personnes = this.personneService.getPersonnes(); */
    this.loadPersonnes()
    this.loadCategories();
  }

  loadPersonnes(): void {
    this.personneService.getPersonnes().subscribe((data) => {
      this.personnes = data;
      console.log('donnees retournés depuis la base de donneees', data)
    });
  }

  loadCategories(): void {
    this.personneService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  selectPersonne(personne: Personne): void {
    this.personneForm.patchValue(personne);
  }

  savePersonne(): void {
    if (this.personneForm.valid) {
      const formValue = this.personneForm.value;
      if (formValue.id) {
        this.personneService.updatePersonne(formValue.id, formValue).subscribe(() => {
          this.loadPersonnes();
          this.personneForm.reset();
        });
      } else {
        this.personneService.createPersonne(formValue).subscribe(() => {
          this.loadPersonnes();
          this.personneForm.reset();
        });
      }
    }
  }

  deletePersonne(id: number): void {
    this.personneService.deletePersonne(id).subscribe(() => {
      this.loadPersonnes();
    });
  }

  /* selectPersonne(personne: Personne): void {
    this.selectedPersonne = personne;
  } */

/*   supprimerPersonne(id: number): void {
    this.personneService.supprimerPersonne(id);
    this.personnes = this.personneService.getPersonnes();
  } */
}

