

export class registerPage{
    weblocators={
        registerBtn:'.vendor-registration-text',
        checkbox1:'[name="consent1"]',
        checkbox2:'[name="consent2"]',
        acceptbutton:'.accept-btn',
        quickRegisterbtn:'.nav-top-labels',
        registerCountry:'[name="selectedCountry"]',
        vendorType:'[name="VendorType"]',
        companyType:'[name="CompanyType"]',
        authorizedCapital:'[name="RegisteredCapitals"]',
        establishedDate:'[name="EstablishedDate"]',
        username:'[name="UserName"]',
        password:'[name="Password"]',
        confirmPassword:'[name="ConfirmPassword"]',
        companyname:'[name="CompanyName"]',
        website:'[name="Website"]',
        phonenumber:'[name="PhoneNumber"]',
        mobilenumber:'[name="MobileNumber"]',
        adressline1:'[name="Address1"]',
        adressline2:'[name="Address2"]',
        city:'[name="City"]',
        state:'[name="selectedState"]',
        postalcode:'[name="PostalCode"]',
        registerNowbtn:'.button-submit',
        disclaimerbox:'#disclaimerCheckbox',
        companyTypeError:'Please select the Company Type.',
       vendorTypeError:'Please select the Vendor Type.',
        establishedDateError:'Please Enter the Established Date.',
       usernameError:'Please Enter the Username.',
       passwordError:'Password should be 8 - 20 characters include atleast one uppercase, lowercase, number & special character.',
       confirmPasswordError:'Please match the password',

        companynameError:'Please Enter the Company Name.',
       adressline1Error:'Please Enter the Address Line 1.',
       stateError:'Please select the State/Region.',
       cityErrror:'Please select the City.',
      postalcodeError:'Please Enter the Postal Code.',
      registerCountryError:'Please select the Registered Country.',
      usernameErrorAT:'Username should be in a proper format e.g. something@name.com',
      adressline1ErrorAT:'Address Line 1 should be minimum 5 characters.',
       postalcodeErrorAT:'Postal Code should be minimum 5 characters.'

         }
    openurl(){
        cy.visit('https://vendor-test.conqt.com/')
    }

      clickRegisterbtn(){
        cy.get(this.weblocators.registerBtn).click()
      }
      checkTheBox(){
   cy.get(this.weblocators.checkbox1).check()
   cy.get(this.weblocators.checkbox2).check()
      }
      clickAccept(){
        cy.get(this.weblocators.acceptbutton).click()
      }
      clickquickregister(){
        cy.get(this.weblocators.quickRegisterbtn).eq(1).click()
      }
      selectcountry(country){
         cy.get(this.weblocators.registerCountry).select(country)
      }
      selectVendor(vendata){
        return cy.get(this.weblocators.vendorType).as("vt").select(vendata)
        
      }
      selectCompanytype(CompanyType){
        cy.get(this.weblocators.companyType).select(CompanyType)
      }
      typecapital(capital){
        cy.get(this.weblocators.authorizedCapital).type(capital)
      }
      date(){
        cy.get(this.weblocators.establishedDate).then(($input) => {
          const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
          nativeInputValueSetter.call($input[0], '2025-01-02');
          $input[0].dispatchEvent(new Event('input', { bubbles: true }));
        });

      }
      enterusername(mail){
        cy.get(this.weblocators.username).type(mail)
      }
      enterpassword(pass){
        cy.get(this.weblocators.password).type(pass)
        cy.log(pass)
      }
      enterconfirmpass(cpass){
        cy.get(this.weblocators.confirmPassword).type(cpass)
        cy.log(cpass)
      }
      entercompanyname(com){
        cy.get(this.weblocators.companyname).type(com)
      }
      enterwebsite(wname){
            cy.get(this.weblocators.website).type(wname)    
      }
      enterphonenumber(phone){
        cy.get(this.weblocators.phonenumber).type(phone)
      }
      entermobilenumber(mbnum){
        cy.get(this.weblocators.mobilenumber).type(mbnum)
      }
      enterAddress1(addr1){
        cy.get(this.weblocators.adressline1).type(addr1)
      }
      enterAddress2(addr2){
        cy.get(this.weblocators.adressline2).type(addr2)
      }
      entercity(city){
        cy.get(this.weblocators.city).select(city)
      }
      enterstate(state){
        cy.get(this.weblocators.state).select(state)
      }
      enterpostalcode(postalcode){
        cy.get(this.weblocators.postalcode).type(postalcode)
      }
      clickregisternowbtn(){
      cy.get(this.weblocators.registerNowbtn).click()

      }
      Disclaimercheck(){
        cy.get(this.weblocators.disclaimerbox).check()
      }
      submit(){
        cy.contains('Submit').click()
      }

      registerCountryError(){
      return cy.contains(this.weblocators.registerCountryError)
      }
      companyTypeError(){
        return cy.contains(this.weblocators.companyTypeError)
      }
      vendorTypeError(){
        return cy.contains(this.weblocators.vendorTypeError)
      }
      establishedDateError(){
        return cy.contains(this.weblocators.establishedDateError)
      }
      usernameError(){
        return cy.contains(this.weblocators.usernameError)
      }
      passwordError(){
        return cy.contains(this.weblocators.passwordError)
      }
      confirmPasswordError(){
        return cy.contains(this.weblocators.confirmPasswordError)
      }
      adressline1Error(){
        return cy.contains(this.weblocators.adressline1Error)
      }
      stateError(){
        return cy.contains(this.weblocators.stateError)
      }
      cityErrror(){
        return cy.contains(this.weblocators.cityErrror)
      }
      postalcodeError(){
        return cy.contains(this.weblocators.postalcodeError)
      }
      companynameError(){
        return cy.contains(this.weblocators.companyTypeError)
      }
      
      usernameErrorAT(){
        return cy.contains(this.weblocators.usernameErrorAT)
      }
      
      adressline1ErrorAT(){
        return cy.contains(this.weblocators.adressline1ErrorAT)
      }
      
      postalcodeErrorAT(){
        return cy.contains(this.weblocators.postalcodeErrorAT)
      }
     
      
      

      












}