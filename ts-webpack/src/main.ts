import $ from 'jquery';

import Book from './model/book';

const book = new Book('Don Quixote', 108.8, 0.1);

$('body').append(`<h1>${book.name}</h1>`);
$('body').append(`<h2>Preço R$: ${book.priceWithDiscount()}</h2>`);
