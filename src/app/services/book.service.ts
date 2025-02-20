
import { ref, update, get, child } from "firebase/database";
import { Database } from '@angular/fire/database';
import { Book } from "../models/book.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class BookService {

  constructor(private db: Database) {
  }

  public getList() {
    const booksRef = 'books/';
    return get(child(ref(this.db), booksRef));
  }

  public update(book: Book) {
    const pathDB = 'books/' + book.id;
    const updates = `{"${pathDB}": ${JSON.stringify(book)}}`;
    return update(ref(this.db), JSON.parse(updates))
  }
}