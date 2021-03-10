/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

const select = {
  templateOf: {
    bookCart: '#template-book'
  },
  containerOf: {
    booksList: '.books-list'
  },
  imageOf: {
    bookImage: '.book__image'
  }
};

const classNames = {
  bookCart: {
    imageFavorite: 'favorite',
    bookClass: 'book__image',
    checkedClass: 'checked',
    hiddenClass: 'hidden'
  }
};

function render(){
  const thisBookList = this;
  thisBookList.data = dataSource.books;

  for (const book of thisBookList.data){
    const bookTemplate = Handlebars.compile(document.querySelector(select.templateOf.bookCart).innerHTML);
    const generatedHTML = bookTemplate(book);
    thisBookList.element = utils.createDOMFromHTML(generatedHTML);
    const bookContainer = document.querySelector(select.containerOf.booksList);
    bookContainer.appendChild(thisBookList.element);
  }
}
const favoriteBooks = [];

function initActions() {

  const booksList = document.querySelector(select.containerOf.booksList);
  const event = 'dblclick';
  booksList.addEventListener(event, function (event) {
    event.preventDefault();
    if (event.target.offsetParent.classList.contains('book__image')) {
      let id = event.target.offsetParent.getAttribute('data-id');
      if (!favoriteBooks.includes(id)) {
        event.target.offsetParent.classList.add(classNames.bookCart.imageFavorite);
        favoriteBooks.push(id);
      } else {
        event.target.offsetParent.classList.remove(classNames.bookCart.imageFavorite);
        const indexOfId = favoriteBooks.indexOf(id);
        favoriteBooks.splice(indexOfId, 1);
      }
    }
  });
}
render();
initActions();
