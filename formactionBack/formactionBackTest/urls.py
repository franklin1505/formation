from django.urls import path
from .views import (
    PersonneCategorieListCreateView,
    PersonneCategorieRetrieveUpdateDestroyView,
    PersonneListCreateView,
    PersonneRetrieveUpdateDestroyView,
)

urlpatterns = [
    path('categories/', PersonneCategorieListCreateView.as_view(), name='categorie-list-create'),
    path('categories/<int:pk>/', PersonneCategorieRetrieveUpdateDestroyView.as_view(), name='categorie-detail'),
    path('personnes/', PersonneListCreateView.as_view(), name='personne-list-create'),
    path('personnes/<int:pk>/', PersonneRetrieveUpdateDestroyView.as_view(), name='personne-detail'),
]
