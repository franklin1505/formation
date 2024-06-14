import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListePersonnesComponent } from "./liste-personnes/liste-personnes.component";
import { FormPersonneComponent } from "./form-personne/form-personne.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListePersonnesComponent, FormPersonneComponent]
})
export class AppComponent {
  title = 'projet-formation';
}
