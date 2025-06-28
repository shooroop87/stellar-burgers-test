// cypress/e2e/constructor.cy.tsx

/// <reference types="cypress" />

const bun = {
  _id: 'bun1',
  name: 'Булка',
  type: 'bun',
  proteins: 10,
  fat: 5,
  carbohydrates: 20,
  calories: 200,
  price: 100,
  image: 'img.jpg',
  image_mobile: 'img_m.jpg',
  image_large: 'img_l.jpg',
  __v: 0,
};

const ingredient = {
  _id: 'ing1',
  name: 'Мясо',
  type: 'main',
  proteins: 30,
  fat: 20,
  carbohydrates: 10,
  calories: 300,
  price: 200,
  image: 'img.jpg',
  image_mobile: 'img_m.jpg',
  image_large: 'img_l.jpg',
  __v: 0,
};

describe('Конструктор бургеров', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/ingredients', {
      statusCode: 200,
      body: { success: true, data: [bun, ingredient] },
    });

    cy.visit('/');
  });

  it('Добавляю булку и начинку', () => {
    cy.contains(bun.name).trigger('dragstart');
    cy.get('[data-testid="burger-constructor-dropzone"]').trigger('drop');

    cy.contains(ingredient.name).trigger('dragstart');
    cy.get('[data-testid="burger-constructor-dropzone"]').trigger('drop');

    cy.get('[data-testid="constructor-bun"]').should('contain', bun.name);
    cy.get('[data-testid="constructor-fillings"]').should('contain', ingredient.name);
  });

  it('Открываю и закрываю модалку ингредиента', () => {
    cy.contains(ingredient.name).click();
    cy.get('[data-testid="modal"]').should('be.visible');
    cy.get('[data-testid="modal-close"]').click();
    cy.get('[data-testid="modal"]').should('not.exist');
  });

  it('Открываю и закрываю модалку ингредиента', () => {
    cy.contains(ingredient.name).click();
    cy.get('[data-testid="modal"]').should('be.visible');
    cy.get('[data-testid="modal-overlay"]').click({ force: true });
    cy.get('[data-testid="modal"]').should('not.exist');
  });
});