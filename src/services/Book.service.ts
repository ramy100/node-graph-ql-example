import { CreateBookDto, UpdateBookDto } from '../models/Book/book-dto';
import { BookModel } from '../models/Book/Book.model';

export class BookService {
  constructor() {}

  async create(book: CreateBookDto) {
    try {
      await BookModel.create({ ...book });
    } catch (error) {
      console.log(error);
    }
  }

  update(book: UpdateBookDto, book_id: string) {}
}
