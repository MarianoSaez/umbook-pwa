import {
  loginButton,
  usernameTextBox,
  passwordTextBox,
  submitLogin,
  dashboardButton,
  userList,
  emptyUserList,
} from './const';

describe('access to dashboard', () => {

  beforeEach(() => {
    cy.visit('');
  })

  afterEach(() => {
    cy.clearLocalStorage();
  })
  
  it('without credentials via url', () => {

    // Dirigirse al dashboard mediante url
    cy.visit("/dashboard");

    // Deberia encontrarse en dashboard con usuarios en la lista
    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/dashboard");
    })
    cy.get(emptyUserList)
      // .children()
      .should('exist')
      .should('have.length.at.most', 1);
    
  })

  it('without credentials via menu', () => {
    // Dirigirse al dashboard mediante el boton
    cy.get(dashboardButton).click();

    // Deberia encontrarse en dashboard con usuarios en la lista
    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/dashboard");
    })
    cy.get(emptyUserList)
      .should('exist')
      .should('have.length.at.most', 1);

  })

  it('with credentials via menu', () => {
    
    // Hacer login
    cy.get(loginButton).click();
    cy.get(usernameTextBox).type("user");
    cy.get(passwordTextBox).type("user");
    cy.get(submitLogin).click()

    // Dirigirse al dashboard mediante el boton
    cy.get(dashboardButton).click();

    // Deberia encontrarse en dashboard con usuarios en la lista
    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/dashboard");
    })
    cy.get(userList).children().should('exist').should('have.length.at.least', 1);

  
  })
})