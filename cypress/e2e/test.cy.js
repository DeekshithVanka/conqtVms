///<reference types="cypress"/>


import { registerPage } from "./pages/registerPage"
import registerData from "../fixtures/register.json"
import { faker } from '@faker-js/faker';


const registerobj=new registerPage()


describe('Registration',()=>{
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
      registerobj.entercompanyname(registerData.companyname)
      registerobj.enterphonenumber(registerData.phonenumber)
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
      registerobj.entercompanyname(registerData.companyname)
      registerobj.enterwebsite(registerData.website)
      registerobj.enterphonenumber(registerData.phonenumber)
     registerobj.entermobilenumber(registerData.mobilenumber)
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

    })
    it('working of Registered country dropdown',()=>{

     
      registerobj.selectcountry(registerData.country)

    })
   
    it('working of Vendor Type dropdown',()=>{
    
      registerobj.selectVendor(registerData.vendorType)
    
    })
    it('working of companyType dropdown',()=>{
        
      registerobj.selectCompanytype(registerData.companyType)
      
      
    })
    it('working of Authorized capital field',()=>{
       
      registerobj.typecapital(registerData.capital)
     
    })
    it('working of DatePicker',()=>{
      
      registerobj.date()
      
    })
    it('working of password field with valid password',()=>{
      
      registerobj.enterpassword(registerData["v-password"])

    })
    it('working of password field with valid password with min limit',()=>{
    
      registerobj.enterpassword(registerData["bv-password1"])
    })
    it('working of password field with valid password with max limit',()=>{
    
      registerobj.enterpassword(registerData["bv-password2"])
    })
    it('working of password field with invalid password due to min limit',()=>{
    
      registerobj.enterpassword(registerData["inv-password"])
    })
    it('working of password field with invalid password due to max limit',()=>{
    
      registerobj.enterpassword(registerData["inv-password2"])
    })
    it(' password input is same as confirm password ',()=>{
    
      registerobj.enterpassword(registerData["v-password"])
      registerobj.enterconfirmpass(registerData["v-password"])
    })
    it(' password input is not same as confirm password ',()=>{
    
      registerobj.enterpassword(registerData["bv-password1"])
      registerobj.enterconfirmpass(registerData["v-password"])
    })
    it(' validation usermame field with valid email ',()=>{
    registerobj.enterusername(email)
    })
    it(' validation usermame field with valid invalid email ',()=>{
    registerobj.enterusername(registerData["inv-username"])
    })

    it.only(' validation usermame flow with invalid email ',()=>{
    registerobj.enterusername(registerData["exist-username"])
    })
    

    

   






})



