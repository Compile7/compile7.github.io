---
title: "How to Write Test Cases for Registration and Login Page"
date: "2022-11-15"
coverImage: test-cases-for-registration-and-login-page.png
tags:
  - "Testing"
  - "QA"
description: "Here is a set of test cases for Login and Registration Pages to test and ensure functional quality."
author: "Gaurav Bewal"
prevLabel: How to Fetch a Remote Branch Using Git
previous: git-fetch-remote-branch
nextLabel: Go Functions Explained with Examples
next: go-functions-with-examples
---

Writing test cases is an essential task for a tester in application testing. It requires experience and a keen eye for detail to build scenarios, meaning that an application tester needs to focus on creating a set of variables or conditions that will help them determine whether the software meets requirements and functions flawlessly.

To reduce that hassle, we have compiled a list of use cases that you need to test a signup or login page. We hope these will help you to create error-free registration/login pages.

## Before We Start

You should gather all the customer requirements you can. A helpful list of requirements are:

1. FirstName
2. Confirm Password
3. LastName
4. Address
5. UserName
6. PhoneNumber
7. Email ID
8. Gender
9. Password

Required fields are:
1. Email ID 
2. UserName
3. Password
4. Confirm Password 


Validation for fields:
1. Email
2. Password: It should be alphanumeric, and the length should be 8 to 32 characters.
3. PhoneNumber: Phone Numbers should only have Numbers, and country codes are required.

After successful Verification, an email should be sent to the user.

On Required fields, display `*`.

Now, let’s begin with our test cases. Although most testers use Bugzilla or other test management tools to maintain test cases, you can also use Excel or spreadsheets.

## Test Cases for Registration Page

Create signup and login pages by assuming some client requirements, such as:

- Username and password are mandatory fields
- There is a cancel and reset button at the bottom of the form
- Radio buttons and checkboxes are placed correctly
- The Password limit should be 8-32 characters (alphanumeric).

| Sr No. | Test Cases | Feature | Description | Steps To Execute | Test Data / Input  | Expected Results  |
|--------|------------|---------|-------------|------------------|---------------------|-------------------|
| 1 | TC-001| User Interface  | Check all the text boxes,  radio buttons, buttons, etc   | 1. Click on Radio buttons, buttons, and dropdowns | N/A | UI should be perfect |
| 2 | TC-002| Required fields | Check the required fields by not filling any data  | 1. Do not enter any value in the field <br/> 2. Click on the Register button | N/A | It should show a mandatory symbol (`*`) on mandatory fields. |
| 3 | TC-003| Required fields | Check user should Register by filling all the required fields | 1. Enter valid values in the required fields <br/> 2. Click the Register button | N/A | 1. Users should be registered successfully <br/> 2. A successful registration message should show up <br/> 3. Mail should be sent to the user |
| 4 | TC-004 | Optional Fields | Check all the optional fields when data is not filled | 1. Do not enter any detail in optional fields <br/> 2. Enter valid data in required fields <br/> 3. Click on the Signup button | N/A | 1. It should not ask to fill in the optional fields <br/> 2. The user should be registered successfully <br/> 3. A successful registration message should show up <br/> 4. An email should be sent to the user |
| 5 | TC-005| Optional Fields | Check all the optional fields when filling data | 1. Enter valid data in optional fields <br/> 2. Enter valid data in required fields <br/> 3. Click on the Register button | N/A | 1. User should be registered successfully <br/> 2. A successful registration message should show up <br/> 3. An email should be sent to the user   |
| 6 | TC-006| Email validation | 1. Check the Email text field with an Email address without @ symbol <br> 2. Check the Email text field with a random string instead of a real email <br> 3. Check the Email text field that has @ symbol written in words <br> 4. Check the Email text field with a missing dot in the email address | 1. Enter Invalid Emails <br/> 2. Click on the Register Button | 1. testAtgmail.com <br/> 2. test@gmailcom <br/> 3. test@gmail <br/> 4. @gmail | It should show the validation message for valid email |
| 7 | TC-007| Email validation | Check all the valid emails | 1. Enter valid Emails <br/> 2. Click on the Register Button.| 1. test.22@gmail.com <br/> 2. test@gmail.com | It should not show any validation message |
| 8 | TC-008| Phone  Number validation | Check the phone number when passing alphanumeric data | 1. Enter alphanumeric data in the Phone field <br/> 2. Click on Register button | 1. dada5$7567#7 | It should show the validation message for Phone Number |
| 9 | TC-009 | Phone Number validation | Check the phone number when not pass country code | 1. Enter a valid phone number without country code <br/> 2. Click on the Register button| 1. 9012078654 | It should show the validation message for `country code is required` |
|10 | TC-010| Phone Number validation | Check the phone number when passing country code | 1. Enter a valid phone number with country code <br/> 2. Click on Register button| 1. +9190112244| It should not show any validation error message |
|11 | TC-011 | Password  Validation | Check the password limit when entered value is less than the required minimum characters | 1. Enter a value that is alphanumeric but less than eight characters in length. <br/> 2. Click on the Register button| 1. Pasword | It should show a validation error message |
|12 | TC-012| Password  Validation | Check the password limit when entered value's length is greater than the maximum permissible characters | 1. Enter an alphanumeric value of more than 32 characters in length. <br/> 2. Click on the Register button | Any Random string with numbers | It should show a validation error message |
|13 | TC-013| Password  Validation | Check the password when passing only numbers | 1. Enter a string in numbers with a length between 8-32 characters <br/> 2. Click on Register button | 1. 12345678 | It should show a validation error message |
|14 | TC-014| Password  Validation | Check the password when passing valid data | 1. Enter a string in alphanumeric with a length between 8-32 characters <br/> 2. Click on the Register button | 1. Pass123456 | It should not show any validation error message |
|15 | TC-015| Required  Fields | Verify if blank spaces are passed in required fields. | 1. Go to the Site. <br/> 2. Passed blank spaces in required fields. <br/> 3. Click on the Register button  | N/A | Those Blank spaces should trim and a validation error message for required fields should show up|
|16 | TC-016| Required  Fields| Verify that an user can verify their Email ID| 1. Go to the Email. <br/> 2. Click on the verification link.| test22@gmail.com | The user should get a verification link and should be able to verify their Email ID. |
|17 | TC-017| Phone Number Validation | Verify if the phone number length is incorrect, i.e., less than ten characters. | 1. Enter a phone number of fewer than ten digits. <br/> 2. Enter all the required fields. <br/> 3. Click on Register Button | 91901122 | It should show the validation error message for phone number length. |
|18 | TC-018| Phone Number Validation | Verify if the phone number length is incorrect, i.e., more than ten characters| 1. Enter a phone number with less than ten digits. <br/> 2. Enter all the required fields. <br/> 3. Click on Register Button | 91901122445566 | It should show the validation error message for phone number length. |
|19 | TC-019| Password  Validation | Verify if the password required rules are not satisfied in the password | 1. Enter the password which does not satisfy the required rule. <br/> 2. Click on Register button | passw | It should display an error with required rules for password value (like it should contain a special character, a small case, a number, etc) |

## Test Cases for Login Page

| Sr No. | Test Cases | Feature|Description  | Steps To Execute| Expected Results |
|--------|------------|-----------|-------------|--------------------|------------------|
|1 | TC-01| User Interface | Check all the text boxes and buttons| Check Page | 1. UI should be perfect <br> 2. Text boxes and button should be aligned |
|2 | TC-02| Required Fields | Check the required fields by not filling in any data. | 1. Enter an invalid username <br/> 2. Enter the correct password <br/> 3. Click on the Login button | The user should not log in and should show a proper error message |
|3 | TC-03| User Login| Check when passing a correct username and invalid password| 1. Enter a valid username <br/> 2. Enter an incorrect password <br/> 3. Click on Login Button | The user should not log in, and a proper error message should show up |
|4 | TC-04 | User Interface  | Check Keeping Password | 1. Enter valid username <br/> 2. Do not enter password <br/> 3. Click on Login Button  | User should not log in, and a proper error message should show up |
|5 | TC-05| User Login| Check when passing correct email and password | 1. Enter a valid username <br/> 2. Enter a valid password <br/> 3. Click on Login Button| User should log in |
| 6 | TC-06| User Login | Check if the password is entered is encrypted | 1. Enter a valid username <br/> 2. Enter a password <br/> 3. Click on Login Button | Password is entered in encrypted form |
| 7 | TC-07| Signup Option for new users | Check whether the signup link for the new user is working| Click on the Signup link| Clicking the signup link takes the user to the signup page successfully |
| 8 | TC-08| Forgot Password | Verify that a user should get an error message when an unregistered email id is entered. | 1. Click on the Forgot password link. <br/> 2. Enter an unregistered email id and click on the send button.| The user should get an error message.|
| 9 | TC-09| Reset Password | Verify that a user should get an error message when entering the previous password.| 1. Go to the reset password link. <br/> 2. Enter the previous password. <br/> 3. Click on the Reset Password button.| The user should get an error message.|
| 10 | TC-10| Reset Password  | Verify that the user is able to reset their password | 1. Go to the reset password link. <br/> 2. Enter a new password and a confirm password. <br/> 3. Click on the Reset Password button.| The user should get the success message, and the password should reset. |
| 11 | TC-11 | Reset Password | Verify that the user should get an error message when the password and confirm password do not match| 1. Go to the reset password link. <br/> 2. Enter a different new password and a confirm password. <br/> 3. Click on the Reset Password button | The users should get an error message |
| 12 | TC-12| Reset Password | Verify that the user can log in with a new password. | 1. Go to the reset password link <br/> 2. Enter a new password and a confirm password <br/>  3. Click on the Reset Password button. <br/> 4. Log in by using the new password | The user should log in |
| 13 | TC-13| Reset Password | Verify that if the user enters a new password that does not cover the basic password requirements, an error message should show up | 1. Go to the reset password link. <br/> 2. Enter a new password that does not cover the basic requirements. <br/> 3. Click on the Reset Password.| The user should get an error message |
| 14 | TC-14| Required Fields | Verify if blank spaces are passed in required fields. | 1. Go to the Site <br/> 2. Passed blank spaces in required fields. <br/> 3. Click on the Login button | Those Blank spaces should trim, and the Validation error message for required fields should be visible. |
| 15 | TC-15 | Welcome Email | Verify that new users should get a welcome email after login | 1. Go to the Email. <br/> 2. Enter Login Email | Users should get a welcome email on their email id |
| 16 | TC-16 | User Login | Verify when passing incorrect Email and correct password | 1. Enter incorrect Email <br/> 2. Enter the correct password. <br/> 3. Click on the Login Button | User should not be able to log in, and the error message should be displayed |
| 17 | TC-17 | User Login | Verify when passing both incorrect Email and password | 1. Enter an incorrect Email. <br/> 2. Enter an incorrect password. <br/> 3. Click on the Login Button | The user should not be able to log in, and the error message should be displayed. |
| 18 | TC-18 | User Forgot Password | Verify Forgot Password sends a forgot password link | 1. Click on the Forgot Password link <br/> 2. Enter an Email ID and click on the send button. <br/> 3. Now go to mail7.io and enter the email id | The user should get a forgot password link on their email id |


## Conclusion

You need to think like an end-user to write the best test cases and get different scenarios of what will happen in actual circumstances. If you instill this creativity and perceive the product from the view of an end-user, you will undoubtedly be closer to creating an error-free application.

Be a perfectionist. Happy testing!
