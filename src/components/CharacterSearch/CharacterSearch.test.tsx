import { cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';

import CharacterSearch from './CharacterSearch';

describe("search component tests", ()=>{

    let props ={
        onSelectCharacter : jest.fn()
    }

    afterEach(cleanup);

    it("renders without crashing", () => {
        let wrapper = shallow(<CharacterSearch {...props}/>)
        expect(wrapper.length).toBe(1)
    });

    it("renders correctly", () => {
        let wrapper = shallow(<CharacterSearch {...props}/>)
        expect(wrapper.type()).toEqual('div');
    });

})