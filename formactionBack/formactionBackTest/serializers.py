from rest_framework import serializers
from .models import Personne, PersonneCategorie

class PersonneCategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonneCategorie
        fields = ['id', 'type_personne']

class PersonneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personne
        fields = ['id', 'nom', 'prenom', 'age', 'categorie']

class PersonneViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personne
        fields = '__all__'
        depth = 1
