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

function render(){
  const thisBookList = this;
  thisBookList.data = dataSource.books;

  for (const book of thisBookList.data){
    const bookTemplate = Handlebars.compile(document.querySelector(select.templateOf.bookCart).innerHTML);
    const generatedHTML = bookTemplate(book);
    console.log(generatedHTML);
    thisBookList.element = utils.createDOMFromHTML(generatedHTML);
    const bookContainer = document.querySelector(select.containerOf.booksList);
    bookContainer.appendChild(thisBookList.element);
  }
}
render();
