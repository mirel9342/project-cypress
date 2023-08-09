/// <reference types="cypress" />
//essa linha vai completa o que escrevemos automaticamente  

// primeira instutura usando o mocar 

describe('Ongs', () =>{
    it('devem colocar o nome da cidade ', () => {
        cy.visit('http://127.0.0.1:5500/clima-app-main/index.html');
        // cy.get - busca um elemento
        // .type - insere um texto 
        // pegamos sempre o id como seletor de cada projeto 
       cy.get('[data-cy=city-input]').type('Sabará');

        cy.get('#search').click();
    });

    
});