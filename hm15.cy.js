

const fs = require('fs-extra');

Cypress.Commands.add('saveUrlsToJson', (urls) => {
  fs.writeJson('urls.json', { urls })
    .then(() => console.log('Urls saved to urls.json'))
    .catch(err => console.error(err));
});

cy.saveUrlsToJson(['https://example.com', 'https://google.com']);



const fs = require('fs-extra');

module.exports = (on, config) => {
  on('task', {
    getUrls: () => {
      return fs.readJson('urls.json');
    }
  });
};

cy.task('getUrls').then(urls => {
    console.log('Retrieved URLs:', urls);
  });