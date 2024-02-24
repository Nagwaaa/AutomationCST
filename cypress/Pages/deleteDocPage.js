

class deleteDocPage
{

   clicksOnDelete()
   {
      cy.get('#confirm').click()
   }

   ElementList(ele,sel)
   {
        cy.get('#filterTxt').clear().type(ele)
        cy.wait(1000)
        cy.get('.ngx-datatable-card').find('.datatable-row-wrapper.ng-star-inserted').each(($l,index,$list)=>
       {
        const name=$l.find('.text-bold.ng-star-inserted').text()
        if(name.includes(ele))
        {
            cy.get(sel).first().click('center',{force: true})
            return false
        }
    }
    )}
   }


  /* GetDocAPI(ele)
   {
      cy.request({
        method: 'GET',
        url: 'https://stg-cstgateway.starwayseg.com/api/cms-service/documents/GetListAsync?requestStatus=2&skipCount=0&maxResultCount=10',
        headers:
        {
            Authorization: "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg0NjM3NjIwMTMwMDVGNDM5OTczMkVEOUVERjREMzQzNTFBQUQyNzUiLCJ4NXQiOiJoR04ySUJNQVgwT1pjeTdaN2ZUVFExR3EwblUiLCJ0eXAiOiJhdCtqd3QifQ.eyJzdWIiOiJmODFkYjAwOC00NWEwLTYwNTYtMjllMy0zYTBlMzMzMTUyMjYiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWJwLmlvIiwicm9sZSI6ImFkbWluIiwiZ2l2ZW5fbmFtZSI6ImFkbWluIiwiZmFtaWx5X25hbWUiOiJhYWEiLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOiJGYWxzZSIsImVtYWlsX3ZlcmlmaWVkIjoiRmFsc2UiLCJ1bmlxdWVfbmFtZSI6ImFkbWluIiwib2lfcHJzdCI6IkFuZ3VsYXIiLCJpc3MiOiJodHRwczovL3N0Zy1jc3RhdXRoc2VydmVyLnN0YXJ3YXlzZWcuY29tLyIsIm9pX2F1X2lkIjoiMjViY2VlZjQtODdlZi00ODY2LTkzYmMtM2EwZjdlNjk1OWM2IiwiY2xpZW50X2lkIjoiQW5ndWxhciIsIm9pX3Rrbl9pZCI6ImY5MTg0OGY0LWUwMGMtNDNiOC1hNzFhLTNhMTBlNDkyOTA3MyIsImF1ZCI6WyJBY2NvdW50U2VydmljZSIsIklkZW50aXR5U2VydmljZSIsIkFkbWluaXN0cmF0aW9uU2VydmljZSIsIlNhYXNTZXJ2aWNlIiwiQ01TU2VydmljZSIsIlRhc2tTZXJ2aWNlIiwiVXNlclByb2ZpbGVTZXJ2aWNlIiwiUmVxdWVzdFNlcnZpY2UiLCJOb3RpZmljYXRpb25TZXJ2aWNlIl0sInNjb3BlIjoib2ZmbGluZV9hY2Nlc3Mgb3BlbmlkIHByb2ZpbGUgZW1haWwgcGhvbmUgQWNjb3VudFNlcnZpY2UgSWRlbnRpdHlTZXJ2aWNlIEFkbWluaXN0cmF0aW9uU2VydmljZSBTYWFzU2VydmljZSBDTVNTZXJ2aWNlIFVzZXJQcm9maWxlU2VydmljZSBUYXNrU2VydmljZSBSZXF1ZXN0U2VydmljZSBOb3RpZmljYXRpb25TZXJ2aWNlIiwianRpIjoiNjM0M2U4OWYtMWIwMi00NTVhLWE2ZjQtODlkMDFhNTNlMDZjIiwiZXhwIjoxNzA4NzE4Mjk4LCJpYXQiOjE3MDg2MzE4OTh9.BMg5DPv05_d0GahWrWxi0WSKWuupZXwTpHZVq-smTcInuewzXWMLp3EVyfgkic5ljUvAlueKw2mIOUbsX8aLduUu2afreT1ZdsrNA-p0z-VwvbTefYziwVypCi_en_OpzN8_tiLK39WmYdwgZDCw2rlYCr1l1_XbXGaTRYgY_z0OJnRJojxWJXogEHzja745pq1t57tA8Kb3LVHsXdAfTrh8kGhJetdGjTv7Bh0oqjCy-6TD1TxB5LYo1G1hLbbWfnwnPG3qeBgUTy74OvpNQRwI6yA-peME4XkDo_7g89Wv7Q7oceqLfGlwsNPCsSG5CVgXlNAyDK935CMlgnAw1Q",
        }
    
      }).then((response) => {
      cy.log('API Response:',response.body);   
      
   })


}*/
export default deleteDocPage;