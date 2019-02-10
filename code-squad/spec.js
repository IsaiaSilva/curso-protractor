/**
 * @file => specs.js
 */

 describe('Poke Dex', function () {
     it('title', function () {
        browser.driver.get('https://pokedex-angular-example.herokuapp.com/#!/list');
     
        var title = element(by.css('.navbar-brand'));
        expect(title.getText()).toEqual('PokeDEX');
        
    });
 });