import deleteDocPage from '../Pages/deleteDocPage'
import addDocPage from "../Pages/addDocPage"
import LoginPage from '../Pages/LoginPage'


describe('adminManageDocuments',()=>
{
    it('AddDocument',()=>
    {   
       const addp=new addDocPage()
       const login=new LoginPage()
       cy.visit('/')
       cy.fixture('TestData').then(function(data)
       {
         login.UserLogin(data.username,data.password)
         cy.SetSttings(data.managment,data.subMenu)
         addp.clickOnAddDocument()
         addp.addDocument(data.docName,data.image,data.sector,data.dep,data.type,data.year,data.month,data.day,"nooote")
         cy.get(".abp-toast-message").last().should('have.text',data.message)

       })

    })


    it('AddDocumentSupportEnglish',()=>
    {   
       const addp=new addDocPage()
       const login=new LoginPage()
       cy.visit('/')
       cy.fixture('TestData').then(function(data)
       {
         login.UserLogin(data.username,data.password)
         cy.SetSttings(data.managment,data.subMenu)
         addp.clickOnAddDocument()
         cy.get('#support').check()
         addp.addDocumentSupport(data.docNameSup,data.nameENsup,data.image,data.image,data.sector,data.dep,data.type,data.year,data.month,data.day,"nooot")
         cy.get(".abp-toast-message").last().should('have.text',data.message)

       })

    })


    it('AdminDownloadAttachment',()=>
    {
      const del=new deleteDocPage()
      const login=new LoginPage()
      cy.visit('/')
       cy.fixture('TestData').then(function(data)
       {
        login.UserLogin(data.username,data.password)
         cy.SetSttings(data.managment,data.subMenu)
         del.ElementList(data.docName,'.icon-download')
         cy.wait(2000)
         cy.readFile('C:/Users/Ts/Desktop/CST/cypress/downloads/'+data.image).should('exist')
       })
    

    })

    it('AdminActiveInactiveDocument',()=>
    {
      const del=new deleteDocPage()
      const login=new LoginPage()
      cy.visit('/')
       cy.fixture('TestData').then(function(data)
       {
        login.UserLogin(data.username,data.password)
         cy.SetSttings(data.managment,data.subMenu)
         del.ElementList(data.docName,'.form-check-input.ng-untouched.ng-pristine.ng-valid')
         del.clicksOnDelete()
         cy.get('.abp-toast-message').should('have.text',' تمت عملية ( تعطيل وثيقة ) بنجاح ')
         
         del.ElementList(data.docName,'.form-check-input.ng-untouched.ng-pristine.ng-valid')
         del.clicksOnDelete()
         cy.get('.abp-toast-message').should('have.text','تمت عملية ( تفعيل وثيقة ) بنجاح ')

       })
    })


    it('AdminDeleteDocument',()=>
{
  const del=new deleteDocPage()
  const login=new LoginPage()
   cy.visit('https://stg-cst.starwayseg.com/')
   cy.fixture('TestData').then(function(data)
   {
    login.UserLogin(data.username,data.password)
     cy.SetSttings(data.managment,data.subMenu)
     del.ElementList(data.docName,'.icon-trash')
     del.clicksOnDelete()
     cy.get('.abp-toast-message').should('have.text',data.delMess)
  

   })
})

  })


    
 
  





  
  
