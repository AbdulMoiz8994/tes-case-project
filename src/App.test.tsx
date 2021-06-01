import React from 'react'
import {shallow} from 'enzyme'
import App from './App'



describe('App',() =>{

const container=shallow(<App/>)
it('We are making Snapshot of App Comp file',() =>{
  expect(container).toMatchSnapshot()
})

fit('We only checking Div',() =>{
  expect(container.find('div').length).toBe(1)
})
})