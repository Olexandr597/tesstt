async function getBooks(category) {
  try {
    const url = `https://books-backend.p.goit.global/books/category?category=${category}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function displayBookInfo(book) {
  const bookInfoHTML = `
        <div class="book">
            <h2>Title: ${book.title}</h2>
            <p>Author: ${book.author}</p>
            <img src="${book.book_image}" alt="Book Image">
            <p>Contributor: ${book.contributor}</p>
        </div>
    `;

  const booksList = document.querySelector('.books-list');
  if (booksList) {
    booksList.innerHTML += bookInfoHTML;
  } else {
    console.error('Element with class "books-list" not found');
  }
}

async function main() {
  const category = 'Hardcover Fiction';
  const booksData = await getBooks(category);
  if (booksData) {
    booksData.forEach(book => displayBookInfo(book));
  }
}

main();
