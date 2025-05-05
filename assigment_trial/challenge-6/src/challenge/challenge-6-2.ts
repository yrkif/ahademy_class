//Define a generic Book<T> type with:
// title (string)
// author (string)
// extraDetails (generic type T)

type Book<T> = {
  title: string;
  author: string;
  extraDetails: T;
};

// Make a createBook function, that takes a title, author, and details as input, and returns a Book object
function createBook<T>(
  title: string,
  author: string,
  extraDetails: T
): Book<T> {
  return { title, author, extraDetails };
}

//Make a createBookManager function, that takes a generic type parameter T that extends { year: number }. Inside the createBookManager function, you need to:
// Make books array to store books
function createBookManager<T extends { year: number }>() {
  let books: Book<T>[] = [];

  // Make a addBook function that takes a title, author, and details as input and adds a new book to the books array

  function addBook(title: string, author: string, extraDetails: T): void {
    books.push({ title, author, extraDetails });
    console.log(`Book added: \"${title}\" by ${author} (${extraDetails})`);
  }

  // Make a searchBooks function that takes a query as input and returns an array of books that match the query (the search must be by title and case-insensitive)

  function searchBooks(title?: string): Book<T>[] {
    if (!title) {
      console.log('Please provide a title to search.');
      return [];
    }

    const foundBook = books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );

    if (foundBook.length === 0) {
      console.log(`No books found with title containing \"${title}"\.`);
      return [];
    }
    console.log(`Search Results for \"${title}"\:`);
    books.forEach((book) =>
      console.log(`- ${book.title} by ${book.author} (${book.extraDetails})`)
    );

    return foundBook;
  }

  // Make a countBooks function that returns a Promise that resolves to the number of books in the books array (here you must use Promise and setTimeout to simulate async work, for setTimeout use 100ms)
  async function countBooks(): Promise<number> {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });
    return books.length;
  }
  countBooks().then((count) => console.log(`Total books: ${count}`));

  //return an object with addBook, searchBooks, and countBooks
  return {
    addBook,
    searchBooks,
    countBooks,
  };
}

//result
//1.setting up catalog
type BasicDetails = {
  year: number;
  pages: number;
};

const manager = createBookManager<BasicDetails>();

//2.adding books
manager.addBook('TypeScript Basics', 'Alice', {
  year: 2023,
  pages: 200,
});

manager.addBook('Learning React', 'Bob', {
  year: 2022,
  pages: 180,
});

//3.searching books
const results = manager.searchBooks('typescript');
console.log(results);

//4. Counting books
await manager.countBooks();

// Don't delete code bellow and this code must be at the bottom of the file
export type { Book };
export { createBook, createBookManager };
