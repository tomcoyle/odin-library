let myLibrary = [];

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = false
  this.id = myLibrary.length
}

const modal = document.getElementById("modal")
const errorMessage = document.getElementById("duplicate-error")


function addBookToLibrary(book) {
  
  if (!bookInLibrary(book)) {
    myLibrary.push(book)
    newBook(book)
    displayLibrary()
    modal.style.display = "none"
    errorMessage.style.display = "none"
  } else {
    console.log(errorMessage)
    modal.style.display = "block";
    errorMessage.style.display = "block"
  }
}

function displayLibrary() {
  bookshelf.innerHTML = ""
  for (let i = 0; i < myLibrary.length; i++) {
    newBook(myLibrary[i])
  }
}

const bookshelf = document.getElementById("book-shelf") 

const newBook = (book) => {
  const bookCard = document.createElement("div")
  bookCard.className = "book-card"

  const bookTitle = document.createElement("h3")
  bookTitle.className = "book-title"
  bookTitle.innerText = book.title
  bookCard.appendChild(bookTitle)
  
  const bookAuthor = document.createElement("h4")
  bookAuthor.className = "book-author"
  bookAuthor.innerText = book.author
  bookCard.appendChild(bookAuthor)
  
  const removeBtn = document.createElement("button")
  removeBtn.className = "delete-button"
  removeBtn.textContent = "Remove"
  removeBtn.onclick = () => {
    myLibrary.pop(book.id)
    displayLibrary()
  }
  bookCard.appendChild(removeBtn)
  
  bookshelf.appendChild(bookCard)
}

addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 295))



// Open the Modal
const addBtn = document.getElementById("add-btn")
addBtn.onclick = () => {
  document.getElementById("form-title").value=""
  document.getElementById("form-author").value=""
  modal.style.display = "block";
  errorMessage.style.display = "none"
}
// Close the Modal - the modal is the backdrop 
window.onclick = (event) => {
  console.log(event.target)
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Retrieve data from form
const submitBtn = document.getElementById("submit-btn")
submitBtn.onclick = () => {
  const formTitle = document.getElementById("form-title").value
  const formAuthor = document.getElementById("form-author").value
  
  if (formTitle && formAuthor) {
    addBookToLibrary(new Book(formTitle, formAuthor, 0))
    displayLibrary()
    
  }
  
}

function removeBook(title) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].title == title) {
      myLibrary.pop(i)
    }
  }
  displayLibrary()
}

function bookInLibrary(book) {
  for (let i=0; i<myLibrary.length; i++) {
    console.log(book.title, myLibrary[i].title)
    console.log(myLibrary)
    if (book.title===myLibrary[i].title && book.author===myLibrary[i].author) {
      return true
    }
  }
  return false
}
