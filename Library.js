let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
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

// Original book card
// const newBook = (book) => {
//   const bookCard = document.createElement("div")
//   bookCard.className = "book-card"

//   const bookTitle = document.createElement("h3")
//   bookTitle.className = "book-title"
//   bookTitle.innerText = book.title
//   bookCard.appendChild(bookTitle)
  
//   const bookAuthor = document.createElement("h4")
//   bookAuthor.className = "book-author"
//   bookAuthor.innerText = book.author
//   bookCard.appendChild(bookAuthor)
  
//   const removeBtn = document.createElement("button")
//   removeBtn.className = "delete-button"
//   removeBtn.textContent = "Remove"
//   removeBtn.onclick = () => {
//     myLibrary.pop(book.id)
//     displayLibrary()
//   }
//   bookCard.appendChild(removeBtn)
  
//   bookshelf.appendChild(bookCard)
// }

// Penguin Book Card
const newBook = (book) => {
  const bookCardContainer = document.createElement("div")
  bookCardContainer.className = "book-card-container"
  
  const bookCardTop = document.createElement("div")
  bookCardTop.className = "book-card-top"
  const bookCardRemoveBtn = document.createElement("button")
  bookCardRemoveBtn.className = "remove-peng"
  const bookCardRemove = document.createElement("i")
  bookCardRemove.className = "fa-solid fa-xmark"
  bookCardRemoveBtn.onclick = () => {
    myLibrary.pop(book.id)
    displayLibrary()
  }
  bookCardRemoveBtn.appendChild(bookCardRemove)
  bookCardTop.appendChild(bookCardRemoveBtn)
  bookCardContainer.appendChild(bookCardTop)
  
  const bookCardMid = document.createElement("div")
  bookCardMid.className = "book-card-mid"
  const readBookButton = document.createElement("button")
  readBookButton.className="read-book"
  const readBookIcon = document.createElement("i")
  readBookIcon.className="fa-solid fa-book-open"
  readBookButton.appendChild(readBookIcon)
  const unreadBookButton = document.createElement("button")
  unreadBookButton.className="unread-book"
  const unreadBookIcon = document.createElement("i")
  unreadBookIcon.className="fa-solid fa-book"
  unreadBookButton.appendChild(unreadBookIcon)
  bookCardMid.appendChild(readBookButton)
  bookCardMid.appendChild(unreadBookButton)
  bookCardContainer.appendChild(bookCardMid)
  
  if (book.read === true) {
    readBookButton.style.display = "block"
    unreadBookButton.style.display = "none"
  } else {
    readBookButton.style.display = "none"
    unreadBookButton.style.display = "block"
  }
  
  readBookButton.onclick = () => {
    readBookButton.style.display = "none"
    unreadBookButton.style.display = "block";
  }
  unreadBookButton.onclick = () => {
    unreadBookButton.style.display = "none"
    readBookButton.style.display = "block";
  }
  
  const bookCardBottom = document.createElement("div")
  bookCardBottom.className="book-card-bottom"
  const cardAuthor = document.createElement("span")
  cardAuthor.className="card-author"
  cardAuthor.innerText = book.author
  const cardTitle = document.createElement("span")
  cardTitle.className="card-title"
  cardTitle.innerText = book.title
  bookCardBottom.appendChild(cardAuthor)
  bookCardBottom.appendChild(cardTitle)
  bookCardContainer.appendChild(bookCardBottom)
  
  bookshelf.appendChild(bookCardContainer)
}

addBookToLibrary(new Book("The Hobbit", "J.R.R. Tolkien", 295, false))



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
  const bookRead = document.getElementById("read-book-input").checked
  
  if (formTitle && formAuthor) {
    addBookToLibrary(new Book(formTitle, formAuthor, 0, bookRead))
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
