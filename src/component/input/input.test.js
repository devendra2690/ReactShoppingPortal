import React from 'react';

import {shallow,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from './input';
import Auxillary from '../../hoc/auxillary';

configure({adapter:new Adapter()});

describe('<Input/>',()=> {
          
   let wrapper;

   beforeEach(() =>{

     wrapper = shallow(<Input/>)
   });

   it("should not display input box",() => {
        
       expect(wrapper.find(Auxillary)).toHaveLength(1);
       expect(wrapper.find('.inputClass')).toHaveLength(0);
    });

   it("should  display input box",() => {
        
       wrapper.setProps({type:"INPUT", placeholder:"Enter Email ID", class:"inputClass", innerType:"text", label:"emailid", fieldName:"Email ID"});
       
       expect(wrapper.find(Auxillary)).toHaveLength(2);
       expect(wrapper.find('.inputClass')).toBeDefined();
       expect(wrapper.find('.inputClass')).toHaveLength(1);
       expect(wrapper.find('.inputClass').html()).toContain('type=\"text\"');
       expect(wrapper.find('.inputClass').html()).toContain('placeholder=\"Enter Email ID\"');
    });


    it('should display checkbox',() =>{

       wrapper.setProps({type:"CHECKBOX", class:"checkBoxClass", innerType:"checkbox"});

       expect(wrapper.find('.checkBoxClass').html()).toContain('type=\"checkbox\"');
       expect(wrapper.find(Auxillary)).toHaveLength(2);
    });
});