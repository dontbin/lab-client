
const api = require('./api')
const ui = require('./ui')

const onGetBooks = function (event) {
  api.getBooks()
    .then(ui.showBooksSuccess)
    .catch(ui.showBooksFailure)
}

module.exports = {
  onGetBooks
}
