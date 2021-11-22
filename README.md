# Anthony's Bank Tech Test (JS)

## Introduction

Welcome to my attempt at the week 10 Makers Bank Tech test.

## Setup
-----

* Clone the repository  
`git clone `
* Install the dependencies  
`npm install`
* Open the REPL  
`node`
* Require the account file and save to a variable  
`const Account = require('./lib/account')`
* Instantiate the class  
`const bank = new Account`
* Deposit money using .deposit  
`bank.deposit(100)`
* Withdraw money using .withdraw  
`bank.withdraw(100)`
* Generate a report using .statement  
`bank.statement()`
## Misc
-----

* To run the linter  
`npm run lint`
* To run the tests  
`npm run test`
* To check code coverage  
`npm run coverage`

### Requirements
-----

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)  
* Deposits, withdrawal.  
* Account statement (date, amount, balance) printing.  
* Data can be kept in memory (it doesn't need to be stored to a database or anything).  

-----

## User Stories
```
As a customer  
So that I can keep my money safe  
I want to be able to deposit my money  
```
```
As a customer  
so that I can spend my money   
I'd like to be able to withdraw my money  
```
```
As a customer  
so that I can keep track of my money  
I'd like to be able to check my balance  
```
```
As a bank owner
so that I can provide meaningful reports
I'd like the time of the deposit and withdrawal to be recorded
```
```
As a customer
so that I can monitor my budget
I'd like to be able to see an detailed account statement
```
-----

<details> 
  <summary>View the given specification</summary> 
  
# Bank tech test

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time.  This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Self-assessment

Once you have completed the challenge and feel happy with your solution, here's a form to help you reflect on the quality of your code: https://docs.google.com/forms/d/1Q-NnqVObbGLDHxlvbUfeAC7yBCf3eCjTmz6GOqC9Aeo/edit
</details>