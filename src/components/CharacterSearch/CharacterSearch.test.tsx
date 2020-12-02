import { cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';

import CharacterSearch from './CharacterSearch';

describe("search component tests", ()=>{

    let props ={
        onSelectCharacter : jest.fn()
    }

    jest.mock("../../services/swapi",  ()=>{
        return [{
            name: "Luke Skywalker",
            birth_year: "19BBY",
            gender : "male",
            hair_color: "blond",
            height: "172",
            mass: "77",
            created: "2014-12-09T13:50:51.644000Z",
            edited: "2014-12-20T21:17:56.891000Z",
            eye_color: "blue",
            homeworld: "http://swapi.dev/api/planets/1/"
        }]
    });

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