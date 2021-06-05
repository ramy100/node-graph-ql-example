import { BookService } from '../services/Book.service';

const { find } = require('lodash');
const { books } = require('../data');

export class BookQueries {
  constructor() {}
  getBook({ id }: { id: string }) {
    return find(books, { id: +id });
  }

  getBooks() {
    return books;
  }
}

export class BookMutations {
  constructor() {}
  addBook({
    title,
    author,
    file,
  }: {
    title: string;
    author: string;
    file: string;
  }) {
    // new BookService().create({ author, title, file });
    return null;
  }
}
