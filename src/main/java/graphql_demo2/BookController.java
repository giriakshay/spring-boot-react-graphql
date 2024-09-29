package graphql_demo2;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

@Controller
public class BookController {

	@Autowired
    private BookService bookService;

    // Query to get all books
    @QueryMapping
    public List<Book> books() {
        return bookService.getAllBooks();
    }

    // Query to get a book by its ID
    @QueryMapping
    public Book bookById(@Argument String id) {
        return bookService.getBookById(id);
    }

    // Mutation to add a new book
    @MutationMapping
    public Book addBook(@Argument String title, @Argument String author, @Argument String publisher) {
        return bookService.addBook(title, author, publisher);
    }
    
    @MutationMapping
    public String deleteBook(@Argument String id) {
        return bookService.deleteBookById(id);
    }
}
