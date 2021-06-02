import React from 'react';
import {shallow} from 'enzyme'
import {TimerButton} from './TimerButton'


describe('Timer Button', () => {
    const container=shallow(<TimerButton  ButtonAction={jest.fn} ButtonValue={""}/>)

    it('Checking Parent Div',() =>{
        expect(container.find('div').length).toBe(1)
    })


    it('chekcing Button',() =>{
        expect(container.find('button').length).toEqual(1)
    })
})
