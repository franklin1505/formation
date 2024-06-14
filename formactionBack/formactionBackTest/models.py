from django.db import models

# Create your models here.

class PersonneCategorie(models.Model):
    type_personne = models.CharField(max_length=100)

    def __str__(self):
        return self.type_personne

class Personne(models.Model):
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    age = models.IntegerField()
    categorie = models.ForeignKey(PersonneCategorie, on_delete=models.CASCADE, related_name='personnes')

    def __str__(self):
        return f"{self.nom} {self.prenom}"
