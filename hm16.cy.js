class DouPage {
    visit() {
      cy.visit('https://dou.ua/');
    }
  
    getArticles() {
      return cy.get('.b-typo');
    }
  
    clickFirstArticle() {
      this.getArticles().first().click();
    }
  }
  
  export default new DouPage();

  import douPage from '../page_objects/douPage';

describe('Dou.ua Tests', () => {
  beforeEach(() => {
    douPage.visit();
  });

  it('Should click the first article', () => {
    douPage.clickFirstArticle();
    cy.url().should('include', '/news/');
  });
});
