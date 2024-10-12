import { Component } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";

@Component({
  selector: 'app-bookslist',
  standalone: true,
  imports: [BookAddComponent],
  templateUrl: './bookslist.component.html',
  styleUrl: './bookslist.component.css'
})
export class BookslistComponent {
  title = "List des livres :";
  books = [
    {id : 1, title : "Power of habits", author : "...", price : 35},
    {id : 2, title : "The Slight age", author : "Jeff Olsen", price : 40},
    {id : 3, title : "Atomic Habits 3", author : "James Clear", price : 50}
  ]
  action ="";
  changeAction(action : string){
    //this est obligatoire pour utiliser les attributs de la classe
    this.action = action;
  }
}
