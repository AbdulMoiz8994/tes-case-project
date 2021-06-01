import React from 'react'
import {shallow} from  'enzyme'
import {Timer} from './Timer';

describe('We are checking Div',() =>{

    const container=shallow(<Timer/>)
    it('We are Chekcinf din Of Timer Comp',() =>{
        expect(container.find('div').length).toBeGreaterThanOrEqual(1)
    })
    it('checking Heading H1',() =>{
        expect(container.find('h1').length).toBeLessThanOrEqual(1)
    })
})