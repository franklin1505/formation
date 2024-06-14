export interface Personne {
  id: number;
  nom: string;
  prenom: string;
  age: number;
  categorie: number;
}

export interface PersonneCategorie {
  id: number;
  type_personne: string;
}

/*
export class Personne {
  id!: number;
  nom: string ;
  prenom: string;
  age: number;

  constructor(nom: string, prenom: string, age: number) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
  }
}*/
