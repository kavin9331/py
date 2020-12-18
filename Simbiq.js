describe ('Amplify Testing', function () {

  it('Initial login', function () {
   
    cy.visit('https://devappaccess:2TvXGOqvk&G7pSeA@release-dev.d2e1zdc6fb7y9w.amplifyapp.com/signin')
    cy.wait(300)
    cy.get('[data-test="sign-in-email-input"]').first().type("Sathya");
    cy.get('[data-test="sign-in-password-input"]').first().type("Priya#@33");
    cy.get('[data-test="sign-in-sign-in-button"]').first().click();

  })

  
  it('Simbiq', function (){

    // -- Search and Location -- 
    cy.wait(7000)
    cy.get('#service > div > div.input-container > input').last().type('adolescent medicine',{force: true});
    cy.wait(7000)
    cy.get('#service > div.autocomplete-container.active > div.suggestions-container.is-visible').contains('Pediatrics: Adolescent Medicine').first().click({force: true});
    cy.wait(7000)
    cy.get('#location > div > div.input-container > input').first().type('Bostan MA',{force: true});
    cy.wait(5000)
    cy.get('#searchButton > ion-icon').first().click({ force: true });
    cy.wait(5000)

    // -- Health A-Z -- 
    cy.wait(3000)
    cy.window().get('#healthData').first().click({ force: true });
    cy.wait(3000)
    cy.get('#content > div > div.main-body > div.tab-content.ng-star-inserted > div.search-content > div:nth-child(2) > span > svg > path:nth-child(2)').first().click({ force: true });
    cy.wait(2000)
    cy.get(' #content > div > div.main-body > div.tab-content.ng-star-inserted > div.search-content > div:nth-child(2) > span').first().click({ force: true });
    cy.wait(5000) 
    cy.contains('Conditions').first().click({force:true});
    cy.wait(5000) 
    cy.contains('Procedures').first().click({force:true});
    cy.wait(5000) 
    cy.contains('Abdominal paracentesis').first().click({force:true});
    cy.wait(7000)
    cy.go('back')
    cy.contains('Cost Calculator').first().click({ force: true });
    cy.wait(5000)

    // -- Find-Care Page -- 
    cy.window().get('#search').first().click({ force: true });
    cy.wait(5000)

    // -- Simbiq Logo -- 
    cy.get('#header > section.header > div.logo > a > img').first().click({ force: true });
    cy.wait(5000)

    // -- Find A Doctor -- 
    cy.get('#content > ion-row.home-body.md.hydrated > ion-col:nth-child(1) > ion-card > ion-card-content > div > ion-button').first().click({ force: true });
    cy.wait(4000)
    cy.go('back');

    // -- Estimate Costs -- 
    cy.wait(2000)
    cy.get('#content > ion-row.home-body.md.hydrated > ion-col:nth-child(2) > ion-card > ion-card-content > div > ion-button').first().click({ force: true });
    cy.wait(4000)
    cy.go('back');

    // -- A-Z Directory -- 
    cy.wait(7000)
    cy.get('#content > ion-row.home-body.md.hydrated > ion-col:nth-child(3) > ion-card > ion-card-content > div > ion-button').first().click({ force: true });
    cy.wait(5000) 
    cy.get('#content > div > div.main-body > div.tab-content.ng-star-inserted > div.search-content > div:nth-child(1) > span > svg').first().click({ force: true });
    cy.wait(2000)
    cy.get('#content > div > div.main-body > div.tab-content.ng-star-inserted > div.search-content > div:nth-child(1) > span').first().click({ force: true });
    cy.wait(5000) 
    cy.contains('Conditions').first().click({force:true});
    cy.wait(5000) 
    cy.contains('Procedures').first().click({force:true});
    cy.wait(5000) 
    cy.contains('Abdominal paracentesis').first().click({force:true});
    cy.wait(7000)
    cy.go('back')
    cy.wait(2000)
    cy.go('back')
    // cy.contains('Facility Types').first().click({force:true});
    // cy.wait(5000)
    // cy.go('back');

    // -- Find A Doctor -- 
    cy.get('#content > ion-row.home-body.md.hydrated > ion-col:nth-child(1) > ion-card > ion-card-content > div > ion-button').first().click({ force: true });
    cy.wait(4000)


    // -- Icon 1 -- 
    cy.window().get('#content > ion-row > ion-col > div.search-icons > div:nth-child(1) > ion-button > img').first().click({ force: true });
    cy.wait(5000) 
    cy.get('#content > div > div.main-body > div.tab-content.ng-star-inserted > div.search-content > div:nth-child(1) > span > svg').first().click({ force: true });
    cy.get('#content > div > div.main-body > div.tab-content.ng-star-inserted > div.search-content > div:nth-child(1) > span').first().click({ force: true });
    cy.wait(5000) 
    cy.go('back');

    // -- Icon 2 -- 
    cy.wait(5000)
    cy.window().get('#content > ion-row > ion-col > div.search-icons > div:nth-child(2) > ion-button > img').first().click({ force: true });
    cy.wait(7000) 
    cy.go('back');

    // -- Icon 3 -- 
    cy.wait(5000)
    cy.window().get('#content > ion-row > ion-col > div.search-icons > div:nth-child(3) > ion-button > img').first().click({ force: true });
    cy.wait(4000) 
    cy.go('back');

    // -- Icon 4 -- 
    cy.wait(5000)
    cy.window().get('#content > ion-row > ion-col > div.search-icons > div:nth-child(4) > ion-button > img').first().click({ force: true });
    cy.wait(4000) 
    cy.go('back');

    // -- Icon 5 -- 
    cy.wait(5000)
    cy.window().get('#content > ion-row > ion-col > div.search-icons > div:nth-child(5) > ion-button > img').first().click({ force: true });
    cy.wait(4000) 
    cy.go('back');

     // -- Icon 6 -- 
    cy.wait(5000)
    cy.window().get('#content > ion-row > ion-col > div.search-icons > div:nth-child(6) > ion-button > img').first().click({ force: true });
    cy.wait(4000) 
    cy.go('back');

    // -- Icon 7 --
    cy.wait(5000)
    cy.window().get('#content > ion-row > ion-col > div.search-icons > div:nth-child(7) > ion-button > img').first().click({ force: true });
    cy.wait(4000) 
    cy.go('back');


    // -- Specialities --
    cy.wait(5000)
    cy.contains('Pediatrics').first().click({ force: true });
    cy.wait(7000) 
    cy.go('back');

    // -- Conditions --
    cy.wait(5000)
    cy.contains('10 weeks gestation of pregnancy').first().click({ force: true });
    cy.wait(4000)
    cy.go('back');

    // -- Procedures --
    cy.wait(5000)
    cy.window().get('#content > section > ion-row > ion-col:nth-child(3) > div.col-body > ul > li:nth-child(2) > a').first().click({ force: true });
    cy.wait(4000) 
    cy.go('back');

    // -- Profile-Logout --
    cy.wait(3000)
    cy.get('#header > section.header > div.main-head > div.user-display > div.user-icon').last().find('#userProfile',{ force: true }).click({ force: true });
    cy.wait(3000)
    cy.get('#logout').first().click({force:true});

 })

})
