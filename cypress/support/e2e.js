
import './commands'
import './CustomerCommand/standard.acttion.cy'
import './CustomerCommand/problem.action.spec'
import './CustomerCommand/locked.action.spec'

Cypress.on('uncaught:exception', ()=>{
    return false
})


