


class addDocPage
{

    clickOnAddDocument()
    {
        cy.get('.btn-add.ng-star-inserted').click()
    }

    addDocumentSupport(nameAr,nameEN,attach1,attach2,sector,dep,type,year,month,day,note)
    {
        cy.get('#fileNameAr').clear().type(nameAr)
        cy.get('#fileNameEn').clear().type(nameEN)

        cy.UploadAttahment(attach1,0)
        cy.UploadAttahment(attach2,1)
        cy.wait(6000)

        cy.get(".ng-input").first().type(sector)
        cy.get(".ng-option-marked").click()
        
        cy.get(".ng-input").eq(1).type(dep)
        cy.get(".ng-option-marked").click()

        cy.get(".ng-input").last().type(type)
        cy.get(".ng-option-marked").click()

        cy.Calender(year,month,day)

        cy.get('#notes').type(note)

        cy.get('.btn.btn-primary.me-2').click()
        cy.get('#confirm').click()
    }

    addDocument(nameAr,file,sector,dep,type,year,month,day,note='')
    {
       
        cy.get('#fileNameAr').clear().type(nameAr)
        cy.UploadAttahment(file,0)
        cy.wait(6000)
        cy.get(".ng-input").first().type(sector)
        cy.get(".ng-option-marked").click()
        
        cy.get(".ng-input").eq(1).type(dep)
        cy.get(".ng-option-marked").click()
       
        cy.get(".ng-input").last().type(type)
        cy.get(".ng-option-marked").click()
        cy.Calender(year,month,day)
        cy.get('#notes').type(note)
        cy.get('.btn.btn-primary.me-2').click()
        cy.get('#confirm').click()
        
    }
}
export default addDocPage;