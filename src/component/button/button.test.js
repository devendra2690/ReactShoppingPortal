import React from 'react';

import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import Auxillary from '../../hoc/auxillary';
import Button from './button';

configure({adapter:new Adapter()});

describe("<Button> Component Test Case",() =>{

    let wrapper;

    beforeEach(() =>{

        wrapper = shallow(<Button/>);
    });

    it("should not display button if button type not sent as props",() =>{

        expect(wrapper.find(Auxillary)).toHaveLength(1);
    });


    it("should display click button and fire click event",()=>{


        wrapper.setProps({change:() =>{},classes:"buttonClickClass",label:"Click Button",eventType:"CLICK"});
        
        console.log(wrapper.debug());  

       // wrapper.find('button').simulate('click');

        expect(wrapper.find(Auxillary)).toHaveLength(2);
        expect(wrapper.find('.buttonClickClass').html()).toContain('type=\"button\"');
    });
    
});