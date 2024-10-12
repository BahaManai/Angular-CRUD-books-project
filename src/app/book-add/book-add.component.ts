import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  @Input() lastId = 0; // lire un attribut du sélecteur
  addBook(title : string, author:string, price:number)
  {
    const newBook = {
      id : this.lastId +1 ,
      title : title,
      author : author,
      price : price
    };
    console.log(newBook);
  }
}
