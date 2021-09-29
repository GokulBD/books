const booksList = document.querySelector("#booksList");
const addBooksBtn = document.querySelector("#addBooksBtn");

async function getinfo() {
	const url = "https://www.anapioficeandfire.com/api/books";
	const response = await fetch(url);
	data = await response.json();
	return data;
}
async function getbooks() {
	console.log("getbooks called");
	try {
		let res = await getinfo();
		res.forEach(createBook);
	} catch (err) {
		console.error(err);
	}
}

addBooksBtn.addEventListener("click", getbooks, { once: true });

function createBook(book) {
	const listItem = document.createElement("li");

	const bookName = document.createElement('span');
	bookName.classList.add('book-name');
	bookName.innerText = book.name;
	listItem.appendChild( bookName );

	const bookContents = document.createElement('div');
	bookContents.classList.add('book-contents');
	listItem.appendChild( bookContents );

	const bookRow1 = createBookRow( 'Author', book.authors.toString() );
	bookContents.appendChild( bookRow1 );

	const bookRow2 = createBookRow( 'ISBN', book.isbn );
	bookContents.appendChild( bookRow2 );

	const bookRow3 = createBookRow( 'Number Of Pages', book.numberOfPages );
	bookContents.appendChild( bookRow3 );

	const bookRow4 = createBookRow( 'Publisher', book.publisher );
	bookContents.appendChild( bookRow4 );

	const bookRow5 = createBookRow( 'Released On', book.released );
	bookContents.appendChild( bookRow5 );

	booksList.appendChild(listItem);
}

function createBookRow( name, value ) {
	const bookRow = document.createElement('div');
	bookRow.classList.add('book-row');
	
	const fieldName = document.createElement('span');
	fieldName.innerText = name;
	bookRow.appendChild( fieldName );
	
	const fieldValue = document.createElement('p');
	fieldValue.innerText = value;
	bookRow.appendChild( fieldValue );
	
	return bookRow;
}
