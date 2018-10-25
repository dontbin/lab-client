const showBooksTemplate = require('./templates/book-listing.handlebars')

const showBooksSuccess = function (response) {
  const showBooksHtml = showBooksTemplate({books: response.books })
  $('#data-display').html(showBooksHtml)
}

const showBooksFailure = function (response) {
  $('#data-display').html('Utter Disgrace')
}

module.exports = {
  showBooksSuccess
}
