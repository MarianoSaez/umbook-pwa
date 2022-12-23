import {
  loginButton,
  usernameTextBox,
  passwordTextBox,
  submitLogin,
  errorAlert,
  errorMsg
} from './const';

describe('login', () => {
  beforeEach(() => {
    cy.visit("");
  })

  afterEach(() => {
    cy.clearAllLocalStorage();
  })

  it('with correct credentials', () => {
    
    cy.get(loginButton).click();
    cy.get(usernameTextBox).type("user");
    cy.get(passwordTextBox).type("user");
    cy.get(submitLogin).click()
  
    // Deberia redireccionar al dashboard
    cy.location().should(loc => {
      expect(loc.pathname).to.eq("/dashboard");
    })
  })
  
  it('without username field', () => {

    cy.get(loginButton).click();
    cy.get(passwordTextBox).type("onlyPassword");
    cy.get(submitLogin).click();

    // Deberia haber un error e informacion acerca del mismo
    cy.get(errorAlert).should('contain.text', 'Error!');
    cy.get(errorMsg).should('contain.text', "Please enter a valid email");

  })

  it('without password field', () => {

    cy.get(loginButton).click();
    cy.get(usernameTextBox).type("onlyUsername");
    cy.get(submitLogin).click();

    // Deberia haber un error e informacion acerca del mismo
    cy.get(errorAlert).should('contain.text', 'Error!');
    cy.get(errorMsg).should('contain.text', "Please enter your password");

  })

  it('with bad credentials', () => {
    
    cy.get(loginButton).click();
    cy.get(usernameTextBox).type("badUsername");
    cy.get(passwordTextBox).type("badPassword");
    cy.get(submitLogin).click()

    // Deberia haber un error e informacion acerca del mismo
    cy.get(errorAlert).should('contain.text', 'Error!');
    cy.get(errorMsg).should('contain.text', "Auth failure! Please create an account");

    
  });


})