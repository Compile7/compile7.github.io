---
title: "How to write test cases for Registration & Login"
date: "2020-06-24T16:51:00.000Z"
category: "Mail7"
tags:
  - "Test Case"
  - "Mail7"
  - "Registration"
  - "Login"
description: "
Writing test cases (which is an important task for a tester in application testing) requires experience and a keen eye for detail in order to build scenarios. This means that an application tester needs to focus on creating a set of variables or conditions which will help him/her to determine whether the software meets requirements and functions flawlessly...."
author: "Gaurav Bewal"
---




Writing test cases (which is an important task for a tester in application testing) requires experience and a keen eye for detail in order to build scenarios. This means that an application tester needs to focus on creating a set of variables or conditions which will help him/her to determine whether the software meets requirements and functions flawlessly. To reduce that hassle, we have compiled a list of use cases that you need to test a register or login page. We hope they will help you to create more error-free register/login pages. 

Before We Start,

You should gather all the customer requirements you can. The list of requirements which can be useful are:
1. FirstName
2. LastName
3. UserName
4. Email ID
5. Password
6. Confirm Password
7. Address
8. Phone Number
9. Gender

Required Fields are - Email, Password, Confirm Password.
Validation For Fields -

- Email: Should be in a proper Email format.
- Password: It should have alphanumeric, Length should be 8 to 32.
- PhoneNumber: Phone Number should have only Numbers, Country code is required.
- After successful Registration Verification email should be sent to the user.
- After the first successful Login Welcome email should be sent to the user.
- On Required fields * should show.

Now, let’s begin with our test cases. Although most testers use Bugzilla to maintain test cases, you can also use Excel or spreadsheets.

## Test Cases for Registration Page:

| Sr. No. | Test Case | Feature | Steps to Execute | Test Data/ Input | Expected Result |
|---|---|---|---|---|---|
| TC-01 | Verify all the text boxes, buttons, links, titles, etc. are at their defined position. | User Interface | 1. Go to the Site. | N/a | UI should be perfect |
| TC-02 | Verify the required fields by not filling any data. | Required Fields | 1. Go to the Site. <br/> 2. Click on the Register button | N/a | Validation error message for required fields should be visible. |
| TC-03 | Verify if blank spaces are passed in required fields. | Required Fields | 1. Go to the Site. <br/> 2. Passed blank spaces in required fields. <br/> 3. Click on the Register button | N/a | Those Blank spaces should trim and Validation error message for required fields should be visible. |
| TC-04 | Verify user can register by filling mandatory fields. | Required Fields | 1. Go to the Site. <br/> 2. Click to Create an Account. <br/> 3. Enter the value in all mandatory fields. <br/> 4. Click on the Register button. | N/a | User should Register Successfully and a verification link is sent to their Email ID. |
| TC-05 | Verify user can verify its Email ID | Email Verification | 1. Go to [Mail7](https://www.mail7.io/). <br/> 2. Enter registered Email id 2. Click on the verification link. | N/a | User should get a verification link and be able to verify his/her Email ID. |
| TC-06 | Verify user can register by not filling optional fields. | Optional Fields | 1. Go to the Site. <br/> 2. Click to Create an Account. <br/> 3. Enter the value in all mandatory fields. <br/> 4. Click on the Register button. | N/a | User should Register Successfully and a verification link is sent to their Email ID. |
| TC-07 | Verify the Email text field that has an Email address without @ symbol. • Verify the Email text field that has random string instead of real email. • Verify the Email text field that has @ symbol written in words. • Verify the Email text field that has a missing dot in the email address. | Email validation | 1. Go to the Site. <br/> 2. Click to Create an Account. <br/> 3. Enter invalid Emails. <br/> 4. Click on the Register button. | 1. `testAtmail7.io`  <br/>  2. `test@.mail7io`  <br/> 3. `test@mail7`  <br/> 4. `@mail7.io` | It should show the validation error message for invalid emails. |
| TC-08 | Verify all the valid emails | Email validation | 1. Go to the Site. <br/> 2. Click to Create an Account.  <br/> 3. Enter valid Emails. <br/>  4. Click on the Register button. | 1. `test.434@mail7.io` <br/>  2. `test@mail7.io` <br/>  | It should not show any validation message |
| TC-09 | Verify the phone number when passing alphanumeric data | Phone Number validation | 1. Enter alphanumeric data in phone field  <br/>  2. Click on Register button | 1. `dada5$7567#7` | It should show the validation error message for Phone Number |
| TC-10 | Verify the phone number when not pass country code | Phone Number validation | 1. Enter valid phone number without country code  <br/> 2.Click on signup button | 1. `9012078654` | It should show the validation error message for country code is required |
| TC-11 | Verify the phone number when pass country code | Phone Number validation | 1. Enter valid phone number with country code <br/>  2.Click on Register Button | 1.`+9190112244` | It should not show any validation error message |
| TC-12 | Verify if the length of the phone number is incorrect i.e. less than 10. | Phone Number validation | 1. Enter phone number less than 10 digits. <br/>  2. Enter all required fields. <br/>  3. Click on Register Button | `91901122` | It should show the validation error message for phone number length. |
| TC-13 | Verify if the length of the phone number is incorrect i.e. more than 10. | Phone Number validation | 1. Enter phone number more than 10 digits. <br/>  2. Enter all required fields.  <br/> 3. Click on Register Button | `91901122445566` | It should show the validation error message for phone number length. |
| TC-14 | Verify the password limit when enter value less than min | Password validation | 1. Enter value which is alphanumeric but less than 8 <br/>  2.Click on Register Button | 1. Password | It should show validation error message |
| TC-15 | Verify the password limit when enter value greater than max | Password validation | 1. Enter value which is alphanumeric but less more than 32 <br/>  2.Click on Register Button | `redhatisgood434adasdasdasd3243dsadadsad432423` | It should show validation error message |
| TC-16 | Verify the password when passing valid data | Password validation | 1. Enter a value in alphanumeric which is in between 8-32  <br/> 2.Click on Register button | 1.`Pass#123456` | It should not show any validation message Test case for Login page |
| TC-17 | Verify if the password required rules are not satisfied in the password | Password validation | 1. Enter the password which does not satisfy the required rule. <br/>  2.Click on Register button | pass | It should display error with required rules for password value (like it should contain a special character, a small case, a number) |

## Test Cases for Login Page:

| Sr. No. | Test Case | Feature | Steps to Execute | Test Data/ Input | Expected Result |
|---|---|---|---|---|---|
| TC-01 | Verify all the text boxes, buttons, links, titles, etc. are at their defined position. | User Interface | 1. Go to the Site. | N/a | UI should be perfect. |
| TC-02 | Verify the required fields by not filling any data. | Required Fields | 1. Go to the Site. <br/>  2. Click on the Login button | N/a | Validation error message for required fields should be visible. |
| TC-03 | Verify if blank spaces are passed in required fields. | Required Fields | 1. Go to the Site.  <br/> 2. Passed blank spaces in required fields.  <br/> 3. Click on the Login button | N/a | Those Blank spaces should trim and Validation error message for required fields should be visible. |
| TC-04 | Check When passing correct Email and invalid password | User Login | 1. Enter valid Email <br/>  2. Enter incorrect password  <br/> 3. Click on Login Button | N/a | User should not log in and should show proper error message |
| TC-05 | Check Keeping Password blank | User Login | 1. Enter valid Email  <br/> 2. Do not enter password <br/>  3. Click on Login Button | N/a | User should not log in and should show proper error message |
| TC-06 | Check when pass correct email and password | User Login | 1. Enter valid Email  <br/> 2. Enter valid password <br/>  3. Click on Login Button | `test@mail7.io` `test@123` | User should log in. |
| TC-07 | Verify new user should get the welcome email once after the login. | User Login | 1. Go to the [mail7.io](https://www.mail7.io) page.  <br/> 2. Enter Login Email. | `test@mail7.io` | User should get the welcome email on his/her email id. |
| TC-08 | Verify when passing incorrect Email and correct password | User Login | 1. Enter incorrect Email.  <br/> 2. Enter the correct password. <br/>  3. Click on the Login Button. | `test12@mail7.io` `test@123` | User should not be able to log in and the error message should be displayed. |
| TC-09 | Verify when passing both incorrect Email and password | User Login | 1. Enter incorrect Email. <br/> 2. Enter the correct password. <br/> 3. Click on the Login Button. | `test12@mail7.io` `test@12345` | User should not be able to log in and the error message should be displayed. |
| TC-10 | Verify Forgot Password sends a forgot password link. | User Forgot Password. | 1. Click on the Forgot Password link. <br/> 2. Enter Email and click on the send button. <br/> 3. Now go to `mail7.io` and enter the email id. | `test@mail7.io` | User should get the forgot password link on his/her email id. |

## Conclusion

You need to think like an end-user for writing the best test cases and getting different scenarios of what will happen in real circumstances. If you developed this creativity and perceive the product with the eyes of an end-user, you will certainly be closer to creating an error-free application.