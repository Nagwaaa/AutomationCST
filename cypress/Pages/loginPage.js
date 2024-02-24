
class LoginPage
{
    

    UserLogin(username,password)
    {
         cy.get("#LoginInput_UserNameOrEmailAddress").type(username)
         cy.get("#LoginInput_Password").type(password)
         cy.get("[name='Action']").click()
    }

}
export default LoginPage;