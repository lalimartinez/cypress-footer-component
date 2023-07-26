describe('Global Footer', () => {
  beforeEach(() => {
      cy.visit('https://www.webstacks.com/')
  })

  it('checks footer items', () => {
      cy.get('footer').should('exist')
      //Logo and subtext
      cy.getByTitle('Webstacks Logo').should('exist')
      cy.get('.dWEBbn > .Paragraph-sc-19yli7q-0').should('exist')
          .contains('Fullstack product teams to start, run and grow your website')

      //Headings
      cy.get('.ckvfpv').eq(0).should('exist').contains('Company')
      cy.get('.ckvfpv').eq(1).should('exist').contains('Solutions')
      cy.get('.ckvfpv').eq(2).should('exist').contains('Industries')
      cy.get('.ckvfpv').eq(3).should('exist').contains('Partners')
      cy.get('.ckvfpv').eq(4).should('exist').contains('Resources')

      //Links
      cy.get('.klcUgR').eq(0).should('exist').contains('About')
      cy.get('.klcUgR').eq(6).should('exist').contains('Design')
      cy.get('.klcUgR').eq(7).should('exist').contains('SaaS')
      cy.get('.klcUgR').eq(11).should('exist').contains('Gatsby')
      cy.get('.klcUgR').eq(15).should('exist').contains('Join Our Newsletter')

      cy.get('.PrivateSwitchBase-input').should('exist')

      //Social media
      cy.getByAriaLabel('Webstack\'s Twitter').should('exist')
      cy.getByAriaLabel('Webstack\'s Instagram').should('exist')
      cy.getByAriaLabel('Webstack\'s Linkedin').should('exist')
      cy.getByAriaLabel('Webstack\'s Dribbble').should('exist')

      //Newsletter form
      cy.get('#mui-6').should('exist')
      cy.get('.css-16thvln').eq(1).should('exist')

      cy.getByTitle('webstacks-icon.svg').should('exist')
      cy.get('.eyURkD').eq(0).should('exist').contains('Privacy')
      cy.get('.eyURkD').eq(1).should('exist').contains('Sitemap')
      cy.get('small').should('exist').contains('© 2023 Webstacks. All Rights Reserved.')
  })

  it('logos have src and alt attributes', () => {
      cy.getByTitle('Webstacks Logo')
          .should('have.attr', 'src').and('not.be.empty')

      cy.getByTitle('Webstacks Logo')
          .should('have.attr', 'alt').and('not.be.empty')

      cy.getByTitle('webstacks-icon.svg')
          .should('have.attr', 'src').and('not.be.empty')
      
      cy.getByTitle('webstacks-icon.svg')
          .should('have.attr', 'alt').and('not.be.empty')
  })

  it('fills out newsletter input box', () => {
      cy.get('#mui-6').type('lali@test.com')
  })

  it('clicks subscribe button', () => {
      cy.get('.cjoEmt > .MuiButtonBase-root').click()
  })

  it('checks for empty input field', () => {
      cy.get('.cjoEmt > .MuiButtonBase-root').click()
      cy.get('#mui-6').should('have.attr', 'aria-invalid')
  })

  it('clicks footer links', () => {
      //About Link
      cy.get('.klcUgR').eq(0).click()
      cy.location('pathname').should('eq', '/about')

      //Search Engine Optimization link
      cy.get('.klcUgR').eq(5).click()
      cy.location('pathname').should('eq', '/capabilities/search-engine-optimization')

      //Blockchain/Crypto Link
      cy.get('.klcUgR').eq(8).click()
      cy.location('pathname').should('eq', '/industries/blockchain-and-crypto')

      //Hubspot Link
      cy.get('.klcUgR').eq(9).click()
      cy.location('pathname').should('eq', '/partners/hubspot')

      //Client Stories Link
      cy.get('.klcUgR').eq(14).click()
      cy.location('pathname').should('eq', '/client-stories')
  })

  it('footer headings have correct css', () => {
      cy.get('.ckvfpv').eq(0).should('have.css', 'color', 'rgb(9, 105, 221)')
      cy.get('.ckvfpv').eq(0).should('have.css', 'font-family', 'Soehne, sans-serif')
      cy.get('.ckvfpv').eq(0).should('have.css', 'font-size', '14.448px')
  })

  it('links have correct css', () => {
      cy.get('.klcUgR').eq(10).should('have.css', 'color', 'rgb(255, 255, 255)')
      cy.get('.klcUgR').eq(10).should('have.css', 'font-family', 'Soehne, sans-serif')
      cy.get('.klcUgR').eq(10).should('have.css', 'font-size', '14.448px')
  })

  it('dark mode color is correct', () => {
      cy.get('.MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').should('have.attr', 'value', 'true')
      cy.get('.dWDocv > .cTnQgS').should('have.css', 'color', 'rgb(255, 255, 255)')
  })

  it('light mode color is correct', () => {
      cy.get('.MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input').should('have.attr', 'value', 'false')
      cy.get('.dWDocv > .cTnQgS').should('have.css', 'color', 'rgb(6, 7, 9)') 
  })
})