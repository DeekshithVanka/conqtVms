///<reference types="cypress"/>


import { registerPage } from "./pages/vendorRegistration"
import {loginPage} from "./pages/customerLogin"
import registerData from "../fixtures/register.json"
import loginData from "../fixtures/login.json"
import { faker } from '@faker-js/faker';


const registerobj=new registerPage()
const loginObjCust=new loginPage()


describe(' Vendor Registration',()=>{
  let email
  
  beforeEach(() => {
    email = faker.internet.email();
    registerobj.openurl()
    registerobj.clickRegisterbtn()
    registerobj.checkTheBox()
    registerobj.clickAccept()
    registerobj.clickquickregister()
  });


    it('Registration by entering only required fields',()=>{
  
      registerobj.selectcountry(registerData.country)
      registerobj.selectVendor(registerData.vendorType)
      registerobj.selectCompanytype(registerData.companyType)
      registerobj.date()
      registerobj.enterusername(email)
      registerobj.enterpassword(registerData["v-password"])
      registerobj.enterconfirmpass(registerData.confirmpass) 
      registerobj.entercompanyname(registerData.companyname1)
      registerobj.enterphonenumber(registerData.phonenumber1)
      registerobj.enterAddress1(registerData.addr1)
      registerobj.enterstate(registerData.state)
      registerobj.entercity(registerData.city)
      registerobj.enterpostalcode(registerData.postalcode)
      registerobj.clickregisternowbtn()
      registerobj.Disclaimercheck()
      registerobj.submit()

    })
    it('registration by entering details in all fields',()=>{
     
      registerobj.selectcountry(registerData.country)
      registerobj.selectVendor(registerData.vendorType)
      registerobj.selectCompanytype(registerData.companyType)
      registerobj.typecapital(registerData.capital)
      registerobj.date()
      registerobj.enterusername(email)
      registerobj.enterpassword(registerData["v-password"])
      registerobj.enterconfirmpass(registerData.confirmpass) 
      registerobj.entercompanyname(registerData.companyname1)
      registerobj.enterwebsite(registerData.website)
      registerobj.enterphonenumber(registerData.phonenumber1)
     registerobj.entermobilenumber(registerData.mobilenumber1)
     registerobj.enterAddress1(registerData.addr1)
     registerobj.enterAddress2(registerData.addr2)
     registerobj.enterstate(registerData.state)
     registerobj.entercity(registerData.city)
     registerobj.enterpostalcode(registerData.postalcode)
     registerobj.clickregisternowbtn()
     registerobj.Disclaimercheck()
     registerobj.submit()
    })
    
    it('Registration by blank fields',()=>{
        
  registerobj.clickregisternowbtn()
 registerobj.registerCountryError().should('exist')
 registerobj.vendorTypeError().should('exist')
 registerobj.companyTypeError().should('exist')
 registerobj.companyTypeError().should('exist')
 registerobj.establishedDateError().should('exist')
 registerobj.passwordError().should('exist')
 registerobj.confirmPasswordError().should('exist')
 registerobj.usernameError().should('exist')
 registerobj.companynameError().should('exist')
 registerobj.adressline1Error().should('exist')

 registerobj.stateError().should('exist')
 registerobj.cityErrror().should('exist')
 registerobj.postalcodeError().should('exist')
  
 



    })
    it('working of Registered country dropdown',()=>{

      registerobj.selectcountry(registerData.country)
      registerobj.registerCountryError().should('not.exist')

    })
   
    it('working of Vendor Type dropdown',()=>{
    
      registerobj.selectVendor(registerData.vendorType)
     
      cy.get("@vt").should('have.value',registerData.vendorType)
      registerobj.vendorTypeError().should('not.exist')
      
      })
    
   
    it('working of companyType dropdown',()=>{
        
      registerobj.selectCompanytype(registerData.companyType)
      registerobj.companyTypeError().should('not.exist')
      
    })
    it('working of Authorized capital field',()=>{
    registerobj.typecapital(registerData.capital)
   
     
    })
    it('working of DatePicker',()=>{
       registerobj.date()
       registerobj.establishedDateError().should('not.exist')
      
    })
    it('working of password field with valid password',()=>{
      
      registerobj.enterpassword(registerData["v-password"])
      registerobj.passwordError().should('not.exist')

    })
    it('working of password field with valid password with min limit',()=>{
    
      registerobj.enterpassword(registerData["bv-password1"])
      registerobj.passwordError().should('not.exist')
    })
    it('working of password field with valid password with max limit',()=>{
    
      registerobj.enterpassword(registerData["bv-password2"])
      registerobj.passwordError().should('not.exist')
    })
    it('working of password field with invalid password due to min limit',()=>{
    
      registerobj.enterpassword(registerData["inv-password"])
      registerobj.passwordError().should('exist')
    })
    it('working of password field with invalid password due to max limit',()=>{
    
      registerobj.enterpassword(registerData["inv-password2"])
      registerobj.passwordError().should('exist')

    })
    it(' password input is same as confirm password',()=>{
    
      registerobj.enterpassword(registerData["v-password"])
      registerobj.enterconfirmpass(registerData["v-password"])
      registerobj.confirmPasswordError().should('not.exist')


    })
    it(' password input is not same as confirm password ',()=>{
    
      registerobj.enterpassword(registerData["bv-password1"])
      registerobj.enterconfirmpass(registerData["v-password"])
      registerobj.confirmPasswordError().should('exist')
    })
    it(' validation usermame field with valid email ',()=>{

    registerobj.enterusername(email)
    registerobj.usernameErrorAT().should('not.exist')
    })
    it(' validation usermame field with  invalid email ',()=>{
    registerobj.enterusername(registerData["inv-username"])
    registerobj.usernameErrorAT().should('exist')
    })

    it('** validation usermame flow with invalid email ',()=>{
      registerobj.selectcountry(registerData.country)
      registerobj.selectVendor(registerData.vendorType)
      registerobj.selectCompanytype(registerData.companyType)
      registerobj.typecapital(registerData.capital)
      registerobj.date()
      registerobj.enterusername(registerData["exist-username"])
      registerobj.enterpassword(registerData["v-password"])
      registerobj.enterconfirmpass(registerData.confirmpass) 
      registerobj.entercompanyname(registerData.companyname1)
      registerobj.enterwebsite(registerData.website)
      registerobj.enterphonenumber(registerData.phonenumber1)
     registerobj.entermobilenumber(registerData.mobilenumber1)
     registerobj.enterAddress1(registerData.addr1)
     registerobj.enterAddress2(registerData.addr2)
     registerobj.enterstate(registerData.state)
     registerobj.entercity(registerData.city)
     registerobj.enterpostalcode(registerData.postalcode)
     registerobj.clickregisternowbtn()
     
    
    
    })
    it('validation of company field with valid details',()=>{

    registerobj.entercompanyname(registerData.companyname1)
    registerobj.companynameError().should('not.exist')
  
    })
    it(' validation of company field with space',()=>{

    registerobj.entercompanyname('  ')
    registerobj.companynameError().should('exist')

})
    it(' validation of phonenumber field by valid',()=>{

    registerobj.enterphonenumber(registerData.phonenumber1)
    
    })
    

    it('Validation of phoneNumber field by invalid details',()=>{

    registerobj.enterphonenumber(registerData.phonenumber2)

    })
    it(' validation of mobilenumber field by valid',()=>{

    registerobj.entermobilenumber(registerData.mobilenumber1)

    })
    

    it('Validation of mobile  number field by invalid details',()=>{

    registerobj.entermobilenumber(registerData.mobilenumber2)
    })
    it('Validation of Adress line1 by valid details',()=>{

    registerobj.enterAddress1(registerData.addr1)
    registerobj.adressline1ErrorAT().should('not.exist')
    
    })
    it('Validation of Adress line1 by Space as input',()=>{

    registerobj.enterAddress1(" ")
    registerobj.adressline1ErrorAT().should('exist')
    })
   
    it('Validation of Adress line2 by valid details',()=>{

    registerobj.enterAddress2(registerData.addr2)

    })
    it('Validation of Adress line2 by Space as input',()=>{

    registerobj.enterAddress2(" ")
    })
    it('Validation of state  dropdown',()=>{
      registerobj.selectcountry(registerData.country)
      registerobj.enterstate(registerData.state)
      registerobj.stateError().should('not.exist')
  
    })
    it('Validation of city dropdown',()=>{
      registerobj.selectcountry(registerData.country)
      registerobj.enterstate(registerData.state)
      registerobj.entercity(registerData.city)
      registerobj.cityErrror().should('not.exist')

    })
    it('Validation of postal code with valid details',()=>{

      registerobj.enterpostalcode(registerData.postalcode)
      registerobj.postalcodeErrorAT().should('not.exist')

    })
    it('Validation of postal code with invalid details',()=>{

      registerobj.enterpostalcode(registerData["inv-postalcode"])
      registerobj.postalcodeErrorAT().should('exist')

    })
  })

//   describe('Customer login',()=>{

      


    

//     it('TC_01: Login with valid username and password', () => {
      
//       logPage.enterUsername(credentials.validUsername)
//       logPage.enterPassword(credentials.validPassword)
//       logPage.clickLogin()
//       cy.contains('Customer Dashboard')
//        });
 
//      it('TC_02: Login with valid username and invalid password', () => {
       
//          logPage.enterUsername(credentials.validUsername)
//          logPage.enterPassword(credentials.invalidPassword)
//         logPage.clickLogin()
//         cy.get('.Toastify__toast-body').should('exist')
//   });
 
//   it('TC_03: Login with invalid username and invalid password', () => {
       
//    logPage.enterUsername(credentials.invalidPassword)
//    logPage.enterPassword(credentials.invalidPassword)
//   logPage.clickLogin()
//   cy.get('.Toastify__toast-body').should('exist')
//  });
//  it('TC_04: Login with Empty username and invalid password', () => {
//        cy.get(locators.usernameField).clear()
//        cy.get(locators.passwordField).clear()
//        logPage.clickLogin()
//   cy.get('[style="padding-bottom: 15px;"] > p').should('exist')//error field username
//   cy.get(':nth-child(2) > p').should('exist')})


//   })
describe('PR creation',()=>{









  

})
  
   
    

    

    

   










