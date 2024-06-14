import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Personne, PersonneCategorie } from '../general/models/modele';
import { PersonneService } from '../general/services/personne.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-form-personne',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, ReactiveFormsModule],
  templateUrl: './form-personne.component.html',
  styleUrls: ['./form-personne.component.css'],
})
export class FormPersonneComponent implements OnInit, OnChanges {
  @Input() personne: Personne | null = null;
  @Output() personneChange = new EventEmitter<void>(); // Nouvelle ligne
  personneForm: FormGroup;
  personnes: Personne[] = [];
  categories: PersonneCategorie[] = [];
  newCategorie: PersonneCategorie = { id: 0, type_personne: '' };

  constructor(
    private fb: FormBuilder,
    private personneService: PersonneService
  ) {
    this.personneForm = this.fb.group({
      id: [0],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', Validators.required],
      categorie: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  ngOnChanges(changes: SimpleChanges): void {
    /*  if (changes['personne'] && this.personne) {
      this.personneForm.setValue({
        id: this.personne.id,
        nom: this.personne.nom,
        prenom: this.personne.prenom,
        age: this.personne.age
      });
    } */
  }
  /*
  sauvegarderPersonne(): void {
    const formValue = this.personneForm.value;
    const newPersonne: Personne = {
      id: formValue.id,
      nom: formValue.nom,
      prenom: formValue.prenom,
      age: formValue.age
    };

    if (newPersonne.id === 0) {
      newPersonne.id = this.personneService.getPersonnes().length > 0
        ? Math.max(...this.personneService.getPersonnes().map(p => p.id)) + 1
        : 1;
      this.personneService.ajouterPersonne(newPersonne);
      this.personnes = this.personneService.getPersonnes();
    } else {
      this.personneService.mettreAJourPersonne(newPersonne);
      this.personnes = this.personneService.getPersonnes();
    }

    this.personneChange.emit();  // Nouvelle ligne

    this.personneForm.reset({ id: 0, nom: '', prenom: '', age: 0 });
  } */

  savePersonne(): void {
    if (this.personneForm.valid) {
      const formValue = this.personneForm.value;
      /* if (formValue.id) {
          this.personneService.updatePersonne(formValue.id, formValue).subscribe(() => {
            this.personneForm.reset();
          });
        } else { */
      this.personneService.createPersonne(formValue).subscribe(() => {
        this.personneForm.reset();
      });
    }
  }



  loadCategories(): void {
    this.personneService.getCategories().subscribe((data) => {
      this.categories = data;
      console.log("liste des categorie de personne retourner ", data)
    });
  }

  saveCategorie(): void {
    if (this.newCategorie.type_personne) {
      this.personneService.createCategorie(this.newCategorie).subscribe(() => {
        this.loadCategories();
        console.log('la categorie a été creer avec succès')
        this.newCategorie = { id: 0, type_personne: '' };
      });
    }
  }
}
