import { Component } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";
import { Book } from '../Model/book';

@Component({
  selector: 'app-bookslist',
  standalone: true,
  imports: [BookAddComponent],
  templateUrl: './bookslist.component.html',
  styleUrl: './bookslist.component.css'
})
export class BookslistComponent {
  title = "Liste des livres :";
  books = [
    new Book(1, "Power of habits", "...",  35),
    new Book( 2,  "The Slight age",  "Jeff Olsen", 40),
    new Book( 3,  "Atomic Habits 3",  "James Clear",  50)
  ];
  action ="";
  changeAction(action : string){
    //this est obligatoire pour utiliser les attributs de la classe
    this.action = action;
  }
  addBook(book:Book){
    this.books = [...this.books,book];
    this.changeAction("");
  }
}
