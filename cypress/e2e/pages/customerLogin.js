export class loginPage{

weblocators={
    emailField:"input[placeholder='Enter your email']",
    passwordField:"input[placeholder='Enter your password']",
    signInBtn:"Sign in",
    forgotpassword:".forgot-password",
    rememberMe:"#rember"
}



    enterUsername(username){
        cy.get(this.weblocators.emailField).type(username)
    }
    enterPassword(password){
        cy.get(this.weblocators.passwordField).type(password)
    }
    clickSignIn(){
        cy.contains(this.weblocators.signInBtn).click()
    }

}