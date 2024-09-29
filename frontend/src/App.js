import logo from "./logo.svg";
import "./App.css";
import AddBook from "./AddBook";
import BookList from "./BookList";

function App() {
  return (
    <div className="App">
      <h1>Spring Boot + React + GraphQL</h1>
      <AddBook />
      <BookList />
    </div>
  );
}

export default App;
