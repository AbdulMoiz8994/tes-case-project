import React from 'react'
import {shallow} from  'enzyme'
import {Timer} from './Timer';
import {TimerButton} from '../TimerButton/TimerButton'

describe('We are checking Div',() =>{

    const container=shallow(<Timer/>)
    it('We are Chekcinf din Of Timer Comp',() =>{
        expect(container.find('div').length).toBeGreaterThanOrEqual(1)
    })
    it('checking Heading H1',() =>{
        expect(container.find('h1').length).toBeLessThanOrEqual(1)
    })

   fit('The Comp  shoul have Three span tag',() =>{
       expect(container.find('span').length).toBeGreaterThanOrEqual(3)
   })
   it('The Timer Button should Have 3',() =>{
       expect(container.containsMatchingElement(<TimerButton ButtonAction={jest.fn} ButtonValue={""}/>)).toEqual(true)
   })

})