
import './commands'
import './CustomerCommand/standard.acttion.cy'
import './CustomerCommand/performance.action'
import './CustomerCommand/problem.action.spec'
import './CustomerCommand/locked.action.spec'

Cypress.on('uncaught:exception', ()=>{
    return false
})


