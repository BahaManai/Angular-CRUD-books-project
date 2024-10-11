import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Décorateur
@Component({
  selector: 'app-root',
  standalone: true, // mayestha9ch module
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css' //optionel
})
export class AppComponent {
  title = 'Baha Manai\'s first angular app';
}
