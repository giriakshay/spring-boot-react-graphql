package graphql_demo2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BookService {

	@Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBookById(String id) {
        return bookRepository.findById(id).orElse(null);
    }

    public Book addBook(String title, String author, String publisher) {
        return bookRepository.save(new Book(title, author, publisher));
    }
    
    public String deleteBookById(String id) {
        bookRepository.deleteById(id);
        return id;
    }
}

