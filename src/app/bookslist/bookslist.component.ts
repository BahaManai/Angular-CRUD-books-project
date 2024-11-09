import { Component } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";
import { Book } from '../Model/book';
import { BookEditComponent } from "../book-edit/book-edit.component";

@Component({
  selector: 'app-bookslist',
  standalone: true,
  imports: [BookAddComponent, BookEditComponent],
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
  selectedBookId! : number;
  selectedBook!: Book;
  changeAction(action : string){
    //this est obligatoire pour utiliser les attributs de la classe
    this.action = action;
  }
  addBook(book:Book){
    this.books = [...this.books,book]; //les éléments du tableau + le nouvel élément
    this.changeAction(""); // pour enlever le formulaire
  }

  getId(id: number) {
    this.selectedBookId = id;
    this.selectedBook = this.books.find(book => book.id === id)!;
    this.changeAction('edit');
  }

  editBook(book:Book){
    //Méthode de map plus optimal
    this.books = this.books.map(b => b.id === book.id? book:b);
    this.changeAction("");
  }
  deleteBook(id:number){
    if(confirm("Est ce que vous êtes sure de la suppression ?")){
      this.books = this.books.filter(b => b.id !== id);
    }
  }
}
