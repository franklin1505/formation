from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Personne, PersonneCategorie
from .serializers import PersonneSerializer, PersonneCategorieSerializer

class PersonneCategorieListCreateView(generics.ListCreateAPIView):
    queryset = PersonneCategorie.objects.all()
    serializer_class = PersonneCategorieSerializer

class PersonneCategorieRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PersonneCategorie.objects.all()
    serializer_class = PersonneCategorieSerializer

class PersonneListCreateView(generics.ListCreateAPIView):
    queryset = Personne.objects.all()
    serializer_class = PersonneSerializer

class PersonneRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Personne.objects.all()
    serializer_class = PersonneSerializer
