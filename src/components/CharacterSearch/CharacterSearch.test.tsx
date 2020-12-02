import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
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

    jest.mock('../../services/swapi', () => {
        const results = [{
            name: "Luke Skywalker",
            birth_year: "19BBY",
            gender : "male",
            hair_color: "blond",
            height: 172,
            mass: 77,
            created: "2014-12-09T13:50:51.644000Z",
            edited: "2014-12-20T21:17:56.891000Z",
            eye_color: "blue",
            films: [ "http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/"],
            homeworld: "http://swapi.dev/api/planets/1/"
        }];
    
        return {
            CompanyService: {
                fetchPeople: () => results
            }
        };
    });

    it("change value correctly", async ()=>{
        let {container, getByText } = render(<CharacterSearch {...props} />);

        let selectInput: any;
        await waitFor(() => (selectInput = container.querySelector('input')));
        fireEvent.change(selectInput, { target: { value: 'Luke' } });
        await waitFor(() => ());
        console.log(container.innerHTML);
        //expect(getByText('Luke Skywalker')).toBeDefined();
        
    })
})