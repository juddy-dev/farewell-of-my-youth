import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, NgbToastModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  public books: Book[] = [];
  public bookSelected: Book = {};
  public showAlertError: boolean = false;
  public showAlertSuccess: boolean = false;
  public loadingBooks: Boolean = false;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.fetchBooks();
  }

  async checkBook() {
    this.bookSelected.check = true;
    try {
      await this.bookService.update(this.bookSelected);
      this.bookSelected = {};
      this.showAlertSuccess = true;
      this.fetchBooks();
    } catch (error) {
      this.bookSelected.check = false;
      this.showAlertError = true;
    }
  }

  selectBook(book: Book) {
    this.bookSelected = book;
    this.showAlertSuccess = false;
    this.showAlertError = false;
  }

  bookFilter() {
    return this.books.filter(book => !book.check);
  }

  areBooks() {
    return this.bookFilter().length > 0;
  }

  async fetchBooks() {
    this.loadingBooks = true;
    this.books = [];
    try {
      const result = await this.bookService.getList();
      if (result.exists()) {
        this.books = result.val().map((book: Book, index: any) => ({
          cover: book.cover,
          author: book.author,
          name: book.name,
          check: book.check,
          id: index 
        } as Book));
      }
      this.loadingBooks = false;
    } catch(error) {
      this.loadingBooks = false;
    }
  }

}
