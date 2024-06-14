# Generated by Django 4.2.13 on 2024-06-14 19:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PersonneCategorie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_personne', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Personne',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
                ('prenom', models.CharField(max_length=100)),
                ('age', models.IntegerField()),
                ('categorie', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='personnes', to='formactionBackTest.personnecategorie')),
            ],
        ),
    ]
