import React from 'react'
import {shallow} from 'enzyme'
import App from './App'
import {Timer} from './Components/Timer/Timer'


describe('App',() =>{

const container=shallow(<App/>)
it('We are making Snapshot of App Comp file',() =>{
  expect(container).toMatchSnapshot()
})

it('We only checking Div',() =>{
  expect(container.find('div').length).toBe(1)
})
it('We are checking The Timer whether ava of not',() =>{
  expect(container.containsMatchingElement(<Timer/>)).toEqual(true)
})

})